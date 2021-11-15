import React from 'react';
import {Outlet} from 'react-router-dom';

function App() {
  return (
    <>
    <header>
      <h1>AIRBNB CLONE DEMO</h1>
    </header>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>
      <p>Airbnb Clone v.yn</p>
    </footer>
    </>
  );
}

export default App;
