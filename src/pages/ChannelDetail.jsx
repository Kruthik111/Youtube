import React from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import ResultLoading from "./Search/ResultLoading";
import SubscribeButton from "../components/Subscribe";
import Header from "../components/Header";

const ChannelDetail = () => {
  let { channelId } = useParams();
  /*
  const { data, error, pending } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&id=%${channelId}%22&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
  );
  */
  // if (pending) {
  if (false) {
    return <ResultLoading />;
  }
  // console.log(data);
  return (
    <div className=" h-screen dark:bg-gray-900">
      <Header />
      <div className="lg:px-[10%] pt-16 dark:text-white ">
        <div>
          <div className=" rounded-lg overflow-hidden h-[18vh] sm:h-[30vh]">
            <img
              src="https://yt3.googleusercontent.com/NP3nTQ3kxLiXV-kLXKS2zaNL6ESMMBv74m-d5a--q5ThgLD6I-IyqLwAbj-AbClWNbORBg3Pcg=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
              alt=""
              className="h-full"
            />
          </div>
          <div className="flex items-center justify-center sm:justify-start sm:pl-16  gap-3 -mt-9 md:-mt-14 ">
            <div className="rounded-full overflow-hidden w-28 md:w-auto ">
              <img
                src="https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s160-c-k-c0x00ffffff-no-rj"
                alt="channel profile"
              />
            </div>
            <div className="flex flex-col gap-2 md:flex-row pt-10">
              <div className="text-sm md:text-md text-gray-500 font-semibold">
                <h1 className="font-bold text-2xl text-black dark:text-white">
                  MrBeast
                </h1>
                <div className="flex flex-col sm:flex-row">
                  <span>@MrBeast</span>
                  <span> 320M subscribers ' 822 videos</span>
                </div>
                <div>Subscribe for a cookie</div>
              </div>
              <div className="flex items-center">
                <SubscribeButton />
              </div>
            </div>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};

export default ChannelDetail;
