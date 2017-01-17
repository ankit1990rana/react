import React from 'react';
import VideoListItem from './video_list_item';

/**
 *  onVideoSelect receive data and pass to its parent component
 * 
 * First commented like does the same thing and pass it as a property but its confusing now
 */
const VideoList = (props) => {
    const videoItems = props.videos.map((video)=>{
        // return <VideoListItem onVideoSelect={props.onVideoSelect} key={video.etag} video={video} />
     return <VideoListItem onVideoSelect={(data) => props.onVideoSelect(data) } key={video.etag} video={video} />
    });
    return (
        <ul className="col-md-4 list-group">
             {videoItems}
        </ul>
    );
};

export default VideoList;

