import alertify from 'alertifyjs';
import React, { Component } from 'react'
import { Redirect } from 'react-router';
import {Button,Form,FormGroup,Label,Input} from 'reactstrap';

export default class FormDemo2 extends Component {

    state = {
        email : "",
        password : "",
        city :"" , 
        description : "",
        info : "",
    }

    handleChange = (e) => {
        let name = e.target.name;
        let value = e.target.value;
        this.setState({[name] : value});
    }

    handleSubmit = (e) => {
        e.preventDefault();
        alertify.success(this.state.email + "added to db");
        
    }

    render() {
        return (
            <div>
                <Form onSubmit={this.handleSubmit}>
                    <FormGroup>
                        <Label for ="email">Email</Label>
                        <Input type="email" name = "email" placeholder="Enter email" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for ="password">Password</Label>
                        <Input type="password" name = "password" placeholder="Enter password" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for ="description">Description</Label>
                        <Input type="textarea" name = "description" placeholder="Enter description" onChange={this.handleChange}></Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="city">City</Label>
                        <Input id="city" type="select" name= "city" onChange={this.handleChange}>
                            <option>Ankara</option>
                            <option>İstanbul</option>
                            <option>İzmir</option>
                            <option>Adana</option>
                            <option>Karaman</option>
                        </Input>
                    </FormGroup>
                    <Button type = "submit">Save</Button>
                </Form>
            </div> 
        )
    }
}
