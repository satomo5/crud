import React, { Component } from 'react';
import CardboardCompany from './CardboardCompany';
import EmptyCompany from './EmptyCompany';
import CreateCompany from './CreateCompany';
import CreateOffice from '../office/CreateOffice';

export default class ViewCompany extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <CreateCompany />
                    <CreateOffice />
                </div>
                <hr />
                <h1 className="content-card">Company</h1>
                <div>
                    <CardboardCompany />    
                    <EmptyCompany />
                </div>
            </div>
        )
    }
}