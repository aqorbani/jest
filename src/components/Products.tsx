import { useEffect, useState } from "react";
import Card from "./Card";
import Filter from "./filter";
import { useFetch } from "../hook/useFetch";
import { API_BASE_ADDRESS } from "../constants/urls";

export default function Products() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [category, setCategory] = useState();
  const { data, loading } = useFetch(`${API_BASE_ADDRESS}/products`);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((res) => res.json())
      .then((json) => setProducts([...json]))
  })

  useEffect(() => {
    let productsFiltered = [...products];

    productsFiltered = productsFiltered.filter((item) => {
      return item.category === category;
    });
    setFilteredProducts(productsFiltered);
  }, [category]);

  const allProducts = filteredProducts.length ? filteredProducts : products;

  return <div>
    {
      loading ? "Loading" : (
        <>
          <div className="flex flex-wrap justify-around">
            <Filter setCategory={setCategory} />
          </div>
          <div className="flex flex-wrap justify-around">
            {
              allProducts.map((item: object) => (
                <Card {...item} />
              ))
            }
          </div>
        </>
      )
    }
  </div>;
}
