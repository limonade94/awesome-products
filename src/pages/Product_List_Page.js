import React, { useContext } from "react";
import { DataContext } from "../context/context";

export default function Product_List_Page() {
  const [list] = useContext(DataContext);

  console.log(list);
  return <div className="products">Product List Page</div>;
}