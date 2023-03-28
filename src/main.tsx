import ReactDOM from 'react-dom/client'
import { Amplify } from 'aws-amplify';

import App from './app/App'
import updatedAwsConfig from './configs/amplify-config';

import './index.scss'

Amplify.configure(updatedAwsConfig);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <App />
)
