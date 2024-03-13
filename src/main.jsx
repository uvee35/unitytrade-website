import React from 'react'
import ReactDOM from 'react-dom/client'
// <<<<<<< HEAD
// <<<<<<< HEAD:src/main.jsx
import App from './App.jsx';
import'bootstrap/dist/css/bootstrap.min.css';
import * as bootstrap from 'bootstrap';
import './index.css';
// =======
// import App from './App.jsx'
// import './index.css'
// >>>>>>> main:src/main.jsx
// =======
import App from './App.jsx'
import './index.css'
import 'bootstrap/dist/css/bootstrap.min.css';

// >>>>>>> 6cdea70 (added bootstrap CSS to Main.jsx)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
