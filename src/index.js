import React from 'react';
import reactDom from 'react-dom';
import App from './app.js';

class Main extends React.Component {
    render(){
        return(
            <App />
        )
    }
}

reactDom.render(<Main /> , document.getElementById('root'))