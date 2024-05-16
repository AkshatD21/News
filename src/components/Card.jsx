import React from "react";
import { useState } from "react";

const Card = ({ imageUrl, title, description , newsUrl}) => {
      const [showFullDescription, setShowFullDescription] = useState(false);

      const toggleDescription = () => {
        setShowFullDescription(!showFullDescription);
      };

  return (
    <div
      className="max-w-xs rounded overflow-hidden shadow-lg"
      style={{ backgroundColor: "white" }}
    >
      <img
        src={
          imageUrl ||
          "https://static1.xdaimages.com/wordpress/wp-content/uploads/2021/08/Samsung_Galaxy_Watch_4_Classic-Featured_Image_Lifestyle_07_1056375794-Web.jpg"
        }
        className="w-full h-48 object-cover object-center"
        alt="Article Thumbnail"
      />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{title}</div>
        {showFullDescription ? (
          <p className="text-gray-700">{description}</p>
        ) : (
          <p className="text-gray-700">{description.slice(0, 88)}...</p>
        )}
        <div className="flex flex-col gap-2 py-2">
          <button
            className="text-blue-500 hover:text-blue-700 cursor-pointer flex"
            onClick={toggleDescription}
          >
            {showFullDescription ? "Show Less" : "Show More"}
          </button>
          {showFullDescription ? (
            <a
              rel="noreferrer"
              href={newsUrl}
              target="_blank"
              className="text-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
            >
              Read More
            </a>
          ) : (
            <p></p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Card;
