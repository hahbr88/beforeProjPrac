import React from "react";

interface IProps {
  children: React.ReactElement;
}

const MainLayout: React.FC<IProps> = ({ children: c }) => {
  return (
    <div id="topLayout tb1" className="vh100">
      {c}
    </div>
  );
};

export default MainLayout;
