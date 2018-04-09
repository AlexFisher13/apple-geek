import React, {Component} from 'react'

export default class IphoneCard extends Component {
    render() {
        const i = this.props.iphone;
        return (
            <div className='card'>
                <p><span className='year'>{i.year}</span></p>
                <p><span className='name'>{i.name}</span></p>
                <img src={i.img} alt=""/>
                <hr/>
                <p>{i.feature.split('; ').map((innov, i) =>
                    <mark key={i}>{innov}</mark>)}</p>
                <p><small>Дисплей: </small>{i.screen}</p>
                <p><small>Камера: </small>{i.cam}</p>
                <p><small>Селфи камера: </small>{i.selfie}</p>
                <p><small>Запись видео: </small>{i.video}</p>
                <p><small>Процессор: </small>{i.proc}</p>
                <p><small>ОЗУ: </small>{i.ram}</p>
                <p><small>Память: </small>{i.memory}</p>
                <p><small>Операционная система: </small>{i.os}</p>
                <p><small>Цена на дату выхода: </small>{i.price}</p>
            </div>
        )
    }
}