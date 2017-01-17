import React, {Component} from 'react'; // Used to create and manage components
import ReactDOM from 'react-dom'; // Used to intract with actual DOM
import _ from 'lodash';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD1w_PbRJlmKU2_b-HoNuur5J3Cw5x-ZDE";

// Create a new element
class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      videos: [],
      selectedVideo: null
    };

    this.videoSearch("far cry");
  }
/** 
 * VideoDetail : Passing data from parent to child
 * Video list onVideoSelect: Passing data from child to parent
*/

  videoSearch(term){
    YTSearch({
      key: API_KEY,
      term: term
    }, (data) => {
      this.setState({
        videos: data, 
        selectedVideo: data[0]
      });
    });
  }

  render() {
    const videoSearch = _.debounce((term) => { this.videoSearch(term)}, 300); // Lodash

    return (  
      <div>
       <SearchBar onSearch={(term) => videoSearch(term) }/>
       <VideoDetail video = {this.state.selectedVideo} /> 
       <VideoList videos={this.state.videos} onVideoSelect={(video) => this.setState({selectedVideo : video})} /> 
      </div>
    );
  }
}


//Put element in the Dom
ReactDOM.render(<App / >,
    document.querySelector('.container')); // (element, HTML Node)
