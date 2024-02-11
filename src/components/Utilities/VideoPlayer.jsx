"use client";

import YouTube from "react-youtube";

const VideoPlayer = ({ youtubeId }) => {
  const option = {
    width: 340,
    height: 380,
  };

  return (
    <>
      <div className="rounded-youtube">
        <YouTube
          onReady={(event) => event.target.pauseVideo()}
          videoId={youtubeId}
          opts={option}
          onError={() => {
            alert("trailernya lagi rusak bro hehe...")
          }}
        />
      </div>
    </>
  );
};

export default VideoPlayer;
