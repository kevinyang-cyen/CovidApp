import React, { useState, useEffect } from "react";
import axios from "axios";
import Card from 'react-bootstrap/Card';
import CardColumns from 'react-bootstrap/CardColumns';
import sortNewsData from "../helpers/sortNewsData.js";
import sortVacData from "../helpers/sortVaccineData.js";
import ProgressBar from 'react-bootstrap/ProgressBar'
import Popover from 'react-bootstrap/Popover'
import OverlayTrigger from 'react-bootstrap/OverlayTrigger'
import Button from 'react-bootstrap/Button'
import Tab from 'react-bootstrap/Tab'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Nav from 'react-bootstrap/Nav'
import { Spinner } from "react-bootstrap";

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
  const [isLoadingNews, setIsLoadingNews] = useState(true);
  const [isLoadingVaccine, setIsLoadingVaccine] = useState(true);

  useEffect(() => {
    const runCall = async () => {
      let apiValue = await fetchData();
      let returnData = sortNewsData(apiValue);
      let returnData_two = sortVacData(apiValue);

      setData(returnData);
      setvaccData(returnData_two);
      setIsLoadingNews(false);
      setIsLoadingVaccine(false);
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

  // checks whether to show author or not 
  const authorExists = (author) => {
    if (author) {
      return `By ${author} at`
    }
  }

  // checks whether to show photo or not 
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
          <p><a href={vaccine.vaccineArticle}>For more click here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <div>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" className="vaccine-button" className="vaccine-button">{vaccine.company}</Button>
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
          <p><a href={vaccine.vaccineArticle}>For more click here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" className="vaccine-button">{vaccine.company}</Button>
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
          <p><a href={vaccine.vaccineArticle}>For more click here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" className="vaccine-button">{vaccine.company}</Button>
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
          <p><a href={vaccine.vaccineArticle}>For more click here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" className="vaccine-button">{vaccine.company}</Button>
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
          <p><a href={vaccine.vaccineArticle}>For more click here</a></p>
        </Popover.Content>
      </Popover>
    );

    let displayCompany = (
      (
        <li>
          <OverlayTrigger trigger="click" rootClose placement="right" overlay={popoverDetails}>
            <Button variant="outline-info" size="sm" className="vaccine-button">{vaccine.company}</Button>
          </OverlayTrigger>
        </li>
      )
    );

    return displayCompany;
  });


  //returns each news card individually - allows for row organization on news page
  let loadNews = data.newsReports.map((item, index) =>
    (
      <>
        <Card>
          {photoExists(item.urlToImage)}
          <Card.Body>
            <Card.Title><a href={item.url}>{item.title}</a></Card.Title>
            <Card.Text>
              {item.description}
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            <small className="text-muted">{authorExists(item.author)}{item.source.name}</small>
          </Card.Footer>
        </Card>
      </>
    )
  );

  return (
    <Tab.Container defaultActiveKey="first" className="news">
      <Row>
        <Col sm={2}>
          <Nav variant="pills" className="news-tabs">
            <Nav.Item>
              <Nav.Link eventKey="first">CoronaVirus News</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="second">Vaccine Progress</Nav.Link>
            </Nav.Item>
          </Nav>
        </Col>
        <Col sm={9}>
          <Tab.Content>
            <Tab.Pane eventKey="first">
              {isLoadingNews ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                <main className="news">
                  <CardColumns>
                    {loadNews}
                  </CardColumns>
                </main>
              }
            </Tab.Pane>
            <Tab.Pane eventKey="second">
              <div className="vaccines">
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>Pre-clinical research</h2>
                      <ProgressBar className="loadbar" animated now={10} />
                      <ul>
                        {preResearch}
                      </ul>
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>Pre-clinical trials</h2>
                      <ProgressBar className="loadbar" animated now={20} />
                      <ul>
                        {preTrial}
                      </ul>
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>Phase 1 trial</h2>
                      <ProgressBar className="loadbar" animated now={30} />
                      <ul>
                        {phaseOne}
                      </ul>
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>Phase 2 trial</h2>
                      <ProgressBar className="loadbar" animated now={50} />
                      <ul>
                        {phaseTwo}
                      </ul>
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>Phase 3 trial</h2>
                      <ProgressBar className="loadbar" animated now={70} />
                      <ul>
                        {phaseThree}
                      </ul>
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner className="spinner-load-news" animation="grow" variant="dark" /> :
                  <>
                    <div>
                      <h2>FDA Approved</h2>
                      <ProgressBar className="loadbar" animated now={90} />
                      {(vaccData.vaccineFDA[0]) ?
                        <ul>
                          <li>{vaccData.vaccineFDA[0].company}</li>
                        </ul> : "No Viable Candidates"}
                    </div>
                  </>
                }
                {isLoadingVaccine ?
                  <Spinner animation="grow" className="spinner-load-news" variant="dark" /> :
                  <>
                    <div>
                      <h2>Generally Available</h2>
                      <ProgressBar className="loadbar" animated now={100} />
                      {(vaccData.vaccineAvailable[0]) ?
                        <ul>
                          <li>{vaccData.vaccineAvailable[0].company}</li>
                        </ul> : "No Viable Candidates"}
                    </div>
                  </>
                }
              </div>
            </Tab.Pane>
          </Tab.Content>
        </Col>
      </Row>
    </Tab.Container>
  );
}





