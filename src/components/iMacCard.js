import React, {Component} from 'react'

export default class IMacCard extends Component {
    render() {
        const m = this.props.mac;
        return (
            <div className='iphoneCard'>
                <p><span className='year'>{m.year}</span></p>
                <p><span className='name'>{m.name}</span></p>
            </div>
        )
    }
}