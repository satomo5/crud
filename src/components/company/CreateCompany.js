import React, { Component } from 'react';
import PhoneCode from 'react-intl-tel-input';
import 'react-intl-tel-input/dist/main.css';
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
            company_phone_code: '',
            company_phone_number: ''
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

    getCompanyPhone(status, value, countryData, number, id) {
        this.setState({
            company_phone_code: countryData.dialCode,
            company_phone_number: value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            company_name: this.state.company_name,
            company_address: this.state.company_address,
            company_revenue: this.state.company_revenue,
            company_phone_code: this.state.company_phone_code,
            company_phone_number: this.state.company_phone_number
        };

        axios.post('http://localhost:4000/company/add', obj).then(res => this.props.refresh());
        
        this.setState({
            company_name: '',
            company_address: '',
            company_revenue: '',
            company_phone_code: '',
            company_phone_number: ''
        });

        alert('Input Company Success');
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
                        preferredCountries={['id']} 
                        css={['intl-tel-input', 'form-control']}
                        onPhoneNumberChange={this.getCompanyPhone}
                        onPhoneNumberBlur={this.getCompanyPhone}
                        />
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}