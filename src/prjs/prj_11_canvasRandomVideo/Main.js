import React from 'react'

class Main extends React.Component {
    componentDidMount(){
        var canvas = document.getElementById("canvas");
        var context = canvas.getContext("2d");
        canvas.width=document.body.clientWidth;
        canvas.height=document.body.clientHeight;

        this.interval = window.setInterval(function(){
            var data = context.createImageData(canvas.width,canvas.width);
            for (var y = canvas.height - 1; y >= 0; y--) {
                for (var x = canvas.width - 1; x >= 0; x--) {
                    if(Math.round(Math.random())==1){
                        var index = (y*data.width+x)*4;  // вычисляем индекс
                        data.data[index] = 0;   // красный
                        data.data[index+1] = 0; // зелёный
                        data.data[index+2] = 0; // синий
                        data.data[index+3] = 255; // явно задаём альфу как 255
                    }
                };
            };
            context.putImageData(data,0,0);
        },100);
    }
    componentWillUnmount(){
        clearInterval(this.interval)
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
            <canvas id="canvas" style={style}></canvas>
        )
    }
}
export default Main
