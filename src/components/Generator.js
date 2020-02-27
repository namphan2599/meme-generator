import React, {Component} from 'react'

const styles = {
    form: {
        width: '90%',
        display: 'flex',
        justifyContent: 'center',
        margin: '20px auto'
    },
    input: {
        width: '45%',
        height: '40px',
        fontSize: '30px'
    },
    button: {
        border: 'none',
        fontSize: '25px',
        background: '#c6ff00'
    },
    meme: {
        position: 'relative',
        width: '90%',
        margin: 'auto'
    },
    memeImg: {
        width: '100%'
    }, 
    h2: {
        width: '80%',
        color: 'whitesmoke',
        position: 'absolute',
        left: '50%',
        transform: 'translateX(-50%)',
        fontSize: '50px',
        fontFamily: 'impact, sans-serif',
        textTransform: 'uppercase',
        textShadow: '2px 2px 0 #000, -2px -2px 0 #000, 2px -2px 0 #000,-2px 2px 0 #000,0 2px 0 #000,2px 0 0 #000,0 -2px 0 #000'
    },
    top: {
        top: '0'
    },
    bottom: {
        bottom: '0'
    }

}

class Generator extends Component {

    constructor() {
        super()
        this.state = {
            topText: '',
            bottomText: '',
            randMemeImg: 'http://i.imgflip.com/1bij.jpg',
            allMemeImgs: []
        }

        this.handleChange = this.handleChange.bind(this)
        this.handleSubmit = this.handleSubmit.bind(this)

    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        }) 
    }

    componentDidMount() {
        fetch("https://api.imgflip.com/get_memes")
            .then(response => response.json())
            .then(response => {
                const {memes} = response.data
                this.setState({
                    allMemeImgs: memes
                })
            })
    }

    handleSubmit(event) {
        event.preventDefault()
        const randNum = Math.floor(Math.random() * this.state.allMemeImgs.length)
        const randMeme = this.state.allMemeImgs[randNum].url
        this.setState({
            randMemeImg: randMeme
        })
    }

    render() {
        return(
            <div>
                <form style={styles.form} onSubmit={this.handleSubmit}>
                    <input 
                        style={styles.input}
                        type="text"
                        name="topText"
                        onChange={this.handleChange}
                         />
                    <input 
                        style={styles.input}
                        type="text" 
                        name="bottomText"
                        onChange={this.handleChange}
                        />
                    <button style={styles.button}>GEN</button>
                </form>
                <div style={styles.meme}>
                    <img style={styles.memeImg} src={this.state.randMemeImg} alt="meme"/>
                    <h2 style={{...styles.h2, ...styles.top}}>{this.state.topText}</h2>
                    <h2 style={{...styles.h2, ...styles.bottom}}>{this.state.bottomText}</h2>
                </div>
            </div>
        )
    }
}

export default Generator

