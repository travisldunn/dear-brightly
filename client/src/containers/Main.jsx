import React from "react";
import ShareForm from "../components/Share/ShareForm";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Main = () => {
  return (
    <div>
      <Header />
      <div className="main">
        <ShareForm />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
