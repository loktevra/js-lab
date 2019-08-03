import * as React from 'react'

class Main extends React.Component {
    render(){
        const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: 'white',
            backgroundImage: "linear-gradient( 45deg,black 25%, transparent 25%, transparent 74%, black 75%, black), linear-gradient( 45deg,black 25%, transparent 25%, transparent 74%, black 75%, black)",
            backgroundSize:'100px 100px',
            backgroundPosition: '0 0, 50px 50px',
        }
        return (
            <div style={style as React.CSSProperties}/>
        )
    }
}
export default Main
