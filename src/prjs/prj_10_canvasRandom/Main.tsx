import * as React from 'react'

class Main extends React.Component {
    componentDidMount(){
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;
    	var context = canvas.getContext("2d");
    	canvas.width=document.body.clientWidth;
        canvas.height=document.body.clientHeight;
    	for (var y = canvas.height - 1; y >= 0; y--) {
    		for (var x = canvas.width - 1; x >= 0; x--) {
    			if(Math.round(Math.random())==1){
    				context.fillRect(x, y, 1, 1);
    			}
    		};
    	};
    }
    render(){
        const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: '100vh',
            width: '100wh',
        }
        return (
            <canvas id="canvas" style={style as React.CSSProperties}></canvas>
        )
    }
}
export default Main
