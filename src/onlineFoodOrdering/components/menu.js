import { useContext, useState } from "react";
import { MenuContext } from "../context/menuDetailFetchContext";
import { CartContext } from "../context/addToCartContext";
import { useNavigate } from "react-router-dom";

export const Menu = () => {
  const { menuList } = useContext(MenuContext);
  const { cartList, settingCartList, productId, setProductID } =
    useContext(CartContext);
  const navigate = useNavigate();

  const [search, setSearch] = useState("");
  const [isVeg, setIsVeg] = useState(false);
  const [isSpicy, setIsSpicy] = useState(false);
  const [sortByPrice, setSortByPrice] = useState(null);

  const getFilteredAndSortedItems = () => {
    let updatedList = menuList;
    if (search) {
      updatedList = updatedList.filter((item) =>
        item.name.toLowerCase().includes(search.toLowerCase())
      );
    }
    if (isVeg) {
      updatedList = updatedList.filter((item) => item.is_vegetarian);
    }
    if (isSpicy) {
      updatedList = updatedList.filter((item) => item.is_spicy);
    }
    if (sortByPrice === "asc") {
      updatedList = updatedList.sort((a, b) => a.price - b.price);
    } else if (sortByPrice === "desc") {
      updatedList = updatedList.sort((a, b) => b.price - a.price);
    }
    return updatedList;
  };

  const filteredCategory = getFilteredAndSortedItems();

  const addToCartBtnHandle = (foodItem) => {
    if (!cartList.includes(foodItem)) {
      const updatedlist = [...cartList, foodItem];
      settingCartList(updatedlist);
      setProductID([...productId, foodItem.id]);
    } else {
      navigate("/cart");
    }
  };

  return (
    <>
      <h1 className="heading">MenuPage</h1>

      <div className="container">
        <div className="filter-container">
          <input
            className="search-bar"
            type="text"
            value={search}
            placeholder="Search here..."
            onChange={(e) => setSearch(e.target.value)}
          />
          <label>
            <input
              type="checkbox"
              checked={isVeg}
              onChange={() => setIsVeg(!isVeg)}
            />
            Veg
          </label>
          <label>
            <input
              type="checkbox"
              checked={isSpicy}
              onChange={() => setIsSpicy(!isSpicy)}
            />
            Spicy
          </label>
          <p>Sort Price</p>
          <label>
            <input
              type="radio"
              name="sort"
              value="asc"
              onChange={(e) => setSortByPrice(e.target.value)}
            />
            Low to High
          </label>
          <label>
            <input
              type="radio"
              name="sort"
              value="desc"
              onChange={(e) => setSortByPrice(e.target.value)}
            />
            High to Low
          </label>
        </div>
        <div className="food-item-card">
          {filteredCategory &&
            filteredCategory.map((foodItem, index) => {
              const {
                id,
                name,
                description,
                price,
                image,
                is_vegetarian,
                is_spicy,
                delivery_time,
              } = foodItem;
              return (
                <div key={id} className="card">
                  <img src={image} alt={name}></img>
                  <p>Name:{name}</p>
                  <p>Description:{description}</p>
                  <p>Price:{price}</p>
                  <p>Delivery:{delivery_time}</p>
                  <button onClick={(e) => addToCartBtnHandle(foodItem)}>
                    {productId.includes(id) ? "Go To Cart" : "Add to Cart"}
                  </button>
                </div>
              );
            })}
        </div>
      </div>
    </>
  );
};
