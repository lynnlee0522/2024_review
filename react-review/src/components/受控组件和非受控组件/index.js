import { logDOM } from "@testing-library/react";
import { Component, createRef, forwardRef, PureComponent } from "react";

class Counter extends PureComponent {
    constructor(props) {
        super(props);

        this.state = {
            counter: 0
        }
    }

    render() {
        return (
            <div>
                <h2>当前计数: {this.state.counter}</h2>
                <button onClick={e => this.increment()}>+1</button>
            </div>
        )
    }

    increment(args) {
        this.setState({
            counter: this.state.counter + 1
        })
    }
}

const Profile = forwardRef((props, ref) => {
    return (
        <div ref={ref}>haha</div>
    )
})

export default class ControlledComponent extends Component {
    constructor(props) {
        super(props)
        this.inputRef = createRef();
        this.divRef = createRef();
        this.counterRef = createRef();
        this.profileRef = createRef();
    }

    handleChange = (e) => {
        this.divRef.current.innerHTML = this.inputRef.current.value;
        this.counterRef.current.increment('hahah');
        // console.log("---profile---", this.profileRef.current.innerHTML);
        this.profileRef.current.innerHTML = this.inputRef.current.value;
    }


    render() {
        return (
            <div>
                <input ref={this.inputRef} onChange={(e) => {
                    this.handleChange(e);
                }} />
                <div ref={this.divRef} />
                <Counter ref={this.counterRef} />
                <Profile ref={this.profileRef} />
            </div>
        )
    }
}