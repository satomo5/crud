import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import CardboardOffice from './CardboardOffice';
import EmptyOffice from './EmptyOffice';

export default class ViewOffice extends Component {
    state = {
        company: [],
        office: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/company/' + this.props.match.params.companyid).then(response => {
            const companyList = response.data;
            this.setState({company:companyList});
        });
    }

    render() {
        if (!this.state.company.offices) return null;
        return (
            <div>
                <div className="office-container">
                    <div className="office-title">{this.state.company.company_name}</div>
                    <hr />
                    <div className="office-list">
                        <div className="office-label">Address:</div>
                        <div className="office-list-result">{this.state.company.company_address}</div>
                    </div>
                    <div className="office-list">
                        <div className="office-label">Revenue:</div>
                        <div className="office-list-result">{this.state.company.company_revenue}</div>
                    </div>
                    <div className="office-list">
                        <div className="office-label">Phone No:</div>
                        <div className="office-list-result">+{this.state.company.company_phone_code} {this.state.company.company_phone_code}</div>
                    </div>
                    <div className="office-button">
                        <Link to="/" className="btn btn-light">Back to Overview</Link>
                    </div>
                </div>
                <hr />
                <h1 className="content-card">Offices</h1>
                <div>
                {this.state.company.offices.length === 0 ? 
                    <EmptyOffice/> : <CardboardOffice data={this.state.company} params={this.props.match.params.companyid} key={this.state.company.offices._id} /> }
                </div>
            </div>
        )
    }
}