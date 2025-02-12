import { Outlet } from "react-router-dom";
import Header from "./components/header";
import { Provider } from "react-redux";
import { store } from "./contexts/store";

function App() {
  return (
    <>
      <Provider store={store}>
        <Header />
        <Outlet />
      </Provider>
    </>
  );
}

export default App;
