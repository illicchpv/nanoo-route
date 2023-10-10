import React from "react";

import './index.css'
import App from "./App";

// исходный вариант из nano
// import {createRoot} from 'react-dom/client';
// createRoot(document.getElementById('root')).render(<App/>)

// вариант из видео
// import ReactDOM from "react-dom";
// import {BrowserRouter} from "react-router-dom";
// ReactDOM.render(
//   <React.StrictMode>
//     <BrowserRouter>
//       <App></App>
//     </BrowserRouter>
//   </React.StrictMode>,
//   document.getElementById('root')
// )

// рекомендованный вариант
import {BrowserRouter} from "react-router-dom";
import {createRoot} from 'react-dom/client';
const root = createRoot(document.getElementById('root')); // createRoot(container!) if you use TypeScript
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App tab="home"/>
    </BrowserRouter>
  </React.StrictMode>,
);

