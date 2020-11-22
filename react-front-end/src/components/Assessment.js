import React, { Link } from "react";
import { Card, ListGroup } from "react-bootstrap";

export default function Assessment() {
  return (
    <main class='assessment'>
      <Card style={{ width: '18rem' }}>
        <Card.Header>Where do you live?</Card.Header>
        <ListGroup variant="flush">
          <ListGroup.Item><a href="https://ca.thrive.health/covid19/en"> Government of Canada</a></ListGroup.Item>
          <ListGroup.Item><a href="https://bc.thrive.health/">British Columbia</a></ListGroup.Item>
          <ListGroup.Item><a href="https://covid-19.ontario.ca/self-assessment/">Ontario</a></ListGroup.Item>
          <ListGroup.Item><a href="https://myhealth.alberta.ca/Journey/COVID-19/Pages/Assessment.aspx">Alberta</a></ListGroup.Item>
          <ListGroup.Item><a href="https://sharedhealthmb.ca/covid19/screening-tool/">Manitoba</a></ListGroup.Item>
          <ListGroup.Item><a href="https://www.saskatchewan.ca/government/health-care-administration-and-provider-resources/treatment-procedures-and-guidelines/emerging-public-health-issues/2019-novel-coronavirus/covid-19-self-assessment">Saskatchewan</a></ListGroup.Item>
          <ListGroup.Item><a href="https://when-to-call-about-covid19.novascotia.ca/en">Nova Scotia</a></ListGroup.Item>
          <ListGroup.Item><a href="https://www.811healthline.ca/covid-19-self-assessment/">Newfoundland and Labrador</a></ListGroup.Item>
          <ListGroup.Item><a href="https://www2.gnb.ca/content/gnb/en/departments/ocmoh/cdc/content/respiratory_diseases/coronavirus/assessment.html#/">New Brunswick</a></ListGroup.Item>
          <ListGroup.Item><a href="https://www.quebec.ca/sante/problemes-de-sante/a-z/coronavirus-2019/?gclid=EAIaIQobChMIrtW--f-z6AIV4oNaBR1KAwAXEAAYASAAEgK8xfD_BwE">Quebec</a></ListGroup.Item>
          <ListGroup.Item><a href="https://service.yukon.ca/en/covid-19-self-assessment/">Yukon</a></ListGroup.Item>
        </ListGroup>
      </Card>
    </main>
  );
}
