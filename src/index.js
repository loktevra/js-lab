import React from 'react';
import ReactDOM from 'react-dom';

const content = (
    <div>
        <div className="container-fluid">
    		<div className="page-header">
    		  <h1> Experiments <small>v16.12.03</small></h1>
    		</div>
    	</div>
    	<div className="container">
    		<a href="prj_1_testDisplayMono" target="_blank">#1 Test Display mono</a><br/>
    		<a href="prj_2_testDisplayMonoRevers" target="_blank">#2 Test Display mono Revers</a><br/>
    		<a href="prj_3_testDisplayRed" target="_blank">#3 Test Display Red</a><br/>
    		<a href="prj_4_testDisplayRedRevers" target="_blank">#4 Test Display Red Revers</a><br/>
    		<a href="prj_5_testDisplayGreen" target="_blank">#5 Test Display Green</a><br/>
    		<a href="prj_6_testDisplayGreenRevers" target="_blank">#6 Test Display Green Revers</a><br/>
    		<a href="prj_7_testDisplayBlue" target="_blank">#7 Test Display Blue</a><br/>
    		<a href="prj_8_testDisplayBlueRevers" target="_blank">#8 Test Display Blue Revers</a><br/>
    		<a href="prj_9_chessBoard" target="_blank">#9 BG Chess Board</a><br/>
    		<a href="prj_10_canvasRandom" target="_blank">#10 canvas Random test</a><br/>
    		<a href="prj_11_canvasRandomVideo" target="_blank">#11 canvas Random Video test</a><br/>
    		<a href="prj_12_canvasRandomGrey" target="_blank">#12 canvas Random Video Grey test</a><br/>
    		<a href="prj_13_fractalLine" target="_blank">#13 canvas fractal line</a><br/>
    		<a href="prj_14_fractalLineRandomDeg" target="_blank">#14 canvas fractal line with Random deg</a><br/>
    		<a href="prj_15_fracytalLineRndDegNotTrue" target="_blank">#15 canvas fractal line with not true Random deg</a><br/>
    		<a href="prj_16" target="_blank">#16 Math </a><br/>
    	</div>
    </div>
)

ReactDOM.render(
  content,
  document.getElementById('root')
);
