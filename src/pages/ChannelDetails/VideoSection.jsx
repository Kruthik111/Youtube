import { Link, useParams } from "react-router-dom";
import New from "../../components/New";
import { useState } from "react";

const VideoSection = () => {
  var subNavs = ["featured", "Videos", "Shorts", "Playlists"];
  const [currentNav, setCurrentNav] = useState(0);
  let { channelId } = useParams();
  return (
    <>
      <div className="flex gap-5  text-gray-600 dark:text-gray-400 cursor-pointer">
        {subNavs.map((e, index) => (
          <Link to={`/ChannelDetails/${channelId}/${e}`}>
            <div
              className={`hover:border-b-2 border-gray-600 p-3 ${
                currentNav === index &&
                "text-black dark:text-white border-b-2 border-black dark:border-white"
              }`}
              onClick={(e) => setCurrentNav(index)}
            >
              {e}
            </div>
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap justify-around sm:gap-4 pt-3 h-full scroll-smooth min-h-screen dark:bg-gray-900 bg-white ">
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        <New />
        {/* ))} */}
      </div>
    </>
  );
};

export default VideoSection;
