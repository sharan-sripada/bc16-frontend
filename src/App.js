import React from "react";
import { hot } from "react-hot-loader/root";
import theme from "./utils/theme/theme";
import { ThemeProvider } from "@material-ui/core";
import { Provider } from "react-redux";
import store from "./store/configStore";
import { BrowserRouter as Router } from "react-router-dom";
import Routes from "./pages/routes/Routes";
class App extends React.Component {
  render() {
    return (
      <Router>
        <Provider store={store}>
          <ThemeProvider theme={theme}>
            <Routes />
          </ThemeProvider>
        </Provider>
      </Router>
    );
  }
}

export default hot(App);
