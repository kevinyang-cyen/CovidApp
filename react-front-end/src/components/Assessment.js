import React from "react";
import { Card, ListGroup } from "react-bootstrap";
import "../public/styles/Assessment.css";
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

// Displays List of Assesment for Each Province
export default function Assessment() {
  return (
    <main className='assessment'>
      <Tabs defaultActiveKey="Self-Assessment Resources" id="uncontrolled-tab-example">
        <Tab eventKey="Self-Assessment Resources" title="Self-Assessment Resources">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className="button canada"><a href="https://ca.thrive.health/covid19/en" target="_blank">Government of Canada</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://myhealth.alberta.ca/Journey/COVID-19/Pages/Assessment.aspx" target="_blank">Alberta</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://bc.thrive.health/" target="_blank">British Columbia</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://sharedhealthmb.ca/covid19/screening-tool/" target="_blank">Manitoba</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus/assessment.html#/" target="_blank">New Brunswick</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.811healthline.ca/covid-19-self-assessment/" target="_blank">Newfoundland and Labrador</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.surveymonkey.com/r/nwt-covid19-self-assessment/" target="_blank">Northwest Territories</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://when-to-call-about-covid19.novascotia.ca/en" target="_blank">Nova Scotia</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://nu.thrive.health/covid19/en/" target="_blank">Nunavut</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://covid-19.ontario.ca/self-assessment/" target="_blank">Ontario</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.princeedwardisland.ca/en/service/self-assessment-covid-19/" target="_blank">Prince Edward Island</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/?gclid=EAIaIQobChMIrtW--f-z6AIV4oNaBR1KAwAXEAAYASAAEgK8xfD_BwE" target="_blank">Quebec</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/covid-19-self-assessment" target="_blank">Saskatchewan</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://service.yukon.ca/en/covid-19-self-assessment/" target="_blank">Yukon</a></ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
        <Tab eventKey="Restrictions & Guidelines" title="Restrictions & Guidelines">
          <Card>
            <ListGroup variant="flush">
              <ListGroup.Item className="button canada"><a href="https://www.canada.ca/en/public-health/services/diseases/2019-novel-coronavirus-infection/latest-travel-health-advice.html/" target="_blank">Government of Canada</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.alberta.ca/enhanced-public-health-measures.aspx/" target="_blank">Alberta</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www2.gov.bc.ca/gov/content/safety/emergency-preparedness-response-recovery/covid-19-provincial-support/restrictions/" target="_blank">British Columbia</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.gov.mb.ca/covid19/restartmb/prs/index.html#provinciallevel/" target="_blank">Manitoba</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www2.gnb.ca/content/gnb/en/corporate/promo/covid-19/publichealth_guidance.html/" target="_blank">New Brunswick</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.gov.nl.ca/covid-19/alert-system/public-health-orders/" target="_blank">Newfoundland and Labrador</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.gov.nt.ca/covid-19/en/services/travel-moving-around/" target="_blank">Northwest Territories</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://novascotia.ca/coronavirus/restriction-updates/" target="_blank">Nova Scotia</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.gov.nu.ca/health/primaryrmation/chief-public-health-officer-orders/" target="_blank">Nunavut</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.princeedwardisland.ca/en/primaryrmation/health-and-wellness/new-normal-multiple-gatherings-guidance/" target="_blank">Prince Edward Island</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.ontario.ca/page/covid-19-response-framework-keeping-ontario-safe-and-open/" target="_blank">Ontario</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.quebec.ca/en/health/health-issues/a-z/2019-coronavirus/" target="_blank">Quebec</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/public-health-measures/" target="_blank">Saskatchewan</a></ListGroup.Item>
              <ListGroup.Item className="button"><a href="https://yukon.ca/en/health-and-wellness/covid-19-information/summary-yukons-covid-19-path-forward-plan" target="_blank">Yukon</a></ListGroup.Item>
            </ListGroup>
          </Card>
        </Tab>
      </Tabs>
    </main>
  );
}
