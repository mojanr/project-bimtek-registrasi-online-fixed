import React, { Suspense } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Routes } from './config/App.route'
import { HashRouter } from 'react-router-dom'
import RouterConfigComponent from './src/commons/component/router/router-config.component';

function App() {
  return (
    <React.Fragment>
      <HashRouter>
        <Suspense fallback={<span> </span>}>
          <RouterConfigComponent routes={Routes} />
        </Suspense>
      </HashRouter>
    </React.Fragment>
  );
}

export default App;
