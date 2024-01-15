import PlayButton from "../src/images/play.png";
import Forward from "../src/images/right-arrow.png";
import Loading from "./images/loading.png";
function PageLeftSide({
  lessonData,
  currentIndex,
  previousObject,
  nextObject,
  speaking,
  speakText,
  isLoading,
  pauseSpeech,
  resumeSpeech,
}) {
  return (
    <div
      className="flex centered w-full h-full bg-white md:h-screen p-10 sm:p-5 md:text-left items-center "
      // style={{ backgroundImage: `url(${Background})` }}
      style={{ backgroundColor: "black" }}
    >
      <div className="jess_icon left-[35px] md:left-[35px] sm:left-[30px]">
        {/* <img src={TeepeeIcon} alt="" /> */}
      </div>

      <div className="main-content-div w-[80%]">
        <div className="teepee-sub-heading">
          <div>
            <button
              style={{ display: isLoading && "none" }}
              onClick={() => speakText(lessonData[currentIndex].text)}
            >
              <img
                style={{ background: "", borderRadius: "10px" }}
                src={PlayButton}
                alt=""
              />
            </button>
            {isLoading ? (
              <img
                style={{ marginLeft: "auto", marginRight: "auto" }}
                src={Loading}
              /> // Loading indicator
            ) : (
              <div>
                {/* Render the lesson content */}
                <p
                  dangerouslySetInnerHTML={{
                    __html: lessonData[currentIndex].text,
                  }}
                  className="animation "
                  style={{
                    color: "rgba(255, 255, 255, 0.84)",
                    fontFamily: "Roboto",
                    fontSize: "22px",
                    fontStyle: "normal",
                    fontWeight: 400,
                    lineHeight: "28px" /* 127.273% */,
                    letterSpacing: "0.022px",
                  }}
                ></p>
              </div>
            )}
            {/* <h2>{lessonData[currentIndex].title}</h2> */}
            {/* <p style={{ fontSize: "17px", fontFamily: "roboto" }}>
              {lessonData[currentIndex].text}
            </p> */}
            {/* Buttons to navigate */}
            {/* <button
              onClick={previousObject}
              disabled={currentIndex === 0}
              style={{ marginRight: "10px", display: speaking && "none" }}
            >
              <img style={{background:"yellow"}} src={Forward} />
            </button> */}
            <button
              onClick={nextObject}
              disabled={currentIndex === lessonData.length - 1}
              style={{
                display: speaking || isLoading ? "none" : "block",
                float: "right",
              }}
            >
              <img
                style={{
                  borderRadius: "5px",
                }}
                src={Forward}
              />
            </button>
            {/* <button className="absolute top-0" onClick={pauseSpeech}>
              Pause Speech
            </button> */}
            {/* <button
              className="absolute top-0 left-[250px]"
              onClick={resumeSpeech}
            >
              Resume Speech
            </button> */}
            {/* Indicate if speaking */}
            {/* {speaking && <p>Speaking...</p>} */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageLeftSide;
