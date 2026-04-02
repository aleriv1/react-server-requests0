import "./App.css";
import { UseEffect } from "./components/UseEffect";
import { UseEffectNew } from "./components/UseEffectNew";
import { BackendMock } from "./components/BackendMock/BackendMock";
import { JSONserver } from "./components/JSONserver/JSONserver";

function App() {
  return (
    <>
      <JSONserver />
      <hr />
      <BackendMock />
      <hr />
      <UseEffectNew />
      <hr />
      <UseEffect />
      {/* <h1>Alena server request</h1> */}
    </>
  );
}

export default App;
