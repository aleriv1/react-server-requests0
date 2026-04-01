import { useEffect, useState } from "react";

export const UseEffectNew = () => {
  const [products, setProducts] = useState([]);
  const onClickHandler = () => {
    console.log("Alena!");
  };

  useEffect(() => {
    document.addEventListener("click", onClickHandler);
    return () => document.removeEventListener("click", onClickHandler);
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
