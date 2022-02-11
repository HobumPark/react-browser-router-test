
import React,{Component} from 'react';
import "../css/Search.css";

class Search extends Component {
  
  constructor(props){
    super(props)
    this.state={

    } 
  }

  render(){
    return (
    <div id="search">
      검색화면
      locaton:{JSON.stringify(this.props.location)} <br/>
    </div>
  );
  }
}

export default Search;
