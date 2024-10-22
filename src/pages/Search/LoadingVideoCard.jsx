const LoadingVideoCard = () => {
  return (
    <div className="w-[80%]  animate-pulse h-52 flex flex-col sm:flex-row gap-2 ">
      <div className="bg-gray-600  grow-[2] rounded-lg aspect-video"></div>
      <div className=" grow-[4] gap-3 flex  flex-col">
        <div className="w-[80%] bg-gray-600 h-10 rounded-lg"></div>
        <div className="w-3/6 bg-gray-600 h-5 hidden sm:block rounded-lg"></div>
        <div className="w-3/6 bg-gray-600 h-5 hidden sm:block rounded-lg"></div>
      </div>
    </div>
  );
};

export default LoadingVideoCard;
