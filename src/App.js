import CustomUser from "./components/CustomUser";
import Iterator from "./components/Iterator"
import EffectUser from "./components/EffectUser"
import RefUser from "./components/RefUser"
import MemoUser from "./components/MemoUser"
import CallbackUser from "./components/CallbackUser"
import ContextUser from "./components/ContextUser"
import ReducerUser from "./components/ReducerUser"
import { Divider } from "antd";

function App() {
  

  return (
    <div>
      <Divider>UseState</Divider>
      <Iterator/>

      <Divider>UseEffect</Divider>
      <EffectUser/>

      <Divider>UseRef</Divider>
      <RefUser/>

      <Divider>UseMemo</Divider>
      <MemoUser/>

      <Divider>UseCallback</Divider>
      <CallbackUser/>

      <Divider>UseContext</Divider>
      <ContextUser/>

      <Divider>UseReducer</Divider>
      <ReducerUser/>
      
      <Divider>UseInput (custom hook)</Divider>
      <CustomUser/>
    </div>
  );
}

export default App;
