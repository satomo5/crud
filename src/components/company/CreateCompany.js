import React, { Component } from 'react';
import PhoneCode from 'react-phone-input-2';
import axios from 'axios';

export default class CreateCompany extends Component {
    constructor(props) {
        super(props);
        this.getCompanyName = this.getCompanyName.bind(this);
        this.getCompanyAddress = this.getCompanyAddress.bind(this);
        this.getCompanyRevenue = this.getCompanyRevenue.bind(this);
        this.getCompanyPhone = this.getCompanyPhone.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            company_name: '',
            company_address: '',
            company_revenue: '',
            company_phone: ''
        }
    }

    getCompanyName(e) {
        this.setState({
            company_name: e.target.value
        })
    }
    getCompanyAddress(e) {
        this.setState({
            company_address: e.target.value
        })
    }
    getCompanyRevenue(e) {
        this.setState({
            company_revenue: e.target.value
        })
    }
    getCompanyPhone(e) {
        // console.log(e);
        this.setState({
            company_phone: e
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            company_name: this.state.company_name,
            company_address: this.state.company_address,
            company_revenue: this.state.company_revenue,
            company_phone: this.state.company_phone
        };

        axios.post('http://localhost:4000/company/add', obj).then(res => console.log(res.data));
        
        this.setState({
            company_name: '',
            company_address: '',
            company_revenue: '',
            company_phone: ''
        })
    }

    render() {
        return (
            <div className="col-sm-6">
                <h2>Create Company</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input 
                        required
                        type="text" 
                        className="form-control" 
                        placeholder="name"
                        value={this.state.company_name}
                        onChange={this.getCompanyName} />
                    </div>
                    <div className="form-group">
                        <label>Address:</label>
                        <input
                        required 
                        type="text" 
                        className="form-control" 
                        placeholder="address"
                        value={this.state.company_address}
                        onChange={this.getCompanyAddress} />
                    </div>
                    <div className="form-group">
                        <label>Revenue:</label>
                        <input
                        required 
                        min="0"
                        type="number" 
                        className="form-control" 
                        placeholder="revenue"
                        value={this.state.company_revenue}
                        onChange={this.getCompanyRevenue} />
                    </div>
                    <div className="form-group">
                        <label>Phone No:</label>
                        <PhoneCode 
                        className="form-control"
                        enableSearchField= "true"
                        inputExtraProps={{required: true}}
                        value={this.state.company_phone}
                        onChange={this.getCompanyPhone} />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}