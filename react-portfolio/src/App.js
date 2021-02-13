import React from 'react';
import { Page } from './page/Page.js';
import './App.css';
import Container from './components/Container/Container';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/footer';
function App() {
  return (
    <Page>
      <div className="App">
        <Navbar />
        <Container />
        <Footer />
      </div>
    </Page>
  );
}

export default App;
