import ReactDom from "react-dom";
import getRouter from "./router/router";
import { AppContainer } from "react-hot-loader";
import { Provider } from "react-redux";
import store from "./redux/store";
import React from "react";




//document.getElementById("app").innerHTML = "Webpack works"
if (module.hot) {
  module.hot.accept(() => {
    ReactDom.render(
      <AppContainer>
        <div>{getRouter()}</div>
      </AppContainer>,
      document.getElementById("app")
    );
  });
}

ReactDom.render(
  <Provider store={store}>
    <AppContainer>
      <div>{getRouter()}</div>
    </AppContainer>
  </Provider>,
  document.getElementById("app")
);
