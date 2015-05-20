// Infection

/*
function initWebGL()
{
	var canvas = document.getElementById("glCanvas");
	try
	{
		gl = canvas.getContext("webgl");
	}
	catch(e)
	{
		alert("Catch get");
	}
	
	if(gl != null)
	{
		//set the clear color to red
		gl.clearColor(1.0, 0.0, 0.0, 1.0); 
		gl.clear(gl.COLOR_BUFFER_BIT);
	}
	else
	{
		alert( "Error: Your browser does not appear to support WebGL.");
	}
}
*/
function setViewport(glContext, x, y, width, height)
{
	glContext.viewport(x, y, width, height);
}

function initShaders(){}
function setupBuffers(){}
function drawScene()
{
	// Draw scene
	// Clear frame buffer
	// Set camera
}
function mainLoop()
{
	// Draw scene;
	drawScene();
}

function glInit()
{
	// Define the rectangular bounds where drawing occurs within the canvas;
	setViewport(gl, 0, 0, canvas.width, canvas.height);	// Viewport takes up entire canvas area

	//set the clear color to red
	gl.clearColor(1.0, 1.0, 1.0, 1.0); 
	gl.clear(gl.COLOR_BUFFER_BIT);

	// Make a buffer; a VBO; vertex buffer object
	var myBuff = gl.createBuffer();
	// Set type, and bind VBO; ELEMENT_ARRAY_BUFFER for vertex indicies
	// 							ARRAY_BUFFER for vertex attributes ie position, colour
	gl.bindBuffer(gl.ARRAY_BUFFER, myBuff);
	
	var VBOdata = [ 
					1.0, 0.0, 0.0,
					0.0, 1.0, 0.0,
					1.0, 1.0, 1.0
					];
	
	// Put data into buffer; using currently bound buffer
	// STATIC_DRAW; data set once, never changes
	// DYNAMIC_DRAW; specify the data everytime
	gl.bufferData(gl.ARRAY_BUFFER, VBOdata, gl.STATIC_DRAW);
	// Done with buffer; delete it
	gl.deleteBuffer(myBuff);
}

function initWebGL()
{
	// Get the JavaScript DOM object associated with the canvas tag;
	canvas = document.getElementById("glCanvas");
	try
	{
		// Need to get the context from the DOM obj, in order to draw to it
		// experimental will eventually become 'webgl'... future compatable
		gl = canvas.getContext("experimental-webgl") || canvas.getContext("webgl");
	}
	catch(e)
	{
		alert("Catch get; something wrong with context get:"+e.toString());
	}
	
	if(gl != null)
	{
		glInit();
		initShaders();
		setupBuffers();
		mainLoop();
	}
	else
	{
		alert( "Error: Your browser does not appear to support WebGL.");
	}
}

// Once page loaded, call;
window.onload = initWebGL;
// Var to store webGL context;
var gl = null, canvas;

