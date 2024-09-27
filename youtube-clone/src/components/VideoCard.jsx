import { HiOutlineDotsVertical } from "react-icons/hi";

const VideoCard = (props) => {
  console.log(props);
  return (
    <div className="flex text-black dark:text-gray-400 w-full gap-3 lg:max-w-[80vw]">
      <div className="flex gap-5">
        <div className="w-[50vw] min-w-64 ">
          <img
            // src={video.snippet.thumbnails.high.url}
            src={props.v.snippet.thumbnails.high.url}
            draggable="false"
            className="rounded-lg"
            alt=""
          />
        </div>
        <div className="flex flex-col gap-2 w-3/4   min-w-0 ">
          <div>
            <p className=" sm:text-md md:text-lg   dark:text-white text-ellipsis  line-clamp-2 min-w-0   ">
              {props.v.snippet.title}
            </p>
            <span className="text-xs sm:text-sm ">789k views 1 years ago </span>
          </div>
          <div className="flex items-center gap-3">
            <img
              src="https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s68-c-k-c0x00ffffff-no-rj"
              className="rounded-full md:w-6 w-5 lg:w-9"
              draggable="false"
              loading="lazy"
              alt=""
            />
            <h1>Sajjid</h1>
          </div>
          <span className="text-sm md:text-md">
            AFFORDABLE HARLEY ! Join this channel to SUPPORT US:
          </span>
        </div>
      </div>
      <span className=" relative right-0">
        <HiOutlineDotsVertical size={23} />
      </span>
    </div>
  );
};

export default VideoCard;
