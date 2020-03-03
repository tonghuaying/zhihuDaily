import React, {Fragment} from 'react';
import './App.css';
import Header from './pages/header';
import Banner from './pages/banner';

function App() {
  return (
    <Fragment>
      <div class="header-container">
        <Header></Header>
      </div>
      <div className="main-body">
        <Banner></Banner>
      </div>
    </Fragment>
  );
}

export default App;
