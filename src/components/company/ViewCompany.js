import React, { Component } from 'react';
import CardboardCompany from './CardboardCompany';
import EmptyCompany from './EmptyCompany';
import CreateCompany from './CreateCompany';
import CreateOffice from '../office/CreateOffice';
import axios from 'axios';

export default class ViewCompany extends Component {
    state = {
        company: [],
        refreshed: false
    }

    componentDidMount() {
        axios.get('http://localhost:4000/company').then(response => {
            const companyList = response.data;
            this.setState({company:companyList});
        })
        .catch(function(error) {
            console.log(error);
        })
    }

    refreshIt = () => 
        this.setState({refreshed: !this.state.refreshed})

    render() {
        return (
            <div>
                <div className="row">
                    <CreateCompany refresh={this.refreshIt}/>
                    <CreateOffice refresh={this.refreshIt}/>
                </div>
                <hr />
                <h1 className="content-card">Company</h1>
                <div>
                    {this.state.company.length === 0 ? 
                        <EmptyCompany /> : <CardboardCompany refreshed={this.state.refreshed} key={this.state.company._id} /> }
                </div>
            </div>
        )
    }
}