import React, { Component } from 'react';

class Book extends Component {

    constructor(props){
        super(props);
    }

    render(){

        return(
            <div id="book">
                {this.props.title}
            </div>
        );
    }

}

export default Book;