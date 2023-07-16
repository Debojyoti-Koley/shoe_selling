import React from "react";
import "./List.scss";
import Card from "../Card/Card";
import useFetch from "../../hooks/useFetch";

const List = ({ subCats, maxPrice, sort, catId }) => {
  // const { data, loading, error } = useFetch(
  //   `/products?populate=*&[filters][categories][id]=${catId}${subCats.map(
  //     (item) => `&[filters][sub_categories][id][$eq]=${item}`
  //   )}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`
  // );

  const subCatsFilter = subCats.map((item) => `[filters][sub_categories][id][$eq]=${item}`).join('&');
  // const url = `/products?populate=*&[filters][categories][id][$eq]=${catId}${subCatsFilter}&[filters][price][$lte]=${maxPrice}&sort=price:${sort}`;
  const url = `http://localhost:1337/api/products?populate=*&[filters][categories][id][$eq]=2&[filters][price][$lte]=276&sort=price:asc
  `

  const { data, loading, error } = useFetch(url);

  return (
    <div className="list">
      {loading
        ? "loading"
        :console.log(data)
      }
      
        {/* // : data?.map((item) => <Card item={item} key={item.id} />)} */}
    </div>
  );
};

export default List;
