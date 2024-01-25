import PlayButton from "../src/images/play.png";
import Downward from "../src/images/down-arrow.png.png";
import Forward from "../src/images/right-arrow.png";
import Loading from "./images/Dot Loader.gif";
import Tick from "./images/tick.png";
import PauseButton from "./images/pause-button.png";
import ResumeButton from "./images/play-button.png";
import HomeButton from "./images/home-button.png";
import BouncingDotsLoader from "./images/widgets/BouncingDotsLoader";
function PageLeftSide({
  lessonResponseData,
  lessonButtonData,
  selectedResponseButtons,
  selectedAnswerIndex,
  handleSelectedAnswerIndex,
  currentIndex,
  previousObject,
  nextObject,
  speaking,
  speakText,
  isLoading,
  pauseSpeech,
  resumeSpeech,
  isSpinning,
  handleRepeat,
  pauseResumeStatus,
  renderTextWithHighlighting,
}) {
  return (
    <div className="relative">
      <div className="bg-[#403151] absolute top-[2%] right-[3%]">
        <button onClick={pauseResumeStatus ? pauseSpeech : resumeSpeech}>
          <img src={pauseResumeStatus ? PauseButton : ResumeButton} />
        </button>
      </div>
      <div className="bg-[#403151] absolute top-[2%] left-[3%]">
        <button>
          <img src={HomeButton} />
        </button>
      </div>
      <div
        className="flex centered w-full h-full bg-white md:h-screen p-10 sm:p-5 md:text-left items-center "
        // style={{ backgroundImage: `url(${Background})` }}
        style={{ backgroundColor: "#403151" }}
      >
        <div className="jess_icon left-[35px] md:left-[35px] sm:left-[30px]">
          {/* <img src={TeepeeIcon} alt="" /> */}
        </div>

        <div
          style={{ width: isLoading && "100%" }}
          className={`main-content-div w-[80%] ${
            lessonResponseData[currentIndex].media === "" &&
            "flex justify-center !w-[100%]"
          }`}
        >
          <div
            className={`teepee-sub-heading ${
              lessonResponseData[currentIndex].media === "" && "w-[40%]"
            }`}
          >
            <div>
              <button
                style={{ display: isLoading && "none" }}
                onClick={() =>
                  handleRepeat(lessonResponseData[currentIndex].text)
                }
              >
                <img
                  style={{
                    background: "",
                    borderRadius: "10px",
                    animation: isSpinning ? "spin 2s linear" : "none",
                  }}
                  src={PlayButton}
                  alt=""
                />
              </button>
              {isLoading ? (
                <BouncingDotsLoader />
              ) : (
                // <img
                //   style={{ marginLeft: "auto", marginRight: "auto" }}
                //   src={Loading}
                // /> // Loading indicator
                <div>
                  <p
                    // dangerouslySetInnerHTML={{
                    //   __html: lessonResponseData[currentIndex].text,
                    // }}
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
                  >
                    {renderTextWithHighlighting()}
                  </p>
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
              {lessonResponseData[currentIndex].hasButtons && !isLoading ? (
                <>
                  <div style={{ visibility: speaking ? "hidden" : "visible" }}>
                    {selectedResponseButtons.map((button, index) => (
                      <div>
                        <button
                          className="flex lesson-buttons mb-[2%] mt-[2%]"
                          onClick={() => handleSelectedAnswerIndex(index)}
                          style={{
                            background:
                              selectedAnswerIndex !== -1 &&
                              selectedAnswerIndex === index &&
                              "#7E418B",
                          }}
                        >
                          {button.buttonText}
                          {selectedAnswerIndex === index && (
                            <div className="ml-[8px]">
                              <img src={Tick} />
                            </div>
                          )}
                        </button>
                      </div>
                    ))}
                    <div>
                      {
                        <button
                          onClick={nextObject}
                          style={{
                            visibility:
                              selectedAnswerIndex !== -1 ? "visible" : "hidden",
                            float: "right",
                            marginTop: "10%",
                          }}
                        >
                          <img
                            style={{
                              borderRadius: "5px",
                            }}
                            src={Forward}
                          />
                        </button>
                      }
                    </div>
                  </div>
                </>
              ) : (
                <button
                  onClick={nextObject}
                  disabled={currentIndex === lessonResponseData.length - 1}
                  style={{
                    //Have to uncheck this
                    visibility:
                      speaking ||
                      isLoading ||
                      (!lessonResponseData[currentIndex].hasButtons &&
                        !lessonResponseData[currentIndex].hasNextResponse)
                        ? "hidden"
                        : "visible",
                    float: "right",
                    marginTop: "10%",
                  }}
                >
                  <img
                    style={{
                      borderRadius: "5px",
                    }}
                    src={Downward}
                  />
                </button>
              )}

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
    </div>
  );
}

export default PageLeftSide;
