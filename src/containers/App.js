import React, { Component } from 'react';
import IphoneCard from '../components/IphoneCard'
import {connect} from 'react-redux'

class App extends Component {
  render() {
    return (
      <div>
          <div className='header'>
              <h2><a href=''>iPhone</a></h2>
              <h2><a href=''>MacBook</a></h2>
              <h2><a href=''>iMac</a></h2>
          </div>
          <div className='container'>
              <div className='sidebar'>
                  <button>2007</button>
                  <button>2008</button>
                  <button>2009</button>
                  <button>2010</button>
                  <button>2011</button>
                  <button>2012</button>
                  <button>2013</button>
                  <button>2014</button>
                  <button>2015</button>
                  <button>2016</button>
                  <button>2017</button>
              </div>
              <div className="iphoneGrid">
                  {
                      this.props.iphones.map((iphone,i) =>
                          <IphoneCard key={i} iphone={iphone} />
                      )
                  }
              </div>
          </div>
      </div>
    );
  }
}

function mapStateToProps(store) {
    return {
        iphones: store
    }
}

export default connect(mapStateToProps)(App);
