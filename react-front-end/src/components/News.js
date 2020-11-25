import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import sortNewsData from "../helpers/sortNewsData.js";
import sortVacData from "../helpers/sortVaccineData.js";
import Row from 'react-bootstrap/Row';
import ProgressBar from 'react-bootstrap/ProgressBar'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'

export default function News() {

  let latestReports = {
    newsReports: [{ source: { id: "", name: "" }, author: "", title: "", description: "", url: "", urlToImage: "" }]
  };

  let vaccineNews = {
    vaccinePreClinRes: [{ company: "", vaccineName: "", vaccineType: "", vaccineDetails: "", vaccineStatus: "", vaccineArticle: "", vaccinePhase: "" }],
    vaccinePreClinTri: [{ company: "", vaccineName: "", vaccineType: "", vaccineDetails: "", vaccineStatus: "", vaccineArticle: "", vaccinePhase: "" }],
    vaccineP1T: [{ company: "", vaccineName: "", vaccineType: "", vaccineDetails: "", vaccineStatus: "", vaccineArticle: "", vaccinePhase: "" }],
    vaccineP2T: [{ company: "", vaccineName: "", vaccineType: "", vaccineDetails: "", vaccineStatus: "", vaccineArticle: "", vaccinePhase: "" }],
    vaccineP3T: [{ company: "", vaccineName: "", vaccineType: "", vaccineDetails: "", vaccineStatus: "", vaccineArticle: "", vaccinePhase: "" }],
    vaccineFDA: [],
    vaccineAvailable: []
  }

  const [data, setData] = useState(latestReports);
  const [vaccData, setvaccData] = useState(vaccineNews);

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      let returnData = sortNewsData(apiValue);
      let returnData_two = sortVacData(apiValue);

      setData(returnData);
      setvaccData(returnData_two);
    }

    const fetchData = async () => {
      const apiUrl = "http://newsapi.org/v2/top-headlines?country=ca&category=health&apiKey=af7f35ff3e5649688948cfaffbf5f607&pageSize=100&sortBy=relevancy";
      const apiUrlTwo = "https://spreadsheets.google.com/feeds/list/1qRN1CTiEBqQkxfOUI8_wYfXiWxoVjHKiwruslmfOqSs/1/public/values?alt=json";

      try {
        const response = await Promise.all([
          axios.get(apiUrl),
          axios.get(apiUrlTwo)
        ]);

        return response;

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

  const preResearch = vaccData.vaccinePreClinRes.map((vaccine) => {
    let popoverDetails = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vaccine Information</Popover.Title>
        <Popover.Content>
          <h6><strong>Name:</strong>{vaccine.vaccineName}</h6>
          <h6><strong>Type:</strong> {vaccine.vaccineType}</h6>
          <p><strong>Details:</strong> {vaccine.vaccineDetails}</p>
          <p><strong>Status:</strong> {vaccine.vaccineStatus}</p>
          <p>For more click <a href={vaccine.vaccineArticle}>here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <div>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" >{vaccine.company}</Button>
          </OverlayTrigger>
        </div>
      )
    );

    return displayCompany;

  });

  const preTrial = vaccData.vaccinePreClinTri.map((vaccine) => {
    let popoverDetails = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vaccine Information</Popover.Title>
        <Popover.Content>
          <h6><strong>Name:</strong>{vaccine.vaccineName}</h6>
          <h6><strong>Type:</strong> {vaccine.vaccineType}</h6>
          <p><strong>Details:</strong> {vaccine.vaccineDetails}</p>
          <p><strong>Status:</strong> {vaccine.vaccineStatus}</p>
          <p>For more click <a href={vaccine.vaccineArticle}>here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" >{vaccine.company}</Button>
          </OverlayTrigger>
        </li>
      )
    );

    return displayCompany;
  });

  const phaseOne = vaccData.vaccineP1T.map((vaccine) => {
    let popoverDetails = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vaccine Information</Popover.Title>
        <Popover.Content>
          <h6><strong>Name:</strong>{vaccine.vaccineName}</h6>
          <h6><strong>Type:</strong> {vaccine.vaccineType}</h6>
          <p><strong>Details:</strong> {vaccine.vaccineDetails}</p>
          <p><strong>Status:</strong> {vaccine.vaccineStatus}</p>
          <p>For more click <a href={vaccine.vaccineArticle}>here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" >{vaccine.company}</Button>
          </OverlayTrigger>
        </li>
      )
    );

    return displayCompany;
  });


  const phaseTwo = vaccData.vaccineP2T.map((vaccine) => {
    let popoverDetails = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vaccine Information</Popover.Title>
        <Popover.Content>
          <h6><strong>Name:</strong>{vaccine.vaccineName}</h6>
          <h6><strong>Type:</strong> {vaccine.vaccineType}</h6>
          <p><strong>Details:</strong> {vaccine.vaccineDetails}</p>
          <p><strong>Status:</strong> {vaccine.vaccineStatus}</p>
          <p>For more click <a href={vaccine.vaccineArticle}>here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" >{vaccine.company}</Button>
          </OverlayTrigger>
        </li>
      )
    );

    return displayCompany;
  });

  const phaseThree = vaccData.vaccineP3T.map((vaccine) => {
    let popoverDetails = (
      <Popover id="popover-basic">
        <Popover.Title as="h3">Vaccine Information</Popover.Title>
        <Popover.Content>
          <h6><strong>Name:</strong>{vaccine.vaccineName}</h6>
          <h6><strong>Type:</strong> {vaccine.vaccineType}</h6>
          <p><strong>Details:</strong> {vaccine.vaccineDetails}</p>
          <p><strong>Status:</strong> {vaccine.vaccineStatus}</p>
          <p>For more click <a href={vaccine.vaccineArticle}>here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" >{vaccine.company}</Button>
          </OverlayTrigger>
        </li>
      )
    );

    return displayCompany;
  });

  let loadNews = data.newsReports.map((item, index) =>
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
    <>
      <main className="news">
        <CardColumns>
          {loadNews}
        </CardColumns>
      </main>
      <div>
        <h2>Pre-clinical research</h2>
        <ProgressBar animated now={10} />
        <ul>
          {preResearch}
        </ul>
      </div>
      <div>
        <h2>Pre-clinical trials</h2>
        <ProgressBar animated now={20} />
        <ul>
          {preTrial}
        </ul>
      </div>
      <div>
        <h2>Phase 1 trial</h2>
        <ProgressBar animated now={30} />
        <ul>
          {phaseOne}
        </ul>
      </div>
      <div>
        <h2>Phase 2 trial</h2>
        <ProgressBar animated now={50} />
        <ul>
          {phaseTwo}
        </ul>
      </div>
      <div>
        <h2>Phase 3 trial</h2>
        <ProgressBar animated now={70} />
        <ul>
          {phaseThree}
        </ul>
      </div>
      <div>
        <h2>FDA Approved</h2>
        <ProgressBar animated now={90} />
        {(vaccData.vaccineFDA[0]) ?
          <ul>
            <li>{vaccData.vaccineFDA[0].company}</li>
          </ul> : "No Viable Candidates"}
      </div>
      <div>
        <h2>Generally Available</h2>
        <ProgressBar animated now={100} />
        {(vaccData.vaccineAvailable[0]) ?
          <ul>
            <li>{vaccData.vaccineAvailable[0].company}</li>
          </ul> : "No Viable Candidates"}
      </div>
    </>
  );
}


/*
  if(vaccData.vaccinePreClinRes) {
    <div>
      <h2>Pre-Clinical Res</h2>
       <ul>
          <li> vaccData.vaccinePreClinRes.companyName[0]</li>
          <li> vaccData.vaccinePreClinRes.companyName[1]</li>
       </ul>
    </div>
  }

*/