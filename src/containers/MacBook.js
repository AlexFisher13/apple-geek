import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import MacBookCard from "../components/MacBookCard";


class MacBook extends Component {
    render() {
        return (
            <div className='container'>
                <div className="grid">
                    {
                        this.props.macbooks.map((mac,i) =>
                            <MacBookCard key={i} mac={mac} />
                        )
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        macbooks: store.macbook
    }
}

export default withRouter(connect(mapStateToProps)(MacBook))
