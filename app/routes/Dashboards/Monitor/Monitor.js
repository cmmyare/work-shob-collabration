import React from "react";
import {
  Container,
  Row,
  Card,
  CardBody,
  Badge,
  Table,
  CardTitle,
  Progress,
  Col,
} from "./../../../components";
import { setupPage } from "./../../../components/Layout/setupPage";

import { HeaderMain } from "../../components/HeaderMain";

import { TinyDonutChart } from "../../components/Monitor/TinyDonutChart";
import { TinyDonutChartBig } from "../../components/Monitor/TinyDonutChartBig";
import { TrTableMonitor } from "../../components/Monitor/TrTableMonitor";
import { TinyAreaChart } from "../../components/Monitor/TinyAreaChart";

/*eslint-disable */
const progressCompletion = ["25", "50", "75", "97"];
/*eslint-enable */

const Monitor = () => (
  <Container>
    <Row className="mb-2">
      <Col lg={12}>
        <HeaderMain title="Admin Side" className="mb-4 mb-lg-5" />
      </Col>
    </Row>
  </Container>
);

export default setupPage({
  pageTitle: "Monitor",
})(Monitor);
