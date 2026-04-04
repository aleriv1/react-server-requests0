import "./App.css";
import { UseEffect } from "./components/UseEffect";
import { UseEffectNew } from "./components/UseEffectNew";
import { BackendMock } from "./components/BackendMock/BackendMock";
import { JSONserver } from "./components/JSONserver/JSONserver";
import { PutPatchDelete } from "./components/PutPatchDelete/PutPatchDelete";

function App() {
  return (
    <>
      <h1>Alena server request</h1>
      <PutPatchDelete />
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
