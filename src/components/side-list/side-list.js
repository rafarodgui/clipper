import React, { Component } from 'react';
import search from '../../imgs/search.png'

import VideoBox from '../main-video/main-video';
import '../main-video/main-video.css';

import Header from '../header/header';
import '../header/header.css';


export default class SideList extends Component{

    constructor(){
        super();
        this.state = { 
            genre: '',
            search: '',
            searchError: ''
         }
         this.search = this.search.bind(this);
    };

    changeGenre(newGenre){
        this.setState({genre: newGenre})
        this.setState({search: ''})
        this.setState({ searchError: '' })
    }

    search(event){
        event.preventDefault();

        const target = document.querySelector('.searchImput')

        if(target.value === ''){
            this.setState({ searchError: 'Type Something' })
        } if(target.value.length > 0){
            this.setState({ searchError: '' })
            this.setState({genre: ''})
            this.setState({ search: target.value });
        }

        target.value = '';
        
    }

    render(){
        return(
            <div>
                <Header />
                <div className="search">
                    <img src={search} alt="search"/>
                    <form>
                        <input type="text" className="searchImput" />
                        <input type="submit" value="Search" onClick={this.search} />
                    </form>
                </div>

                <span className="error">{this.state.searchError}</span>

                <div className="side-list">
                    <ul className="side-video-list">
                        <li onClick={this.changeGenre.bind(this, 'All')}>All</li> 
                        <li onClick={this.changeGenre.bind(this, 'Metal')}>Metal</li>
                        <li onClick={this.changeGenre.bind(this, 'Nu-Metal')}>Nu Metal</li>
                        <li onClick={this.changeGenre.bind(this, 'Hard Rock')}>Hard Rock</li>
                        <li onClick={this.changeGenre.bind(this, 'Punk')}>Punk</li>
                    </ul>
                </div>    
                <VideoBox 
                genre={this.state.genre} 
                search={this.state.search}/>
            </div>    
        );
    }
}