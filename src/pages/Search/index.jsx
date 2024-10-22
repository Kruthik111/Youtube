import VideoCard from "../../components/VideoCard";
import useFetch from "../../utils/useFetch";
import ResultLoading from "./ResultLoading";
import Header from "../../components/Header";
import { useEffect, useState, useMemo, useRef } from "react";
import ErrorPage from "../ErrorPage";
import PlaylistCard from "../../components/PlaylistCard";
import ChannelCard from "../../components/ChannelCard";
import { useParams } from "react-router-dom";

const Search = () => {
  // console.log(document.title);
  const q = window.location.search;
  const searched = q.split("=");
  const temp = useParams();
  var searchedTitle = decodeURI(searched[1]);
  document.title = searchedTitle.split("+").join(" ");
  /*
  const [data, setData] = useState(null);
  const [pending, setPending] = useState(false);
  const [error, setError] = useState(null);

  async function fetchData() {
    // console.log("submitted");
    setPending(true);
    // pendingRef.current = false;
    try {
      const response = await fetch(
        `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searched[1]}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`
      );
      if (!response.ok) throw new Error(response.statusText);

      const result = await response.json();
      setData(result.items);
      console.log(data);

      setError(null);
      setPending(false);
    } catch (e) {
      setError(`${e}. Some Error Occured`);
      console.log(e);

      setPending(false);
      // pendingRef.current = false;
    }
  }
    */
  const { data, error, pending } = useFetch(
    `https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=${searched[1]}&key=${process.env.REACT_APP_YOUTUBE_APIKEY}`,
    {}
  );

  // const data = new Array(5);
  if (pending) {
    // if (true) {
    return <ResultLoading />;
  }
  if (error) {
    return <ErrorPage />;
  }
  // console.log(data);
  return (
    <div className="flex flex-wrap justify-around pt-4 sm:gap-4 w-screen h-full scroll-smooth overflow-y-hidden  bg-white dark:bg-gray-900 overflow-hidden ">
      <Header />
      <div className="flex flex-col items-center gap-4 w-screen  scroll-smooth pt-5 md:pt-14">
        {data &&
          data.map(
            // (v) =>
            (v) => (
              <>
                {v.id.videoId && <VideoCard video={v} />}
                {v.id.channelId && <ChannelCard channelDetails={v} />}
                {v.id.playlistId && <PlaylistCard video={v} />}
              </>
            )
            // console.log(v);
          )}
      </div>
    </div>
  );
};

export default Search;
