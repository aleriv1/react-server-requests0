import { useEffect, useState } from "react";

let siteUrl = "https://mocki.io/v1/4fda5797-2f13-4125-a859-e29fa8fc0c5c";

// export const UseEffect = (siteUrl) => {
export const UseEffect = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    // fetch("https://mocki.io/v1/4fda5797-2f13-4125-a859-e29fa8fc0c5c")
    fetch(siteUrl)
      .then((loadedData) => loadedData.json())
      .then((loadedProducts) => {
        setProducts(loadedProducts);
      });
    // }, []);
  }, [siteUrl]);

  return (
    <>
      <h2>Alena!!!</h2>
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
