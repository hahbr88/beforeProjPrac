import React from "react";

const TopSection = (props: any) => {
  console.log(props);

  return (
    <div>
      <div className="section1"></div>
      <div className="section2"></div>
      <div className="section3"></div>
      <div className="section4 flex justify-center align-center"></div>
    </div>
  );
};

export default TopSection;
