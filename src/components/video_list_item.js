import React from 'react';

/**
 * onVideoSelect = props.onVideoSelect, the function we get from parent
 * It is just a ES6 syntax 
 * We pass the video as argument
 */

const VideoListItem = ({video, onVideoSelect}) =>{
    const imageURL = video.snippet.thumbnails.default.url;
    const title = video.snippet.title;
    return (
            <li onClick={() => onVideoSelect(video)} className="list-group-item">
                <div className="video-list media">
                    <div className="media-left">
                        <img className="media-object" src={imageURL} />
                    </div>
                    <div className="media-body">
                        <div className="media-heading">{title}</div>
                    </div>
                </div>
            </li>
        );
};

export default VideoListItem;