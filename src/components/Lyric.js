import React from 'react';

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
                <p>
                    {this.state.lyrics}
                </p>
            </div>
        );
    }
}

export default Lyric;