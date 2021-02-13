import React, { useContext } from 'react';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/footer';
import ContentContainer from '../ContentContainer/ContentContainer';

const Container = function () {
  return (
    <div className="background">
      <Navbar />
      <ContentContainer />
      <Footer />
    </div>
  );
};

export default Container;
