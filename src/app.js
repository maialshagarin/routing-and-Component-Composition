import React from 'react';
import Form from './components/form/form.js';
import Results from './components/results/results.js';

class App extends React.Component {
    constructor(props) {
        super(props)
                this.state = {
                    results : []
                }
            }
        
        handleUpdate = (data)=>{
            console.log('data from handel update' , data)
            let arr = [data]
            this.setState({results : arr} )
        } 



    render(){
        console.log('results', this.state.results )
            return(
            <>
        <h1> hi</h1>
        <Form updateResult ={this.handleUpdate} />
        <Results passedData = {this.state.results[0] } />

            </>
        )
    }
}
export default App;