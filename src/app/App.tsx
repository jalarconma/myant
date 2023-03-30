import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

import { store } from './store/store';
import { Provider as StoreProvider } from 'react-redux';

function App() {
  return (
    <StoreProvider store={store}>
      <BrowserRouter>
        <Layout />
      </BrowserRouter>
    </StoreProvider>
  );
}

export default App
