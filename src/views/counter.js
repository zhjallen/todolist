import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement, reset, foo } from "../redux/actions/counter";

@connect(state => {
    return {
        counter: state.counter,
    };
}, dispatch => {
    return {
        increment: () => {
            dispatch(increment());
        },
        decrement: () => {
            dispatch(decrement());
        },
        reset: () => {
            dispatch(foo());
        },

    };
})

class Counter extends Component {
    render() {
        console.log(this.props, "props");
        const { counter } = this.props;
        return (
            <div>
                <div>
                    <span>当前计数为(显示redux计数)</span>
                    <span>{counter.count}</span>
                </div>
                <button onClick={() => {
                    this.props.increment();
                }}>自增
                </button>
                <button onClick={() => {
                    this.props.decrement();
                }}>自减
                </button>
                <button onClick={() => {
                    this.props.reset();
                }}>重置
                </button>
            </div>
        );
    }
}
export default Counter;