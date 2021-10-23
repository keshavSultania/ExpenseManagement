// import "./styles.css";
import BillContainer from "./components/BillContainer";

import { Provider } from "react-redux";
import configureStore from "./redux/store";

export default function App() {
  return (
    <Provider store={configureStore()}>
      <div>
        <BillContainer />
      </div>
    </Provider>
  );
}
