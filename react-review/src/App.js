import logo from './logo.svg';
import './App.css';
import ControlledComponent from './components/受控组件和非受控组件';
import Home from './components/Portal';
import EffectHookCancelDemo from './components/Hooks/useEffect';
import StateHookDemo from './components/Hooks/useState';
// import ReducerHookDemo from './components/Hooks/useReducer_exercise';
import CallbackHookDemo02 from './components/Hooks/useCallback';
// import RefHookDemo02 from './components/Hooks/useRef2';
import RefHookDemo01 from './components/Hooks/useRef';
import ReducerHookDemo from './components/组件间通信/test';
import Taxasholdem from './components/Taxasholdem';
// import Parent from './components/简则面试题';
// import Parent from './components/生命周期函数';
// import { CustomHookDemo } from './components/Hooks/useDebounce'

function App() {
  return (
    <div className="App">
      {/* <ControlledComponent /> */}
      {/* <Home /> */}
      {/* <EffectHookCancelDemo /> */}
      {/* <StateHookDemo /> */}
      {/* <ReducerHookDemo /> */}
      {/* <CallbackHookDemo02 /> */}
      {/* <RefHookDemo01 /> */}
      {/* <ReducerHookDemo /> */}
      {/* <CustomHookDemo  /> */}
      {/* <Parent /> */}
      <Taxasholdem />
    </div>
  );
}

export default App;
