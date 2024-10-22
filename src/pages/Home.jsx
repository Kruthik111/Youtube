import { HiOutlineDotsVertical } from "react-icons/hi";
import useFetch from "../utils/useFetch";
import Header from "../components/Header";
import ErrorPage from "./ErrorPage";
import ResultLoading from "./Search/ResultLoading";

const Home = (props) => {
  document.title = "Youtube";
  const v = [1, 2, 3, 4, 5, 6, 7, 8, 9, 2, 3, 4, 5, 6, 7, 87, 90, 8, 9, 6];
  var q = "youtube";
  const { data, error, pending } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${q}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    {}
  );

  // const [pending, setpending] = useState(true);
  if (pending) {
    // if (true) {
    return (
      <div className="w-screen h-[500vh]  bg-black mt-20">
        <ResultLoading />
      </div>
    );
  }
  if (error) {
    return <ErrorPage />;
  }

  return (
    <>
      <Header />

      <div className="flex flex-wrap justify-around sm:gap-4 pt-16 w-screen h-full scroll-smooth overflow-y-hidden min-h-screen dark:bg-gray-900 bg-white ">
        {data &&
          data.map((e) => (
            <div
              className=" flex-auto md:max-w-[23rem] rounded-lg min-w-72   overflow-hidden w-[40vw] bg-white dark:bg-black pb-3 shadow-lg shadow-slate-800 border-solid  "
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
              <div className="text-black dark:bg-black rounded-lg border-red-400 border-solid px-3 pt-1 h-2/6  ">
                <div className="flex gap-1 ">
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
                  <div className="pt-2 mr-2 right-1">
                    <HiOutlineDotsVertical />
                  </div>
                </div>
              </div>
            </div>
          ))}
      </div>
    </>
  );
};
export default Home;
