import { useState, useEffect } from "react";

const PRODUCTS_MOCK = [
  {
    id: "1",
    name: "tv",
    price: 1000,
  },
  {
    id: "2",
    name: "sm",
    price: 1500,
  },
  {
    id: "3",
    name: "fan",
    price: 500,
  },
];

export const BackendMock = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    new Promise((resolve) => {
      resolve({ json: () => PRODUCTS_MOCK });
    })
      .then((loadedData) => {
        return loadedData.json();
      })
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      });
  }, []);

  return (
    <>
      <h2>BackendMock</h2>
      {products.map(({ id, name, price }) => {
        return (
          <div key={id}>
            {name} - {price}
          </div>
        );
      })}
    </>
  );
};
