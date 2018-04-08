import React, {Component} from 'react'

export default class MacBookCard extends Component {
    render() {
        const m = this.props.mac;
        return (
            <div className='card'>
                <p><span className='year'>{m.year}</span></p>
                <p><span className='name'>{m.name}</span></p>
                <p><span className='year'>{m.lastname}</span></p>
                <img src={m.img} alt=""/>
                <hr/>
                <p><small>Инновация: </small>{m.features.split('; ').map((feat, i) =>
                    <mark key={i}>{feat}</mark>)}</p>
                <p><small>Дисплей: </small>{m.display}</p>
                <p><small>Процессор: </small>{m.proc}</p>
                <p><small>Оперативная память: </small>{m.ram}</p>
                <p><small>Операционная система: </small>{m.os}</p>
                <p><small>Цена на дату выхода: </small>{m.price}</p>
            </div>
        )
    }
}