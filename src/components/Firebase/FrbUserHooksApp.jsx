import { useState, useEffect } from "react";
import {
  useFrbRequestAddVacuumCleaner,
  useFrbRequestUpdateSmartphone,
  useFrbRequestDeleteFan,
  useFrbRequestGetProducts,
} from "./index";

import styles from "./FrbUserHooksApp.module.scss";

export const FrbUserHooksApp = () => {
  const [refreshProductsFlag, setRefreshProductsFlag] = useState(false);

  const { products, isLoading } = useFrbRequestGetProducts(refreshProductsFlag);

  const { isCreating, requestAddVacuumCleaner } = useFrbRequestAddVacuumCleaner(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  const { isUpdating, requestUpdateSmartphone } = useFrbRequestUpdateSmartphone(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  const { isDeleting, requestDeleteFan } = useFrbRequestDeleteFan(
    refreshProductsFlag,
    setRefreshProductsFlag,
  );

  return (
    <>
      <h2>JSON Server</h2>
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => {
          return (
            <div key={id}>
              {name} - {price}
            </div>
          );
        })
      )}
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        add vacuum cleaner
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        update smartphone
      </button>
      <button disabled={isDeleting} onClick={requestDeleteFan}>
        delete fan
      </button>
    </>
  );
};
