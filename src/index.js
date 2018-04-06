import React from 'react';
import ReactDOM from 'react-dom';
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import devices from './store/devices'
import IMac from './containers/iMac'
import iPhone from './containers/iPhone'
import MacBook from './containers/MacBook'
import {HashRouter, Switch, Route, Link} from 'react-router-dom';
import './index.css'

function rootReducer(store=devices) {
    return store
}
const store = createStore(rootReducer);

//Делаем в корневом компоненте меню навигации
const App = () => (
    <div>
        <Nav />
        <Main />
    </div>
)
//Просто список ссылок
const Nav = () => (
    <header>
        <nav className='header'>
            <h2><Link to='/'>iPhone</Link></h2>
            <h2><Link to='/macbook'>MacBook</Link></h2>
            <h2><Link to='/imac'>iMac</Link></h2>
        </nav>
    </header>
)
//Список компонентов к которым ведут ссылки
const Main = () => (
    <main>
        <Switch>
            <Route exact path='/' component={iPhone}/>
            <Route path='/macbook' component={MacBook}/>
            <Route path='/imac' component={IMac}/>
        </Switch>
    </main>
)
//Обворачиваем корневой компонент Роутером
ReactDOM.render((
    <HashRouter>
        <Provider store={store}>
            <App/>
        </Provider>
    </HashRouter>
), document.getElementById('root'))

