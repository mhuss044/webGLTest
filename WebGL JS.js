/*
WebGL demos
		There are many demos of WebGL, including these:
	•	 http://www.chromeexperiments.com/webgl
	•	 https://code.google.com/p/webglsamples/
	•	 http://aleksandarrodic.com/p/jelly?sh/
	•	 Google Body (now http://www.zygotebody.com), parts of Google Maps, 
	and Google Earth
	•	 http://www.ro.me/tech/
	•	 http://alteredqualia.com/

Math gets;

	Wolfram Mathworld
	http://mathworld.wolfram.com
	Fractals
	http://users.erols.com/ziring/mandel.html
	http://66.39.71.195/Derbyshire/manguide.html
	http://davis.wpi.edu/~matt/courses/fractals/index.htm
	http://www.fractalforums.com/

GLSL; program coded in C++ like lang, compiled at runtime
	
Online GLSL editors
	http://webglplayground.net/
	http://spidergl.org/meshade/
	http://www.kickjs.org/example/shader_editor/shader_editor.html

Physics
	Learning
	http://www.physicsclassroom.com
	WebGL Demos
	http://www.ibiblio.org/e-notes/webgl/gpu/contents.htm
	Javascript Libraries:
	Box 2D Ports
	http://code.google.com/p/box2dweb/
	https://github.com/kripken/box2d.js
	Bullet Port
	https://github.com/kripken/ammo.js/
	Cannon
	https://github.com/schteppe/cannon.js
	physi.js
	http://chandlerprall.github.com/Physijs/
	Tutorials
	http://creativejs.com/2011/09/box2d-javascript-tutorial-series-by-seth-ladd/
	http://learningthreejs.com/blog/2012/06/05/3d-physics-with-three-js-and-physijs/
	http://www.html5gamedevs.com/2012/01/18/webgl-bullet-js-experiences-history-programmingslides/

		<audio id="startSound" src="startSound.mp3"></audio>
		<script language="JavaScript" type="text/javascript">
		document.getElementById('startSound').play();
		//document.getElementById('startSound').pause();
		document.getElementById('startSound').volume = 3;
		</script>

	Shaders:
		WebGL assumes GPU is present. WebGL based on GLSL, WebGL requires shaders, else nothing 
		shows up
		Materials,lights, transform -> GPU via shaders
		Vertex Shader; obj verts -> onscreen verts
		Fragment/Pixel Shader; final colour of pixel
		Vert shader can gen paramaters to pass to fragment shader
		For each vertex; Run Vertex shader, then run Fragment shader on result
		Shader parameters; Attributes, Varying paramaters, Uniform parameters
			Attributes: components of a vertex; position, normal vec, colour; which are contained within vertex buffer
			Varying Parameters; params which output changes for each vert; use in frag shader
				ex; texture coords
			Uniform parameters; params whose values are constant for every vertex
				ex; world transform, projection matrix
		Provide full control over every vertex and pixel
		complex effects gets
		
		qualifiers; used to manage input/output of shaders
			Attribute, Unifrom, Varying
	
		varying variables; vars passed from vertex shader to fragment shader
			varying bcs vals are diff at each vertex; colour, texture coords
	
		Result of vertex shader stored in GLSL predefined var; gl_Position
		Result of fragment shader stored in GLSL predefined var; gl_FragColor, gl_FragDepth: color and depth values computed
		
		Can use built-in vars with "gl_" prefix to access OpenGL vars
			gl_ModelViewMatrix, gl_LightSource[i], gl_Fog.color: Get current fog color
			
		Function input parameters specified with 'in' qualifyer, and 'out' for output, 'inout' for in/output
			if not qualiyfer is present, identified as input
		
		
		Shader runs on GPU, offload from CPU

		To install and use OpenGL shaders, do the following: 
		After these steps, subsequent graphics primitives will be drawn with the shaders you've 
		provided rather than with OpenGL's defined fixed functionality pipeline. 
		1. Create one or more (empty) shader objects by calling glCreateShader. 
		2. Provide source code for these shaders by calling glShaderSource. 
		3. Compile each of the shaders by calling glCompileShader. 
		4. Create a program object by calling glCreateProgram. 
		5. Attach all the shader objects to the program object by calling glAttachShader. 
		6. Link the program object by calling glLinkProgram. 
		7. Install the executable program as part of OpenGL's current state by calling glUseProgram.

		*/

// WebGL Javascript


// Functions are objects;
var addFunc = function(x, y)
{
	return x+y;
};

var sum = addFunc(1,2);

function exec(funcToExec, param1, param2)
{
	return funcToExec(param1, param2);
}

var doeet = exec(addFunc, 1, 4);

var pos
{
	x : 0
	y : 0
	min : function (void)
		{
			return x + y;
		}
}

// JS polymorphism
function draw(drawable)
{
	drawable.doCalcs();
	drawable.drawFunc();
}

var newDrawable = 
{
	setRenderState : calcsFunc(void){}
	drawFunc : drawingFunc(void){}
};

draw(newDrawable);		// This works

function keyboardFunc(KBevent)
{
	switch(KBevent.keyCode)
	{
		case 38:
		break;
	}
}
window.addEventListener('keydown', keyboardFunc, true);

function mainLoop(void)
{
	physicsPipe();		// Applies physics to physical objs
	effectsPipe();		// Applies graphical effects to textures
	drawScene();
}


function initWebGL()
{
	var canvas = document.getElementById("glCanvas");
	// Specify which API want to use for this canvas; 'webgl' or '2d', along with the API params
	var contextWebGL = canvas.getContext("webgl");
	initGL(canvas);
	initShaders();
	initBuffers();
	contextWebGL.clearColor(1.0,1.0,1.0,1.0);
	gl.clearDepth(1.0);
	gl.enable(gl.DEPTH_TEST);
	gl.depthFunc(gl.LEQUAL);
	setInterval(gameLoop, 15)
}


// HTML5 websockets; multiplayer
var websock = new WebSocket("ws://www.websocket.org");

websock.onopen = function(event)
{
	console.log(event);
	websock.send("Hello Web Socjet!")
}

websock.inmessage = function(event)
{
	console.log(event);
}

websock.close();


// Self-invoking func; calls itself, nameless
// vars declared within it are not global
(function ()
{
	// do stuff
}
)();
