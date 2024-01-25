import React from "react";
import image from "../src/images/welcome-hand.gif";

function PageRightPart({ lessonResponseData, currentIndex }) {
  return (
    <div>
      <div className=" w-full h-full bg-black centered md:h-screen">
        <div>
          <div className=" h-[100vh] flex align-center">
            <img
              style={{
                width: "100%",
                maxWidth: "100%",
              }}
              src={lessonResponseData[currentIndex].media}
            />
          </div>
          <div className="w-[100%] flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default PageRightPart;
