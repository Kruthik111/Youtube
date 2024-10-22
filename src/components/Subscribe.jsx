import { useState } from "react";

const SubscribeButton = () => {
  const [subscribed, setSubscribed] = useState(false);
  return (
    <button
      onClick={(e) => setSubscribed(!subscribed)}
      className="relative  inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-bold text-white rounded-3xl group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
    >
      <span className="relative px-5 py-2.5 transition-all ease-in duration-75   rounded-md group-hover:bg-opacity-0">
        {subscribed ? "Subscribed" : "Subscribe"}
      </span>
    </button>
  );
};

export default SubscribeButton;
