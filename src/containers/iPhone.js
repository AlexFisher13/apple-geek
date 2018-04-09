import React, { Component } from 'react';
import IphoneCard from '../components/iphoneCard'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class Iphone extends Component {
  render() {
    return (
       <div className='container'>
           <div className="grid">
              {
                 this.props.iphones.map((iphone,i) =>
                     <IphoneCard key={i} iphone={iphone} />
                 )
              }
           </div>
       </div>
    );
  }
}

function mapStateToProps(store) {
    return {
        iphones: store.iphone
    }
}

export default withRouter(connect(mapStateToProps)(Iphone))
