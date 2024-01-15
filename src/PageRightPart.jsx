import React from "react";
import image from "../src/images/welcome-hand.gif";

function PageRightPart({ lessonData, currentIndex }) {
  return (
    <div>
      <div className=" w-full h-full bg-black centered md:h-screen p-10 pl-0">
        <div>
          <div className="mb-[20px] h-[100vh] flex align-center pb-20">
            <img
              style={{
                width: "100%",
                maxWidth: "100%",
                borderRadius: "20px",
              }}
              src={lessonData[currentIndex].media}
            />
          </div>
          <div className="w-[100%] flex justify-center"></div>
        </div>
      </div>
    </div>
  );
}

export default PageRightPart;
