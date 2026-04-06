import { useState } from "react";

export const useFrbRequestAddVacuumCleaner = (
  refreshProductsFlag,
  setRefreshProductsFlag,
) => {
  const [isCreating, setIsCreating] = useState(false);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);
    fetch("http://localhost:3000/products/", {
      method: "POST",
      headers: { "Content-Type": "application/json;charset=utf-8" },
      body: JSON.stringify({
        name: "New vacuum cleaner",
        price: 4500,
      }),
    })
      .then((rawResponse) => rawResponse.json())
      .then((response) => {
        console.log("vacuum cleaner is add, the server answer", response);
        setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsCreating(false));
  };

  return { isCreating, requestAddVacuumCleaner };
};
