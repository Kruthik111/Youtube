import { useState } from "react";

export const Subscribed = () => {
  return (
    <>
      <span className="animate-subscribe">
        <span className="w-2 h-2 absolute -bottom-2 left-14  text-purple-800">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
          </svg>
        </span>
        <span className="w-2 h-2 absolute -top-2  text-yellow-400">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
          </svg>
        </span>
        <span className="w-2 h-2 absolute -top-3 left-3  text-green-500">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
          </svg>
        </span>
        <span className="w-2 h-2 absolute -bottom-1 -left-3 text-red-500">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
          </svg>
        </span>
        <span className="w-2 h-2 absolute -right-1 text-blue-600">
          <svg viewBox="0 0 24 24" fill="currentColor" height="1em" width="1em">
            <path d="M12 6.7l1.45 3.85L17.3 12l-3.85 1.45L12 17.3l-1.45-3.85L6.7 12l3.85-1.45L12 6.7M12 1L9 9l-8 3 8 3 3 8 3-8 8-3-8-3-3-8z" />
          </svg>
        </span>
      </span>
    </>
  );
};

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <button
      onClick={(e) => {
        e.preventDefault();
        setTimeout(() => {
          setSubscribed(!subscribed);
        }, 500);
      }}
      className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2  text-sm font-bold text-white rounded-3xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white  focus:outline-none max-h-12 hover:ring-2 focus:ring-offset-purple-700 "
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-1000   rounded-md group-hover:bg-opacity-0">
        {subscribed ? "Subscribed" : "Subscribe"}
      </span>
      {subscribed && <Subscribed />}
    </button>
  );
};

export default SubscribeButton;
