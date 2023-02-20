import React from "react";

interface IProps {
  children: React.ReactElement;
}

const BottomLayout: React.FC<IProps> = ({ children: c }) => {
  return (
    <div id="bottomLayout" className="vh100">
      {c}
    </div>
  );
};

export default BottomLayout;
