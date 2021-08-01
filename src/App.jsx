import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
import "../node_modules/bootstrap/dist/js/bootstrap.bundle"
import Home from './Containers/Home';
import About from './Containers/About'
import Login from './Containers/Login'
import Signup from './Containers/Signup'
import Contact from './Containers/Contact';
import Navbar from './components/Navbar'
import Activate from './Containers/Activate'



const App = () => {
    return (
        <>
            <Navbar />
            <Switch>
                <Route exact path='/' component={Home} />
                <Route exact path='/about' component={About} />
                <Route exact path='/contact' component={Contact} />
                <Route exact path='/login' component={Login} />
                <Route exact path='/signup' component={Signup} />
                <Route exact path='/activate/:uid/:token' component={Activate} />
            </Switch>
        </>
    )
}

export default App;