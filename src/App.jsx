import "./App.css";
import { UseEffect } from "./components/UseEffect";
import { UseEffectNew } from "./components/UseEffectNew";
import { BackendMock } from "./components/BackendMock/BackendMock";
import { JSONserver } from "./components/JSONserver/JSONserver";
import { PutPatchDelete } from "./components/PutPatchDelete/PutPatchDelete";
import { UserHooksHooks } from "./components/UserHooks/UserHooksHooks";
import { UserHooksApp } from "./components/UserHooks/UserHooksApp";
import { ProductsAll } from "./components/AnotherWay/ProductsAll";
import { ProductsApp } from "./components/AnotherWay/ProductsApp";
import { JSONPlaceholder } from "./components/JSONPlaceholder/JSONPlaceholder";
import { JSONPlacholderAddPost } from "./components/JSONPlaceholder/JSONPlacholderAddPost";
import { Firebase } from "./components/Firebase/Firebase";

function App() {
  return (
    <>
      <h1>Alena server request</h1>
      <Firebase />
      {/* <ProductsApp /> */}
      {/* <JSONPlacholderAddPost /> */}
      {/* <JSONPlaceholder /> */}
      {/* <ProductsAll /> */}
      {/* <UserHooksApp /> */}
      {/* <UserHooksHooks /> */}
      {/* <PutPatchDelete /> */}
      {/* <JSONserver /> */}
      {/* <hr /> */}
      {/* <BackendMock /> */}
      {/* <hr /> */}
      {/* <UseEffectNew /> */}
      {/* <hr /> */}
      {/* <UseEffect /> */}
    </>
  );
}

export default App;
