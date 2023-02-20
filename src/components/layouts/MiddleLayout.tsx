import React from "react";

interface IProps {
  children: React.ReactElement;
}

const MiddleLayout: React.FC<IProps> = ({ children: c }) => {
  return (
    <div id="middleLayout" className="vh100">
      {c}
    </div>
  );
};

export default MiddleLayout;
