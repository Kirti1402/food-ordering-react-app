import { createContext, createElement, useState } from "react";
import { useEffect } from "react";
import {fakeFetch} from "../fakeFetch"

export const MenuContext = createContext()

export const MenuProvider = ({children}) =>{
    const [menuList,setMenuList] = useState()

    const menuListUpdating = (menu) =>{
        setMenuList(menu)
    }

    const fetchMenuList = async () => {
        try {
          const {
            data: { menu },
          } = await fakeFetch("https://example.com/api/menu");
          menuListUpdating(menu);
        } catch (error) {
          console.log(error);
        }
      };
      useEffect(() => {
        fetchMenuList();
      }, []);
    return <MenuContext.Provider
    value={{
        menuList,
        menuListUpdating
    }}
    >
        {children}
    </MenuContext.Provider>
}