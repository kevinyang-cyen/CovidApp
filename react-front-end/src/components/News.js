import React, { useState, useEffect } from "react";
import axios from "axios";

export default function News() {
  const [data, setData] = useState([{ source: { id: "", name: "" }, author: "", title: "", description: "", url: "", urlToImage: "" }]);

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      console.log(apiValue)
      setData(apiValue)
    }

    const fetchData = async () => {
      const apiUrl = "http://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=af7f35ff3e5649688948cfaffbf5f607";

      try {
        const response = await axios.get(apiUrl);
        return response.data.articles
      } catch (err) {
        console.log(err)
        return null;
      }
    }
    runCall();
  }, []);

  const loadNews = data.map((item, index) =>
    (
      <div className="card">
        <img className="card-img-top" src={item.urlToImage} alt="News Information" />
        <div className="card-body">
          <h5 className="card-title">{item.title}</h5>
          <p className="card-text">{item.description}</p>
          <p className="card-text"><small className="text-muted"><a href={item.url}>{item.source.name}</a></small></p>
          <p className="card-text"><small className="text-muted">{item.author}</small></p>
        </div>
      </div>
    )
  );
  return <h1>{loadNews}</h1>;
}