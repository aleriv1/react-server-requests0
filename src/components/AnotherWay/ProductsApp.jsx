import {
  useRequestGetProducts,
  useRequestAddVacuumCleaner,
  useRequestUpdateSmartphone,
  useRequestDeleteHairDryer,
} from "./ProductsHooks";
import styles from "./ProductsApp.module.scss";

export const ProductsApp = () => {
  const { products, setProducts, isLoading } = useRequestGetProducts();
  const { requestAddVacuumCleaner, isCreating } =
    useRequestAddVacuumCleaner(setProducts);
  const { requestUpdateSmartphone, isUpdating } =
    useRequestUpdateSmartphone(setProducts);
  const { requestDeleteHairDryer, isDeleting } =
    useRequestDeleteHairDryer(setProducts);

  return (
    <div className={styles.app}>
      {/* {isLoading ? <Loader /> : <ProductList products={products} />} */}
      {isLoading ? (
        <div className={styles.loader}></div>
      ) : (
        products.map(({ id, name, price }) => (
          <div key={id}>
            {name} - {price} руб
          </div>
        ))
      )}
      <button disabled={isCreating} onClick={requestAddVacuumCleaner}>
        Добавить пылесос
      </button>
      <button disabled={isUpdating} onClick={requestUpdateSmartphone}>
        Обновить смартфон
      </button>
      <button disabled={isDeleting} onClick={requestDeleteHairDryer}>
        Удалить фен
      </button>
    </div>
  );
};
