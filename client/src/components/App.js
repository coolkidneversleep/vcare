import React, { Component } from 'react';
import { BrowserRouter, Route} from 'react-router-dom';
import { connect } from 'react-redux';
import Header from './Header';

class App extends Component {
    render() {
        return(
            <div className ="container">
                <BrowserRouter>
                    <Header />
                </BrowserRouter>
            </div>
        )
    }
}

export default connect(null, actions)(App);