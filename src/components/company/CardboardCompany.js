import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export default class CardboardCompany extends Component {
    render() {
        return (
            <div class="row">
                <div class="col-sm-6">
                    <Link to="/" className="card-link">
                        <div class="card">
                            <div class="card-header">
                                Google
                            </div>
                            <div class="card-body">
                                <div className="card-content">
                                    <div class="card-label">Address:</div>
                                    <p class="card-text">Pondok Benowo Indah G1/3.</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Revenue:</div>
                                    <p class="card-text">099999999</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Phone No:</div>
                                    <p class="card-text">(132) 12356875443</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

                <div class="col-sm-6">
                    <Link to="/" className="card-link">
                        <div class="card">
                            <div class="card-header">
                                Google
                            </div>
                            <div class="card-body">
                                <div className="card-content">
                                    <div class="card-label">Address:</div>
                                    <p class="card-text">Pondok Benowo Indah G1/3.</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Revenue:</div>
                                    <p class="card-text">099999999</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Phone No:</div>
                                    <p class="card-text">(132) 12356875443</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>
                
                <div class="col-sm-6">
                    <Link to="/" className="card-link">
                        <div class="card">
                            <div class="card-header">
                                Google
                            </div>
                            <div class="card-body">
                                <div className="card-content">
                                    <div class="card-label">Address:</div>
                                    <p class="card-text">Pondok Benowo Indah G1/3.</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Revenue:</div>
                                    <p class="card-text">099999999</p>
                                </div>
                                <div className="card-content">
                                    <div class="card-label">Phone No:</div>
                                    <p class="card-text">(132) 12356875443</p>
                                </div>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        )
    }
}