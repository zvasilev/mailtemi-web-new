import YouTube from "react-youtube";

const Youtube = ({ id, title, ...rest }) => {
  const opts = {
    height: '390',
    width: '640',
    playerVars: {
      autoplay: 0,
    },
  };

  return (
    <div className="yt-lite rounded-md">
      <YouTube 
        videoId={id}
        opts={opts}
        title={title}
        {...rest}
      />
    </div>
  );
};

export default Youtube;
