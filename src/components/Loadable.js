import L from "react-loadable";
import React from "react";

class Loading extends React.Component{
    render(){
        return (
            <div>loading</div>
        )
    }
}
const Loadable = (opts) => {
    return L({
        loading: Loading,
        delay: 5000,
        ...opts,
    })
};
export default Loadable;