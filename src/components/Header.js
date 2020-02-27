import React from 'react'

export default function Header() {
    return(
        <header style={styles.header}>
            <img 
                style={styles.img}
                src="http://www.pngall.com/wp-content/uploads/2016/05/Trollface.png" 
                alt="Problem?"
            />
            <p style={styles.text}>Meme Generator</p>
        </header>
    )
}

const styles = {
    header: {
        height: '100px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: '#c6ff00'
    },
    img: {
        height: '80%'
    },
    text: {
        fontFamily: 'VT323, monospace',
        fontSize: '50px',
        marginLeft: '60px'
    }
}