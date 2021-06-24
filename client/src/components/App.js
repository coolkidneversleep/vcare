import React, { Component } from 'react';
import Header from './Header';
import { BrowserRouter, Route} from 'react-router-dom';
import { ThemeProvider } from '@material-ui/core/styles'
import CssBaseline from '@material-ui/core/CssBaseline'
import theme from '../theme'
import Landing  from './Landing';
import Reservation from './Reservation';

class App extends Component {
    render() {
        return(
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <BrowserRouter>
                <div>
                    <Header />
                    <Route exact path="/" component={Landing} />
                    <Route exact path="/reservation" component={Reservation} />
                </div>
            </BrowserRouter>
            </ThemeProvider>
        )
    }
}

export default App;