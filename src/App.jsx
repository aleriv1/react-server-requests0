import "./App.css";
import { UseEffect } from "./components/UseEffect";
import { UseEffectNew } from "./components/UseEffectNew";
import { BackendMock } from "./components/BackendMock";

function App() {
  return (
    <>
      <BackendMock />
      <UseEffectNew />
      <UseEffect />
      {/* <h1>Alena server request</h1> */}
    </>
  );
}

export default App;
