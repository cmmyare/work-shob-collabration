import React from "react";
import PropTypes from "prop-types";
import { faker } from "@faker-js/faker";
import _ from "lodash";
import {
  Container,
  ButtonToolbar,
  ButtonGroup,
  UncontrolledButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  FloatGrid as Grid,
  Card,
  Media,
  CardBody,
  ListGroup,
  ListGroupItem,
  Progress,
  Table,
  CardFooter,
  Button,
  CardHeader,
} from "./../../../components";
import { applyColumn } from "./../../../components/FloatGrid";

import { HeaderMain } from "../../components/HeaderMain";

import { MetricVsTarget } from "../../components/Analytics/MetricVsTarget";
import { WebsitePerformance } from "../../components/Analytics/WebsitePerformance";
import { AudienceMetricsChart } from "./components/AudienceMetricsChart";
import { TinyAreaChart } from "../../components/Analytics/TinyAreaChart";
import { SimpleLineChart } from "./../../Graphs/ReCharts/components/SimpleLineChart";

import "./Analytics.css"; // Import CSS for styling

const LAYOUT = {
  "metric-v-target-users": { h: 6, md: 4 },
  "metric-v-target-sessions": { h: 6, md: 4 },
  "metric-v-target-pageviews": { h: 6, md: 4 },
  "analytics-audience-metrics": { h: 9, minH: 7 },
  "traffic-channels": { md: 6, h: 6 },
  sessions: { md: 6, h: 6, maxH: 9, minW: 3 },
  spend: { md: 6, h: 7 },
  "website-performance": { md: 6, h: 11 },
  "organic-traffic": { md: 6, h: 10 },
};

const SessionByDevice = (props) => (
  <div className="session">
    <div className="session__title">{props.title}</div>
    <div className="session__values">
      <div className={`session__percentage text-${props.color}`}>
        {props.valuePercent}%
      </div>
      <div className={`session__value text-${props.color}`}>{props.value}</div>
    </div>
  </div>
);
SessionByDevice.propTypes = {
  title: PropTypes.node,
  color: PropTypes.string,
  valuePercent: PropTypes.string,
  value: PropTypes.string,
};

export class Analytics extends React.Component {
  state = {
    layouts: _.clone(LAYOUT),
  };

  _resetLayout = () => {
    this.setState({
      layouts: _.clone(LAYOUT),
    });
  };

  render() {
    const { layouts } = this.state;

    return (
      <React.Fragment>
        <h1>Dashboards</h1>
      </React.Fragment>
    );
  }
}
