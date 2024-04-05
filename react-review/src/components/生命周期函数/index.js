import React, { Component } from 'react';

class Form extends Component {
    state = {
        name: this.props.name
    };

    static getDerivedStateFromProps(props, state) {
        // Any time the current user changes,
        // Reset any parts of state that are tied to that user.
        // In this simple example, that's just the email.
        console.log("---getDerivedStateFromProps--", props, state);

        if (props.name !== state.name) {
            return {
                name: props.name
            };
        }
        return null;
    }

    getSnapshotBeforeUpdate(prevProps, prevState) {
        console.log("--getSnapshotBeforeUpdate-", prevProps, prevState);
        return prevState;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log("--componentDidUpdate--", prevProps, prevState, snapshot);
    }
    

    render() {
        return (
            <div> {this.state.name}</div >
        )
    }
}

export default class Parent extends Component {
    constructor(props) {
        super(props);
    
        this.state = {
            name: 'test1'
        }
    }

    handleChange() {
        if (this.state.name === 'test1') {
            this.setState({
                name: 'test2'
            })
        } else {
            this.setState({
                name: 'test1'
            })
        }

    }


    render() {
        return (
            <div>
                <Form name={this.state.name} />
                <button onClick={() => {
                    this.handleChange();
                }}>toggle</button>
            </div>
        )
    }
}
