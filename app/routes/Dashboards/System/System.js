import React from "react";
import { faker } from "@faker-js/faker";
import { Container, Row, Table, Col, Form, FormGroup, Label, Input } from "./../../../components";

import { HeaderMain } from "../../components/HeaderMain";
import { CardSystem } from "./components/CardSystem";
import { TrSystem } from "./components/trSystem";
import { HeaderDemo } from "../../components/HeaderDemo";
import { CustomInput } from "reactstrap";

const TrColors = [
  {
    fill: "primary-02",
    stroke: "primary",
  },
  {
    fill: "purple-02",
    stroke: "purple",
  },
  {
    fill: "success-02",
    stroke: "success",
  },
  {
    fill: "yellow-02",
    stroke: "yellow",
  },
];

const System = () => (
  <Container>
      <Form>
                                { /* START Input */}
                                <FormGroup  row>
                                    <Label for="input" sm={3}>
                                        Input
                                    </Label>
                                    
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="input" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>

                                
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPassword" sm={3}>
                                        Password
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="password" 
                                            name="password" 
                                            id="inputPassword" 
                                            placeholder="" 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordPlaceholder" sm={3}>
                                        Input Placeholder
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="email" 
                                            name="email" 
                                            id="inputPasswordPlaceholder" 
                                            placeholder="Placeholder..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordReadonly" sm={3}>
                                        Input Readonly
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="email" 
                                            id="inputPasswordReadonly" 
                                            placeholder="Readonly Input..." 
                                            readOnly
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="inputPasswordDisabled" sm={3}>
                                        Input Disabled
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="" 
                                            name="" 
                                            id="inputPasswordDisabled" 
                                            placeholder="Disabled" 
                                            disabled
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="defaultSelect" sm={3}>
                                        Default Select
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="select" 
                                            name="select" 
                                            id="defaultSelect" 
                                        >
                                            <option defaultValue="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </Input>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Select */}
                                <FormGroup row>
                                    <Label for="customSelect" sm={3}>
                                        Custom Select
                                    </Label>
                                    <Col sm={9}>
                                    
                                        <CustomInput 
                                            type="select" 
                                            name="customSelect" 
                                            id="customSelect"  
                                        >
                                            <option defaultValue="">Open this Select Menu</option>
                                            <option>One</option>
                                            <option>Two</option>
                                            <option>Three</option>
                                        </CustomInput>
                                    </Col>
                                </FormGroup>
                                { /* END Select */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="staticText" sm={3}>
                                        Static Text
                                    </Label>
                                    <Col sm={9}>
                                        <Input plaintext initialValue="static@text.com" />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                                { /* START Input */}
                                <FormGroup row>
                                    <Label for="textArea" sm={3}>
                                        Textarea
                                    </Label>
                                    <Col sm={9}>
                                        <Input 
                                            type="textarea" 
                                            name="text" 
                                            id="textArea" 
                                            placeholder="Enter text..." 
                                        />
                                    </Col>
                                </FormGroup>
                                { /* END Input */}
                            </Form>
  </Container>
);

export default System;
