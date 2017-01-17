import React, {Component} from 'react'; // Used to create and manage components
import ReactDOM from 'react-dom'; // Used to intract with actual DOM
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

const API_KEY = "AIzaSyD1w_PbRJlmKU2_b-HoNuur5J3Cw5x-ZDE";


// Create a new element
class App extends Component {

  constructor(props) {
        super(props);
        YTSearch({key: API_KEY, term: 'far cry'}, (videos) => {
              this.setState({ videos });
          });
        this.state = { videos: [] };
      }

  render(){
    return (// Parent to child data transfer
    <div>
      <SearchBar />
      <VideoDetail video={this.state.videos[0]} /> 
      <VideoList videos={this.state.videos}/>
    </div>
    );
  }
}


//Put element in the Dom
ReactDOM.render(<App />, document.querySelector('.container')); // (element, HTML Node)

