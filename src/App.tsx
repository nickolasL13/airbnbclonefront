import React from 'react';
import {Outlet, Link} from 'react-router-dom';

function App() {
  return (
    <>
    <header>
      <h1>REACT ROUTER DEMO</h1>
      <nav>
        <Link to="/">Principal</Link> | {' '}
        <Link to="/sobre">Sobre</Link>
      </nav>
    </header>
    <main>
      <Outlet></Outlet>
    </main>
    <footer>
      <p>Desenvolvido com React e React-router</p>
    </footer>
    </>
  );
}

export default App;
