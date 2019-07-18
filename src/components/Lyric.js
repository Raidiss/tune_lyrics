import React from 'react';
import { Markup } from 'interweave';

class Lyric extends React.Component  {
    constructor (props) {
        super(props);

        this.state = {
            title: '',
            artist: '',
            lyrics: ''
        }
    }
    
    componentDidMount () {
        this.getLyric();
    }

    getLyric = async (e) => {
        const song = this.props.location.state.song;
        const artist = this.props.location.state.artist;
        const api_call = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await api_call.json();
        console.log(data.lyrics);
        this.setState({
            title: this.props.location.state.song,
            artist: this.props.location.state.artist,
            lyrics: data.lyrics
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h4>{this.state.artist}</h4>
                <hr />
                <Markup content={this.state.lyrics} />
            </div>
        );
    }
}

export default Lyric;