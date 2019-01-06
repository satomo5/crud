import React, { Component } from 'react';
import { Link, Route } from 'react-router-dom';
import axios from 'axios';
import ViewCompany from './ViewCompany';

export default class CardboardCompany extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: [],
            office: []
        }
        this.delete = this.delete.bind(this);
    }

    refresh(){
        axios.get('http://localhost:4000/company').then(response => {
            const companyList = response.data;
            this.setState({company:companyList});
        });
        axios.get('http://localhost:4000/office').then(response => {
            const officeList = response.data;
            this.setState({office:officeList});
        });
    }

    componentDidMount() {
        this.refresh()
    }

    componentWillReceiveProps(props) {
        const { refreshed } = this.props;
        if (props.refreshed !== refreshed) {
          this.refresh()
        }
    }

    delete(id) {
        axios.get('http://localhost:4000/company/delete/'+id).then(this.refresh())
    }
    
    render() {
        return (
            <div className="row">
                
                {this.state.company.map((obj, i) =>
                    <div className="col-sm-6" key={i}>
                        <div className="card">
                            <div className="card-header">
                                <Link to={'/company/' + obj._id} className="card-link">
                                    {obj.company_name}
                                </Link>
                                <span className="card-header-delete"><button onClick={() => this.delete(obj._id)}>x</button></span>
                            </div>
                            <Link to={'/company/' + obj._id} className="card-link">
                                <div className="card-body">
                                    <div className="card-content">
                                        <div className="card-label">Address:</div>
                                        <p className="card-text">{obj.company_address}</p>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-label">Revenue:</div>
                                        <p className="card-text">{obj.company_revenue}</p>
                                    </div>
                                    <div className="card-content">
                                        <div className="card-label">Phone No:</div>
                                        <p className="card-text">+{obj.company_phone_code} {obj.company_phone_number}</p>
                                    </div>
                                </div>
                            </Link>
                        </div>
                    </div>
                )}

                <Route path="/office/:id" component={ViewCompany} />
            </div>
        )
    }
}