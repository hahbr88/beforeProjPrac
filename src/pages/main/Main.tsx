import React, { useRef, useState } from "react";
import BottomLayout from "../../components/layouts/BottomLayout";
import MiddleLayout from "../../components/layouts/MiddleLayout";
import TopLayout from "../../components/layouts/TopLayout";
import "./index.css";
import { FullPage, Slide } from "react-full-page";
import TopSection from "./sections/Top/TopSection";
import MiddleSection from "./sections/Middle/MiddleSection";
import BottomSection from "./sections/Bottom/BottomSection";
const Main = () => {
  // const scrollMove = () => {

  //   let location: HTMLDivElement;
  //   if (document.querySelector("#middleSection") !== null) {
  //     location = document.querySelector("#middleSection");
  //   }
  //   console.log(location);
  //   if (location !== null) {
  //     // location = location.offsetTop
  //     // window.scrollTo({ top: location, behavior: "smooth" });
  //   }
  // };

  const [] = useState();
  const beforeSlide = () => {
    console.log("슬라이드 전");
  }; 

  const controlClassName = { className: "scroll_controls" };
  return (
    <div className="mainpage-wrap">
      <FullPage
        controls
        beforeChange={beforeSlide}
        controlProps={controlClassName}>
        <Slide>
          <TopLayout children={<TopSection />} />
        </Slide>
        <Slide>
          <MiddleLayout children={<MiddleSection />} />
        </Slide>
        <Slide>
          <BottomLayout children={<BottomSection />} />
        </Slide>
      </FullPage>
    </div>
  );
};

export default Main;
