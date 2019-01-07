import React, { Component } from 'react';
import moment from 'moment';
import axios from 'axios';

export default class CardboardOffice extends Component {
    constructor(props) {
        super(props);
        this.state = {
            company: [],
            office: []
        }
        this.delete = this.delete.bind(this);
    }

    refresh(){
        axios.get('http://localhost:4000/company/' + this.props.data._id).then(response => {
            const companyList = response.data;
            this.setState({company:companyList});
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
        axios.get('http://localhost:4000/office/delete/' + id).then(this.refresh())
    }
    
    render() {
        if (!this.state.company.offices) return null;
        return (
            <div className="row">
                
                {this.state.company.offices.map((obj, i) =>
                    <div className="col-sm-6" key={i}>
                        <div className="card">
                            <div className="card-header">
                                {obj.office_name}
                                <span className="card-header-delete"><button onClick={() => this.delete(obj._id)}>x</button></span>
                            </div>
                            <div className="card-body">
                                <div className="card-content">
                                    <div className="card-label">Location:</div>
                                    <div className="card-text">Lat - {obj.office_loclat}</div>
                                    <div className="card-text">Long - {obj.office_loclong}</div>
                                </div>
                                <div className="card-content">
                                    <div className="card-label">Office Start Date:</div>
                                    <p className="card-text">{moment(obj.office_date).format('YYYY-MM-DD')}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}