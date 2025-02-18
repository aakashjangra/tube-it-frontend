import React, { useState } from "react";
import VideoPlayer from "./VideoPlayer";

const VideoThumbnail = ({ videoSrc, previewImage }) => {
  const [showPreview, setShowPreview] = useState(false);

  return (
    <div
      onMouseEnter={() => setShowPreview(true)}
      onMouseLeave={() => setShowPreview(false)}
      style={{ width: "300px", height: "200px", position: "relative" }}
    >
      {!showPreview ? (
        <img
          src={previewImage}
          alt="video preview"
          style={{ width: "100%", height: "100%" }}
        />
      ) : (
        <VideoPlayer src={videoSrc} previewImage={previewImage} />
      )}
    </div>
  );
};

export default VideoThumbnail;
