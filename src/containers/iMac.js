import React, { Component } from 'react';
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'
import IMacCard from "../components/iMacCard";


class IMac extends Component {
    render() {
        return (
            <div className='container'>
                <div className="iphoneGrid">
                    {
                        this.props.imacs.map((mac,i) =>
                            <IMacCard key={i} mac={mac} />
                        )
                    }
                </div>
            </div>
        );
    }
}

function mapStateToProps(store) {
    return {
        imacs: store.imac
    }
}

export default withRouter(connect(mapStateToProps)(IMac))
