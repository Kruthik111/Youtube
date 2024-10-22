import Header from "../../components/Header";
import LoadingVideoCard from "./LoadingVideoCard";

const ResultLoading = () => {
  // var v = new Array(25);
  return (
    <div className="flex flex-wrap justify-around sm:gap-4 w-screen h-screen scroll-smooth overflow-y-hidden  bg-white dark:bg-gray-900 ">
      <Header />
      <div className="flex flex-col items-center gap-4 w-screen  scroll-smooth pt-20">
        <LoadingVideoCard />
        <LoadingVideoCard />
        <LoadingVideoCard />
      </div>
    </div>
  );
};

export default ResultLoading;
