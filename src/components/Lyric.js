import React from 'react';

class Lyric extends React.Component  {
    state = {
        title: '',
        artist: '',
        lyrics: ''
    }

    // constructor (props) {
    //     super(props);

    //     this.getLyric();
    // }
    componentWillMount () {
        this.getLyric();
    }

    getLyric = async (e) => {
        const song = this.props.match.params.son;
        const artist = this.props.match.params.artist;
        const api_call = await fetch(`https://api.lyrics.ovh/v1/${artist}/${song}`);
        const data = await api_call.json();
        this.setState({
            title: this.song,
            artist: this.artist,
            lyrics: data.lyrics
        })
    }

    render () {
        return (
            <div>
                <h1>{this.state.title}</h1>
                <h3>{this.state.artist}</h3>
                <p>
                    {this.state.lyrics}
                </p>
            </div>
        );
    }
}

export default Lyric;