import React, { Component } from 'react';
import axios from 'axios';

export default class ViewOffice extends Component {
    state = {
        company: [],
        office: []
    }

    componentDidMount() {
        axios.get('http://localhost:4000/company/' + this.props.match.params.companyid).then(response => {
            const companyList = response.data;
            this.setState({company:companyList});
            console.log(this.state.company);
        });
    }

    render() {
        if (!this.state.company.offices) return null;
        // const company = this.state.company;
        // const office = this.state.office;
        // const params = this.props.match.params.companyid;

        // const specificCompany = company.filter(obj => obj._id === params);
        // const specificOffice = office.filter(obj => obj.company_id === params); 

        // console.log(specificOffice);
        // console.log(specificCompany);
        
        return (
            <div>
                <div>
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
                        <div className="office-list-result">+{this.state.company.company_phone_code} {this.state.company.company_phone_number}</div>
                    </div>
                </div>
                <div>

                </div>
                {this.state.company.offices.map((obj, i) =>                
                    <p key={i}>{obj.office_name}</p>
                )}
            </div>
        )
    }
}