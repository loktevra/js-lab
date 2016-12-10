import React from 'react'

class Main extends React.Component {
    render(){
        const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundImage: "url('data:image/bmp;base64,Qk2KAAAAAAAAAHoAAABsAAAAAgAAAAIAAAABABgAAAAAABAAAAATCwAAEwsAAAAAAAAAAAAAQkdScwAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAIAAAAAAAAAAAAAAAAAAAAAAAD/AAAAAP8AAAAAAAAA')",
        }
        return (
            <div style={style}/>
        )
    }
}
export default Main
