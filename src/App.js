import React from 'react';
import "antd/dist/antd.css";
import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import Login from './Components/Auth/Login'
import SignUp from "./Components/Auth/SignUp";
import Messenger from "./Components/messenger/Messenger";

function App() {
    return (
        <Router>
            <div>
                {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                <Switch>
                    <Route exact path="/">
                        <Login/>
                    </Route>
                    <Route path="/auth/signin">
                        <Login/>
                    </Route>
                    <Route path="/auth/signup">
                        <SignUp/>
                    </Route>
                    <Route path="/messenger">
                        <Messenger/>
                    </Route>
                </Switch>
            </div>
        </Router>
    );
}

export default App;
