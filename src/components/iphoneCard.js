import React, {Component} from 'react'

export default class IphoneCard extends Component {
    render() {
        const i = this.props.iphone;
        return (
            <div className='card'>
                <p><span className='co-name'>{i.year}</span></p>
                <p><span className='name'>{i.name}</span></p>
                <img src={i.img} alt=""/>
                <hr/>
                <p>{i.feature.split('; ').map((innov, i) =>
                    <mark key={i}>{innov}</mark>)}</p>
                <table>
                    <tr><td>Display:</td><td>{i.screen}</td></tr>
                    <tr><td>Camera:</td><td>{i.cam}</td></tr>
                    <tr><td>Selfie:</td><td>{i.selfie}</td></tr>
                    <tr><td>Video:</td><td>{i.video}</td></tr>
                    <tr><td>Processor:</td><td>{i.proc}</td></tr>
                    <tr><td>Memory:</td><td>{i.ram}</td></tr>
                    <tr><td>Capacity:</td><td>{i.memory}</td></tr>
                    <tr><td>System:</td><td>{i.os}</td></tr>
                    <tr><td>Price:</td><td>{i.price}</td></tr>
                </table>
            </div>
        )
    }
}