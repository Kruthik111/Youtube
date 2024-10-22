import SubscribeButton from "./Subscribe";

const ChannelCard = ({ channelDetails }) => {
  return (
    <a
      href={`/ChannelDetails/${channelDetails.id.channelId}`}
      key={channelDetails.id.channelId}
    >
      <div className="flex md:w-[75vw] h-44">
        <div className="flex justify-center items-center sm:w-1/3 max-w-[40%] flex-grow   ">
          <div className="  rounded-full overflow-hidden   max-w-[30%]">
            <img
              // src="https://yt3.ggpht.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s176-c-k-c0x00ffffff-no-rj-mo"
              src={channelDetails.snippet.thumbnails.high.url}
              alt="channel profile"
              draggable="false"
              loading="lazy"
              className="w-fit aspect-square"
            />
          </div>
        </div>
        <div className="text-gray-500 grow-[2] w-1/2 dark:text-gray-400 font-semibold text-[0.5rem] sm:text-xs flex flex-col justify-center gap-2 md:pr-28 ">
          <h1 className="text-black dark:text-white font-bold text-lg">
            {channelDetails.snippet.channelTitle}
          </h1>
          <div>
            <h1 className="line-clamp-2">
              {channelDetails.snippet.description}
            </h1>
          </div>
          <div>
            <SubscribeButton />
          </div>
        </div>
      </div>
    </a>
  );
};

export default ChannelCard;
