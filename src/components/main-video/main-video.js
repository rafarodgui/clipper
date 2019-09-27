import React, { Component } from 'react';

class Video extends Component {

    componentDidMount(){
        console.log(this.props.video)
    }

    render(){
        return(
            <div key={this.props.video.id} className="main-video">
                <iframe width="640" height="300" title={this.props.video.title}
                src={this.props.video.url} />
                <div className="video-info">
                    <h1>{this.props.video.author} - {this.props.video.title}</h1>
                    <span>{this.props.video.description}</span>
                </div>
            </div>
        );
    }
}

export default class VideoBox extends Component{

    constructor(){
        super();
        this.state = { videos: [] };
    };

    componentDidMount(){
        fetch('http://localhost:8080/videos')
        .then(response => response.json())
        .then(newVideos => this.setState({videos: newVideos}))
    }

    render(){
        return(
            <div>
                <h1>{this.props.error}</h1>
                {
                this.state.videos.map(video => { 

                    if(
                        video.genre === this.props.genre || 
                        this.props.genre === 'All' || 
                        video.author === this.props.search ||
                        video.title === this.props.search ||
                        video.genre === this.props.search ||
                        video.album === this.props.search){
                        return(
                        <Video video={video}/>
                        )} else{
                            return;
                        }
                    })
                }
            </div>
        )        
    }
}