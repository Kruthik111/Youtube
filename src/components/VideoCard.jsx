import { HiOutlineDotsVertical } from "react-icons/hi";
import useFetch from "../utils/useFetch";
import { Link } from "react-router-dom";

const VideoCard = ({ video, thumbnail }) => {
  /*
  var video = {
    kind: "youtube#searchResult",
    etag: "el6Q_LPa2uetZ-PZlnK2tpYixtw",
    id: {
      kind: "youtube#video",
      videoId: "QTlSWa_8NAU",
    },
    snippet: {
      publishedAt: "2024-10-22T05:41:00Z",
      channelId: "UCLr1s9zKvByfxUTGk0egUug",
      title: "GIRLS LOVE BIKERS🚀 ಏನ್ ಸೈಕಾಗಿ ಓಡುಸ್ತರೆ ಗುರು🤯#reise",
      description:
        "MEETING A GIRL RACER !!! Join this channel to SUPPORT US: ...",
      thumbnails: {
        default: {
          url: "https://i.ytimg.com/vi/QTlSWa_8NAU/default.jpg",
          width: 120,
          height: 90,
        },
        medium: {
          url: "https://i.ytimg.com/vi/QTlSWa_8NAU/mqdefault.jpg",
          width: 320,
          height: 180,
        },
        high: {
          url: "https://i.ytimg.com/vi/QTlSWa_8NAU/hqdefault.jpg",
          width: 480,
          height: 360,
        },
      },
      channelTitle: "ಟಿಪಿಕಲ್ ಕನ್ನಡಿಗ",
      liveBroadcastContent: "none",
      publishTime: "2024-10-22T05:41:00Z",
    },
  };
  */
  // console.log(video);
  // const { data, error, pending } = useFetch(
  //   `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${props.video.snippet.channelId}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
  //   {}
  // );
  // if (pending) {
  //   <div>loading</div>;
  // }

  return (
    <a
      href={`https://www.youtube.com/watch?v=${video.id.videoId}`}
      key={video.id.videoId}
    >
      <div className="flex text-black dark:text-gray-400 w-full gap-4 sm:max-w-[80vw] tracking-tight min-w-[80vw] flex-col sm:flex-row ">
        <div className=" min-w-48  lg:min-w-[30rem] overflow-hidden rounded-lg ">
          <img
            src={thumbnail}
            // src="https://i.ytimg.com/vi/QTlSWa_8NAU/hqdefault.jpg"
            draggable="false"
            className="rounded-lg -my-12 w-fit"
            alt=""
          />
        </div>
        <div className="flex justify-between w-full">
          <div className="flex flex-col gap-1    ">
            <div>
              <p className=" sm:text-md md:text-lg dark:text-white text-ellipsis  line-clamp-2 w-full ">
                {video.snippet.title}
              </p>
              <span className="text-xs sm:text-sm ">
                789k views 1 years ago{" "}
              </span>
            </div>
            <Link to={`/ChannelDetails/${video.snippet.channelId}`}>
              <div className="flex items-center gap-3">
                <img
                  src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png"
                  // remove the below commentted code and comment
                  //  out the above line to get the proper channel profile image

                  /*
                src={
                  !pending && data && data[0]
                    ? data[0].snippet.thumbnails.default.url
                    : "https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s68-c-k-c0x00ffffff-no-rj"
                }
                    */
                  className="rounded-full md:w-6 w-5 lg:w-9"
                  draggable="false"
                  loading="lazy"
                  alt=""
                />
                <h1>{video.snippet.channelTitle}</h1>
              </div>
            </Link>
            <span className="text-xs md:text-md line-clamp-1">
              {video.snippet.description}
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

export default VideoCard;
