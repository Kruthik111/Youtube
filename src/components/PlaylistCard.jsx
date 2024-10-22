import { HiOutlineDotsVertical } from "react-icons/hi";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";
const PlaylistCard = (props) => {
  return (
    <a
      href={`https://www.youtube.com/playlist?list=${props.video.id.playlistId}`}
      key={props.video.id.playlistId}
    >
      <div className="flex text-black dark:text-gray-400 w-full gap-4 lg:max-w-[80vw] tracking-tight min-w-[80vw] flex-col sm:flex-row">
        <div className="pt-2 pl-2 bg-slate-800 rounded-lg">
          <div className="pt-2 pl-2 bg-slate-600 rounded-lg">
            <div className=" min-w-48  lg:min-w-[29rem] overflow-hidden rounded-lg ">
              <img
                src={props.video.snippet.thumbnails.high.url}
                draggable="false"
                className="rounded-lg -my-12 w-fit"
                alt=""
              />
            </div>
          </div>
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1    ">
            <div>
              <p className=" sm:text-md md:text-lg dark:text-white text-ellipsis  line-clamp-2 w-full ">
                {props.video.snippet.title}
              </p>
              <span className="text-xs sm:text-sm ">
                789k views 1 years ago{" "}
              </span>
            </div>
            <Link to="/ChannelDetails">
              <div className="flex items-center gap-3">
                <h1>{props.video.snippet.channelTitle}</h1>
              </div>
            </Link>
            <span className="text-xs md:text-md line-clamp-1">
              {props.video.snippet.description}
            </span>
          </div>
          <div>
            <HiOutlineDotsVertical size={23} />
          </div>
        </div>
      </div>
    </a>
  );
};

export default PlaylistCard;
