import logo from './logo.svg';
import './App.css';
import ControlledComponent from './components/受控组件和非受控组件';
import Home from './components/Portal';
import EffectHookCancelDemo from './components/Hooks/useEffect';
import StateHookDemo from './components/Hooks/useState';
import ReducerHookDemo from './components/Hooks/useReducer';
import CallbackHookDemo02 from './components/Hooks/useCallback';
import RefHookDemo02 from './components/Hooks/useRef2';
import ContextDomo from './components/组件间通信/classContext';

function App() {
  return (
    <div className="App">
      <ControlledComponent />
      {/* <Home /> */}
      {/* <EffectHookCancelDemo />x */}
      {/* <StateHookDemo /> */}
      {/* <ReducerHookDemo /> */}
      {/* <CallbackHookDemo02 /> */}
      {/* <RefHookDemo02 /> */}
      {/* <ContextDomo /> */}
    </div>
  );
}

export default App;
