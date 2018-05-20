import _ from 'lodash';
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';
import YTSearch from 'youtube-api-search'
import VideoList from './components/video_list'
import VideoDetail from './components/video_detail'
import './style.css'
const API_KEY = 'AIzaSyAydwsCJ0CGPj-b8nKfKROBdGB0JazdIX0';



// Create a new component, this component should produce
// some HTML
class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
      };
    this.videoSearch('serfboards');

  }

  videoSearch(term){
    YTSearch({key: API_KEY, term: term}, (videos) => {
      console.log(videos);
      this.setState({
         videos: videos,
         selectedVideo: videos[0]
        });//same with setState({videos: videos})
    });
  }

  render(){
    const videoSearch = _.debounce((term)=>{this.videoSearch(term)},300);
    //遅延実行（debounce）は、連続処理が終わってから、300ms後に一度だけコールバックを実行する
    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList 
        onVideoSelect = { selectedVideo => this.setState({selectedVideo}) }
        //onVideoSelect属性に selectedVideoをstateにセットする関数を定義
        videos={this.state.videos} />
      </div>
    );
}
}
//Take this component's  generated HTML and put it
// on the page (in the DOM)
ReactDOM.render(<App />,document.querySelector('.container'));