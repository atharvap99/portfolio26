import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

import './index.css';
import App from './App';

// Find the element where the app will appear.
const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('The page is missing its root element.');
}

// Render the app inside React's Strict Mode.
createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
