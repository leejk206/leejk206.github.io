// Global constants
const canvas = document.getElementById('glCanvas'); // Get the canvas element 
const gl = canvas.getContext('webgl2'); // Get the WebGL2 context

if (!gl) {
  console.error('WebGL 2 is not supported by your browser.');
}

// Set canvas size: 500x500
canvas.width = 500;
canvas.height = 500;

// Initialize WebGL settings: viewport and clear color
gl.viewport(0, 0, canvas.width, canvas.height);
// scissor 테스트를 활성화하면 gl.clear()가 지정된 사각형 영역만 지웁니다.
gl.enable(gl.SCISSOR_TEST);

// 캔버스의 반쪽 크기 계산
const halfWidth = canvas.width / 2;
const halfHeight = canvas.height / 2;

gl.scissor(0, halfHeight, halfWidth, halfHeight);
gl.clearColor(1.0, 0.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.scissor(halfWidth, halfHeight, halfWidth, halfHeight);
gl.clearColor(0.0, 1.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.scissor(halfWidth, 0, halfWidth, halfHeight);
gl.clearColor(1.0, 1.0, 0.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);

gl.scissor(0, 0, halfWidth, halfHeight);
gl.clearColor(0.0, 0.0, 1.0, 1.0);
gl.clear(gl.COLOR_BUFFER_BIT);