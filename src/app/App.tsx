import { BrowserRouter } from "react-router-dom";
import Layout from "./components/layout/Layout";

import { store } from './store/store';
import { Provider as StoreProvider } from 'react-redux';
import CaseProviders from "./components/case-providers/CaseProviders";

function App() {
  return (
    <CaseProviders>
      <StoreProvider store={store}>
        <BrowserRouter>
          <Layout />
        </BrowserRouter>
      </StoreProvider>
    </CaseProviders>
  );
}

export default App
