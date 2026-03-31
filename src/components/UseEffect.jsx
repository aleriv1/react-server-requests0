import { useEffect, useState } from "react";

export const UseEffect = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch("https://mocki.io/v1/4fda5797-2f13-4125-a859-e29fa8fc0c5c")
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      });
  }, []);

  return (
    <>
      <h2>Alena</h2>
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
