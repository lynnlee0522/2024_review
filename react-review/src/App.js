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
import { WindowComponent } from "./components/阿里面试题/实时显示窗口大小/index"
// import Parent from './components/简则面试题';
// import Parent from './components/生命周期函数';
// import { CustomHookDemo } from './components/Hooks/useDebounce'
import { ImgComponent } from './components/阿里面试题/图片懒加载/index'
import { Counter } from './review/debounce'
// import { TestModal } from './components/Modal框/index'
import { TestModal } from './components/阿里面试题/Modal框/index2'
// import { InputComponent } from './components/阿里面试题/非受控input/index'
// import { InputComponent } from './components/阿里面试题/半角分隔符/index'
import { Test } from './components/阿里面试题/错误边界/index'

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
      {/* <Taxasholdem /> */}
      {/* <WindowComponent /> */}
      {/* <ImgComponent src="http://localhost:3000/logo192.png" /> */}
      {/* <Counter /> */}
      {/* <TestModal /> */}
      {/* <InputComponent /> */}
      <Test />
    </div>
  );
}

export default App;
