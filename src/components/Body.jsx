import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./Card";

const Body = () => {
  const [data, setData] = useState([]);
   const [backgroundColor, setBackgroundColor] = useState("#ffffff");
   const apiKey = import.meta.env.VITE_API_KEY;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(
          `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=${apiKey}`
        );
        setData(res.data.articles);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();

    const intervalId = setInterval(() => {
      const randomColor =
        "#" + Math.floor(Math.random() * 16777215).toString(16);
      setBackgroundColor(randomColor);
    }, 3000); 

    return () => clearInterval(intervalId);

  }, []);

  return (
    <div className="container mx-auto py-8 px-4" style={{ backgroundColor }}>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {data.map(
          (article, index) =>
              <Card
                key={index}
                imageUrl={article.urlToImage}
                title={article.title ? article.title : ""}
                description={article.description ? article.description: ""}
                newsUrl={article.url}
              />
        )}
      </div>
    </div>
  );
};

export default Body;
