import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import App0 from './App0';
import App1 from './App1';
import App2 from './App2';
import App3 from './App3';
import App4 from './App4';
import App5 from './App5';
import App6 from './App6';
import App7 from './App7';
import './styles/reset.css';
import './styles/index.css';

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<App0 />} />
        <Route path="/App1" element={<App1 />} />
        <Route path="/App2" element={<App2 />} />
        <Route path="/App3" element={<App3 />} />
        <Route path="/App4" element={<App4 />} />
        <Route path="/App5" element={<App5 />} />
        <Route path="/App6" element={<App6 />} />
        <Route path="/App7" element={<App7 />} />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
