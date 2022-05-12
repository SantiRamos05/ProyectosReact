import React from 'react';
import { hydrate, render } from "react-dom";
import App from './App';
import * as serviceWorkerRegistration from './serviceWorkerRegistration';
import reportWebVitals from './reportWebVitals';

const rootElement =  document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}
//root.render(
//  <React.StrictMode>
//    <App />
//  </React.StrictMode>
//);

serviceWorkerRegistration.register();

reportWebVitals();
