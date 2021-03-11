import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import GlobalStyle from "./config/GlobalStyle";
import { ThemeProvider } from "styled-components";
import Theme from "./config/Theme";
import { debugContextDevtool } from "react-context-devtool";
import { Provider } from "react-redux";
import reducers from "./reducers";
import { applyMiddleware, compose, createStore } from "redux";
import createSagaMiddleware from "redux-saga";
import rootSaga from "./sagas";

const sagaMiddleware = createSagaMiddleware();
const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers,
  composeEnhancer(applyMiddleware(sagaMiddleware))
);
sagaMiddleware.run(rootSaga);
const container = document.getElementById("root");
ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={Theme}>
      <BrowserRouter>
        <GlobalStyle />
        <Provider store={store}>
          <App />
        </Provider>
      </BrowserRouter>
    </ThemeProvider>
  </React.StrictMode>,
  container
);
debugContextDevtool(container, {});

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
