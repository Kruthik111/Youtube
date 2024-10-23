import React from "react";
import { HiOutlineDotsVertical } from "react-icons/hi";

const New = () => {
  return (
    <div
      className=" flex-auto md:max-w-[18rem] rounded-lg min-w-60  overflow-hidden w-[30vw] bg-white dark:bg-black pb-3 shadow-lg shadow-slate-800 dark:shadow-sm border-solid  "
      // key={e.id.videoId}
    >
      <div className=" rounded-t-lg max-h-60 -mt-9 overflow-hidden select-none">
        <img
          src="https://static-cse.canva.com/blob/1684710/1600w-wK95f3XNRaM.jpg"
          // src={e.snippet.thumbnails.high.url}
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
              {/* {e.snippet.title} */}
              JAWA 42FJ REVIEW🚀ನಿಜವಾಗ್ಲು ಈ ಗಾಡಿಗಳು ಸೇಲ್ ಆಗತ್ತಾ⁉️#jawa
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
  );
};

export default New;
