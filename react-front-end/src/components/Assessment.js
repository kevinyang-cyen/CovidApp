import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../styles/Assessment.scss"

export default function Assessment() {
  return (
    <main className='assessment'>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Self-Assessment Resources</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="btn-light"><a href="https://ca.thrive.health/covid19/en">Government of Canada</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://myhealth.alberta.ca/Journey/COVID-19/Pages/Assessment.aspx">Alberta</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://bc.thrive.health/">British Columbia</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://sharedhealthmb.ca/covid19/screening-tool/">Manitoba</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus/assessment.html#/">New Brunswick</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.811healthline.ca/covid-19-self-assessment/">Newfoundland and Labrador</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.surveymonkey.com/r/nwt-covid19-self-assessment/">Northwest Territories</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://when-to-call-about-covid19.novascotia.ca/en">Nova Scotia</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://nu.thrive.health/covid19/en/">Nunavut</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://covid-19.ontario.ca/self-assessment/">Ontario</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.princeedwardisland.ca/en/service/self-assessment-covid-19/">Prince Edward Island</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/?gclid=EAIaIQobChMIrtW--f-z6AIV4oNaBR1KAwAXEAAYASAAEgK8xfD_BwE">Quebec</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/covid-19-self-assessment">Saskatchewan</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://service.yukon.ca/en/covid-19-self-assessment/">Yukon</a></ListGroup.Item>
        </ListGroup>
      </Card>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Restrictions & Guidelines</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item className="btn-light"><a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice.html/">Government of Canada</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.alberta.ca/enhanced-public-health-measures.aspx/">Alberta</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/restrictions/">British Columbia</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.gov.mb.ca/covid19/restartmb/prs/index.html#provinciallevel/">Manitoba</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/publichealth_guidance.html/">New Brunswick</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.gov.nl.ca/covid-19/alert-system/public-health-orders/">Newfoundland and Labrador</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.gov.nt.ca/covid-19/en/services/travel-moving-around/">Northwest Territories</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://novascotia.ca/coronavirus/restriction-updates/">Nova Scotia</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.gov.nu.ca/health/information/chief-public-health-officer-orders/">Nunavut</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.princeedwardisland.ca/en/information/health-and-wellness/new-normal-multiple-gatherings-guidance/">Prince Edward Island</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.ontario.ca/page/covid-19-response-framework-keeping-ontario-safe-and-open/">Ontario</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/">Quebec</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/public-health-measures/">Saskatchewan</a></ListGroup.Item>
          <ListGroup.Item className="btn-light"><a href="https://yukon.ca/en/health-and-wellness/covid-19-information/summary-yukons-plan-lifting-covid-19-restrictions/">Yukon</a></ListGroup.Item>
        </ListGroup>
      </Card>
    </main>
  );
}
