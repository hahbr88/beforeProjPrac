import React from "react";

interface IProps {
  children: React.ReactElement;
}

const MainLayout = () => {
  return (
    <div className="vh100">
      <div className="section1"></div>
      <div className="section2"></div>
      <div className="section3"></div>
      <div className="section4"></div>
    </div>
  );
};

export default MainLayout;
