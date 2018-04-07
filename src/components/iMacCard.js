import React, {Component} from 'react'

export default class IMacCard extends Component {
    render() {
        const m = this.props.mac;
        return (
            <div className='iphoneCard'>
                <p><span className='year'>{m.year}</span></p>
                <p><span className='name'>{m.name}</span></p>
                <p><span className='year'>{m.lastname}</span></p>
                <p><small>Цена на дату выхода: </small>{m.features}</p>
                <p><small>Операционная система: </small>{m.os}</p>
                <p><small>Цена на дату выхода: </small>{m.price}</p>
            </div>
        )
    }
}