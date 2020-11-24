import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import Row from 'react-bootstrap/Row';

export default function News() {
  const [data, setData] = useState([{ source: { id: "", name: "" }, author: "", title: "", description: "", url: "", urlToImage: "" }]);

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      console.log(apiValue)
      setData(apiValue)
    }

    const fetchData = async () => {
      const apiUrl = "http://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=af7f35ff3e5649688948cfaffbf5f607&pageSize=100&sortBy=relevancy";

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

  const authorExists = (author) => {
    if (author) {
      return `By ${author} at`
    }
  }

  const photoExists = (photo) => {
    if (photo) {
      return <Card.Img variant="top" src={photo} alt="News Information" />
    } else {
      return null;
    }
  }

  const loadNews = data.map((item, index) =>
    (
      <>
        <Card>
          {photoExists(item.urlToImage)}
          <Card.Body>
            <Card.Title>{item.title}</Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{authorExists(item.author)} <a href={item.url}>{item.source.name}</a></small>
          </Card.Footer>
        </Card>
      </>
    )
  );

  return (
    <main className="news">
      <CardColumns>
        {loadNews}
      </CardColumns>
    </main>
  );
}