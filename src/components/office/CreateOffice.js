import React, { Component } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import axios from 'axios';

export default class CreateOffice extends Component {
    constructor(props) {
        super(props);
        this.getOfficeName = this.getOfficeName.bind(this);
        this.getOfficeLocLat = this.getOfficeLocLat.bind(this);
        this.getOfficeLocLong = this.getOfficeLocLong.bind(this);
        this.getOfficeDate = this.getOfficeDate.bind(this);
        this.getCompanyID = this.getCompanyID.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            company: [],
            office_name: '',
            office_loclat: '',
            office_loclong: '',
            office_date: new Date(),
            company_id: ''
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/company').then(response => {
            const companyList = response.data;
            this.setState({company: companyList})
        })
        .catch(function(error) {
            console.log(error);
        })
    }
    
    getOfficeName(e) {
        this.setState({
            office_name: e.target.value
        })
    }

    getOfficeLocLat(e) {
        this.setState({
            office_loclat: e.target.value
        })
    }

    getOfficeLocLong(e) {
        this.setState({
            office_loclong: e.target.value
        })
    }

    getOfficeDate(e) {
        console.log(typeof e);
        this.setState({
            office_date: e
        })
    }

    getCompanyID(e) {
        this.setState({
            company_id: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            office_name: this.state.office_name,
            office_loclat: this.state.office_loclat,
            office_loclong: this.state.office_loclong,
            office_date: this.state.office_date,
            company_id: this.state.company_id
        };

        console.log(this.state);

        axios.post('http://localhost:4000/office/add', obj).then(res => console.log(res.data));

        this.setState({
            office_name: '',
            office_loclat: '',
            office_loclong: '',
            office_date: new Date(),
            company_id: ''
        })
    }
    render() {
        let startDate = this.state.office_date;
        let companyList = this.state.company;
        let optionCompany = companyList.map((obj, i) =>
            <option key={i} value={obj._id}>{obj.company_name}</option>
        );

        return (
            <div className="col-sm-6">
                <h2>Create Office</h2>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Name:</label>
                        <input
                        required 
                        type="text" 
                        className="form-control" 
                        placeholder="name"
                        value={this.state.office_name}
                        onChange={this.getOfficeName} />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <div className="row">
                            <div className="col">
                                <input 
                                required
                                type="number" 
                                className="form-control" 
                                placeholder="latitude"
                                value={this.state.office_loclat}
                                onChange={this.getOfficeLocLat} />
                            </div>
                            <div className="col">
                                <input 
                                required
                                type="number" 
                                className="form-control" 
                                placeholder="longtitude"
                                value={this.state.office_loclong}
                                onChange={this.getOfficeLocLong} />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Office Start Date:</label>
                        <DatePicker 
                        required
                        dateFormat="MM/dd/yyyy"
                        className="form-control"
                        minDate={new Date()}
                        selected={startDate}
                        onChange={this.getOfficeDate} />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <select 
                        required
                        value={this.state.company_id}
                        onChange={this.getCompanyID}
                        className="form-control">
                            <option value="">Select Company</option>
                            {optionCompany}
                        </select>
                    </div>
                    <div className="form-group">
                        <input type="submit" value="Create" className="btn btn-primary"/>
                    </div>
                </form>
            </div>
        )
    }
}