import { useState } from "react";
import { ref, push } from "firebase/database"; // push for add to the table
import { db } from "../../firebase";

export const useFrbRequestAddVacuumCleaner = () => {
  const [isCreating, setIsCreating] = useState(false);

  const requestAddVacuumCleaner = () => {
    setIsCreating(true);

    const productsDbRef = ref(db, "products");

    push(productsDbRef, {
      // it returns promise; but we get the answer right away
      name: "The new vacuum cleaner",
      price: 10000,
    })
      .then((response) => {
        console.log("vacuum cleaner is add, the server answer", response);
        // setRefreshProductsFlag(!refreshProductsFlag);
      })
      .finally(() => setIsCreating(false));
  };

  return { isCreating, requestAddVacuumCleaner };
};
