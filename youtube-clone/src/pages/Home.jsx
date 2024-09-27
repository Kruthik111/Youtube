import { useState } from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";
import VideoCard from "../components/VideoCard";
import useFetch from "../utils/useFetch";

const Home = (props) => {
  const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 87, 90, 8, 9, 6];
  var q = "mr beast yourube channel";
  const pending = true;
  // const { data, error, pending } = useFetch(
  //   `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=AIzaSyBP2bnH1t6i1lDPygNr--7pUoIvyymUoAc`,
  //   {}
  // );

  // const [pending, setpending] = useState(true);
  const [data, setData] = useState([...v]);
  if (pending) {
    return <div className="w-screen h-[500vh] bg-green-600">hello</div>;
  }

  return (
    <div className="flex flex-wrap justify-around sm:gap-4 w-screen h-full scroll-smooth overflow-y-hidden pt-20 min-h-screen dark:bg-gray-900 bg-white ">
      {data &&
        data.map((e) => (
          <div
            className=" flex-auto md:max-w-[23rem] rounded-lg min-w-72  overflow-hidden w-[40vw] bg-white dark:bg-black pb-3 shadow-lg shadow-slate-800 border-solid  border-black border-[1px] dark:border-none"
            key={e.id.videoId}
          >
            <div className=" rounded-t-lg max-h-60 -mt-9 overflow-hidden select-none">
              <img
                // src="https://static-cse.canva.com/blob/1684710/1600w-wK95f3XNRaM.jpg"
                src={e.snippet.thumbnails.high.url}
                loading="lazy"
                draggable="false"
                className="object-cover select-none"
                alt=""
              />
            </div>
            <div className="text-black dark:bg-black rounded-lg border-red-400 border-solid px-2 pt-1 h-2/6  ">
              <div className="flex gap-1 ">
                <div className="flex items-start pt-1 w-9 ">
                  <img
                    src="https://yt3.ggpht.com/ytc/AIdro_k7J8-LWCa5QLDnY3x9kaArgJoSSMory4hgkYSBOFgvEg=s68-c-k-c0x00ffffff-no-rj"
                    alt=""
                    loading="lazy"
                    draggable="false"
                    className="rounded-full w-12 select-none border-solid  border-black border-[1px] dark:border-none"
                  />
                </div>
                <div className="text-sm  dark:text-gray-300 h-1/4">
                  <h1 className="text-base line-clamp-2 font-bold text-black dark:text-white tracking-tighter ">
                    {e.snippet.title}
                  </h1>
                  <h1 className="text-ellipsis  line-clamp-1 w-36 ">
                    {e.snippet.channelTitle}
                  </h1>
                  <span className="flex gap-2">
                    <h1>10k views</h1>
                    <h1>34 minutes ago</h1>
                  </span>
                </div>
                <div className="pt-2 right-0">
                  <HiOutlineDotsVertical />
                </div>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};
export default Home;
