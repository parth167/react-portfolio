import React from 'react';
import { Page } from './page/Page.js';
import './App.css';
import Container from './components/Container/Container';
function App() {
  return (
    <Page>
      <div className="App">
        <Container />
      </div>
    </Page>
  );
}

export default App;
