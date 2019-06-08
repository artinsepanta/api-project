import React from 'react';
import logo from './logo.svg';
import './App.css';

function beerLover(props){
  let info=(
    <div>
      <span>{props.beer.name}</span>
      {""}
      <span>{props.beer.unit}</span>
    </div>
  )

  return(
    <div>
      <button onClick={props.onclick}>Like it</button>
    </div>
  );
}
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
    results:[],
    twist: null
    };
  }
  componentDidMount() {
    fetch('https://api.punkapi.com/v2/')
      .then((res)=> {
         return res.json()
      })
      .then((json)=> {
        this.setState({
          results:json.results
        })
      })
}
onClick=(event) =>{
  this.setState({
   twist:" "
  });
}
  render() {
    return(
      <div className="root">
        {
            this.state.results.map((beer, index)=> 
          <beerLover
          key={index}
          onClick={this.onClick}
          /> 
        )}
      </div>
    );
  }
}

export default App;


