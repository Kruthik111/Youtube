import VideoCard from "../components/VideoCard";
import useFetch from "../utils/useFetch";
import ErrorPage from "./ErrorPage";
import { useState } from "react";

const Search = () => {
  const q = window.location.search;
  const searched = q.split("=");
  // const [pending, setpending] = useState(true);
  var searchedTitle = decodeURI(searched[1]);
  document.title = searchedTitle;
  const { data, error, pending } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searched[1]}&key=AIzaSyBP2bnH1t6i1lDPygNr--7pUoIvyymUoAc`,
    {}
  );
  // const data = new Array(5);
  if (pending) {
    return <ErrorPage />;
  }

  return (
    <div className="flex flex-wrap justify-around sm:gap-4 w-screen h-full scroll-smooth overflow-y-hidden pt-20 bg-white dark:bg-gray-900 ">
      {console.log(data)}
      <div className="flex flex-col items-center gap-4 w-screen  scroll-smooth">
        {data &&
          data.map(
            (v) => <VideoCard video={v} />
            // console.log(v);
          )}
      </div>
    </div>
  );
};

export default Search;
