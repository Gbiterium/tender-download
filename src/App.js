import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import { AppRoutes } from "./routes";

const App = () => {
  return (
    <BrowserRouter>
    <div className="app-main">
                    <AppRoutes/>
                </div>
                </BrowserRouter>
  );
};

export default App;
