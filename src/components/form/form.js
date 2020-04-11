import React from 'react' ;

class Form extends React.Component{
    constructor(props){
        super(props)
      this.state = {
       url : '',
       method : 'get'
      }  
    }

    handleSubmit =  async (e) =>{
        e.preventDefault();
        let method = e.target.method.value ;
        this.setState({method})
        let url =e.target.url.value ;
        this.setState({ url })
        // console.log('this.state.url', this.state.url) here will not shown because render not happen 

      if (this.state.method === 'get'){
        let response = await fetch(url,
             {
            method: this.state.method, 
            mode: 'cors', 
            cache: 'no-cache', 
            credentials: 'same-origin', 
            headers: {
              'Content-Type': 'application/json'
            },  
        
        })
        let output =  await response.json() ;
        console.log('output', output)
         // let output =  await response.text();
        this.props.updateResult(output)
        

    }
    }


    render(){
        console.log('this.state.url', this.state.url)

        return(
            <>
            <form onSubmit= { e => this.handleSubmit(e)} >
                <label>
                Enter Url 
                <input name='url'  />
                </label>
                <label>
                Enter method ( get , post , update , delete) 
                <input name='method'  />
                </label>
                <button type ='submit'> Go </button>
            </form>



            </>
        )
    }

}
export default Form ;