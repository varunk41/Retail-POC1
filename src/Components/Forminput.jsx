import React, {Component} from 'react';
import {Form, FormGroup, FormControl, ControlLabel,Col, Row} from 'react-bootstrap';



export default class Forminput extends Component{
       
    render(){
        return(
<Form horizontal>
<FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}} >  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Retail Store</p>
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Retail Store Id" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}} >  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Customer Id</p>
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Enter Customer Id" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}} >  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Transaction ID</p>
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Enter Transaction Id" required />
                            </Col>
                        </FormGroup>
                        <FormGroup controlId="formHorizontalText" style={{marginBottom:"0px"}} >  
                        <Col componentClass={ControlLabel} md={2}>
                        <p>Retail Store</p>
                         </Col>                         
                            <Col sm={10} md={6}>
                            <FormControl type="text" placeholder="Retail Store Id" required />
                            </Col>
                        </FormGroup>
      </Form>

        )
    }
}