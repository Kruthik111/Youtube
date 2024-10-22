import React from "react";
import useFetch from "../utils/useFetch";
import { useParams } from "react-router-dom";
import ResultLoading from "./Search/ResultLoading";
import SubscribeButton from "../components/Subscribe";

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
    <div className="bg-blue-400 h-screen">
      <div className="-mb-10">
        <div>
          <img
            src="https://yt3.googleusercontent.com/NP3nTQ3kxLiXV-kLXKS2zaNL6ESMMBv74m-d5a--q5ThgLD6I-IyqLwAbj-AbClWNbORBg3Pcg=w2120-fcrop64=1,00005a57ffffa5a8-k-c0xffffffff-no-nd-rj"
            alt=""
          />
        </div>
        <div className="flex pt-5">
          <div className="rounded-full overflow-hidden -mt-5">
            <img
              src="https://yt3.googleusercontent.com/fxGKYucJAVme-Yz4fsdCroCFCrANWqw0ql4GYuvx8Uq4l_euNJHgE-w9MTkLQA805vWCi-kE0g=s160-c-k-c0x00ffffff-no-rj"
              alt=""
            />
          </div>
          <div className="text-xl ">
            <h1>MrBeast</h1>
            <div>@MrBeast ' 320M subscribers ' 822 videos</div>
            <div>Subscribe for a cookie</div>
            <div>
              <SubscribeButton />
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default ChannelDetail;
