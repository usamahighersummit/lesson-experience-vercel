import React from "react";

const MediaDisplay = ({ media, type }) => {
  const renderMedia = () => {
    if (type === "image") {
      return <img src={media} alt="Question Media" />;
    } else if (type === "video") {
      return <video src={media} controls />;
    } else {
      return <p>No media available</p>;
    }
  };

  return <div className="media-display">{renderMedia()}</div>;
};

export default MediaDisplay;
