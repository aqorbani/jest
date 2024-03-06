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
    setProducts(data);
  }, [loading]);

  useEffect(() => {
    let productsFiltered = [...products];

    productsFiltered = productsFiltered.filter((item) => {
      return item.category === category;
    });
    setFilteredProducts(productsFiltered);
  }, [category]);

  const allProducts = filteredProducts.length ? filteredProducts : products;

  return <div>
    <h2>Products</h2>
    {
      loading ? "Loading" : (
        <>
          <div className="flex flex-wrap justify-around">
            <Filter setCategory={setCategory} />
          </div>
          <ul className="flex flex-wrap justify-around">
            {
              allProducts.map((item: object) => (
                <li key={item.id}>
                  <Card  {...item} />
                </li>
              ))
            }
          </ul>
        </>
      )
    }
  </div>;
}
