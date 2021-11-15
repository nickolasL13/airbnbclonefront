import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import PaginaNaoEncontrada from './PáginaNãoEncontrada';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import PaginaPrincipal from './PáginaPrincipal'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path= "/" element={<App />}>
        <Route index element={< PaginaPrincipal />}/>
        <Route path= "*" element= {<PaginaNaoEncontrada />}/>
      </Route>
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
