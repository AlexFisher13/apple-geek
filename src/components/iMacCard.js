import React, {Component} from 'react'

export default class IMacCard extends Component {
    render() {
        const m = this.props.mac;
        return (
            <div className='card'>
                <div>
                    <p><span className='co-name'>{m.year}</span></p>
                    <p><span className='name'>{m.name}</span></p>
                    <p><span className='co-name'>{m.lastname}</span></p>
                    <img src={m.img} alt=""/>
                </div>
                <div className="features"><p>{m.features.split('; ').map((feat, i) =>
                    <mark key={i}>{feat}</mark>)}</p></div>
                <table>
                    <tr><td>Display:</td><td>{m.display}</td></tr>
                    <tr><td>Processor:</td><td>{m.proc}</td></tr>
                    <tr><td>Memory:</td><td>{m.ram}</td></tr>
                    <tr><td>System:</td><td>{m.os}</td></tr>
                    <tr><td>Price:</td><td>{m.price}</td></tr>
                </table>

            </div>
        )
    }
}