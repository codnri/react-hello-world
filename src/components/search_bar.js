import React, { Component } from 'react';

class SearchBar extends Component {
  constructor(props){
    super(props);
    this.state = {term: ''};//term is custom variable
  }
  render(){
    return (
      <div className="search-bar">
      <input
        value={this.state.term}
        onChange={event => this.onInputChange(event.target.value)} />
      
      </div>
    );
    //"onChange" is react specific property
  }

  onInputChange(term){//eventhandler name convention => on+<Element>+Change
    this.setState({ term });
    console.log(event.target.value);
    this.props.onSearchTermChange(term);
  }
}



// const SearchBar = () => {
//   return <input />;
// };

export default SearchBar;