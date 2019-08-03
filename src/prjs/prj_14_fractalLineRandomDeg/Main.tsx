import * as React from 'react'

class Main extends React.Component {
    componentDidMount(){
        var canvas = document.getElementById("canvas") as HTMLCanvasElement;
        var context = canvas.getContext("2d");
        canvas.width=document.body.clientWidth;
        canvas.height=document.body.clientHeight;

        var fractal = function(x1: number, y1: number, l: number, deg: number){
    		if(deg>=360){deg=deg-360}
    		if(deg<=0){deg=360+deg}
    		context.beginPath();
    		context.moveTo(x1, y1);
    		var x2 = x1+(l*Math.sin((Math.PI/180)*deg));
    		var y2 = y1+(l*Math.cos((Math.PI/180)*deg)*(-1));
    		var l2 = l*0.7;
    		var deg1 = Math.round(Math.random() * 360);
    		var deg2 = Math.round(Math.random() * 360);
    		context.lineTo(x2,y2);
    		context.stroke();
    		if (l>=1) {
    			fractal(x2,y2,l2,deg1);
    			fractal(x2,y2,l2,deg2);
    		}

    	}
    	fractal(canvas.width/2,canvas.height,canvas.height/3,0)
    }
    render(){
        const style = {
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        }
        return (
            <canvas id="canvas" style={style as React.CSSProperties}></canvas>
        )
    }
}
export default Main
