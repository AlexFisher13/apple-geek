import React, { Component } from 'react';
import IphoneCard from '../components/iphoneCard'
import {connect} from 'react-redux'
import { withRouter } from 'react-router-dom'

class Iphone extends Component {
  render() {
    return (
       <div className='container'>
           {/*<div className='sidebar'>*/}
               {/*<button>2007</button>*/}
               {/*<button>2008</button>*/}
               {/*<button>2009</button>*/}
               {/*<button>2010</button>*/}
               {/*<button>2011</button>*/}
               {/*<button>2012</button>*/}
               {/*<button>2013</button>*/}
               {/*<button>2014</button>*/}
               {/*<button>2015</button>*/}
               {/*<button>2016</button>*/}
               {/*<button>2017</button>*/}
           {/*</div>*/}
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
