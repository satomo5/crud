import React, { Component } from 'react';

export default class CreateOffice extends Component {
    render() {
        return (
            <div className="col-sm-6">
                <h2>Create Office</h2>
                <form>
                    <div className="form-group">
                        <label>Name:</label>
                        <input type="text" className="form-control" placeholder="name" />
                    </div>
                    <div className="form-group">
                        <label>Location:</label>
                        <div className="row">
                            <div className="col">
                                <input type="text" className="form-control" placeholder="latitude" />
                            </div>
                            <div className="col">
                                <input type="text" className="form-control" placeholder="longtitude" />
                            </div>
                        </div>
                    </div>
                    <div className="form-group">
                        <label>Office Start Date:</label>
                        <input type="text" className="form-control" placeholder="date" />
                    </div>
                    <div className="form-group">
                        <label>Company:</label>
                        <select class="form-control">
                            <option>Saga</option>
                            <option>Google</option>
                            <option>Dropbox</option>
                            <option>Telkomsel</option>
                            <option>Sera</option>
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