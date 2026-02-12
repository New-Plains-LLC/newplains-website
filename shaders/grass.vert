uniform float uTime;
uniform float uWindStrength;

attribute float aOffset;
attribute float aScale;
attribute float aAngle;

varying vec2 vUv;
varying float vHeight;

// Simple noise function
float hash(float n) {
  return fract(sin(n) * 43758.5453123);
}

float noise(float x) {
  float i = floor(x);
  float f = fract(x);
  float a = hash(i);
  float b = hash(i + 1.0);
  return mix(a, b, f * f * (3.0 - 2.0 * f));
}

void main() {
  vUv = uv;
  vHeight = position.y;

  vec3 pos = position;

  // Wind displacement — stronger at the tip (higher y)
  float windPhase = uTime * 1.5 + aOffset * 6.2831;
  float windNoise = noise(aOffset * 10.0 + uTime * 0.5);
  float windAmount = pos.y * pos.y * uWindStrength;

  pos.x += sin(windPhase) * windAmount * (0.5 + windNoise * 0.5);
  pos.z += cos(windPhase * 0.7) * windAmount * 0.3;

  // Apply instance scale
  pos *= aScale;

  // Rotate around Y axis by instance angle
  float c = cos(aAngle);
  float s = sin(aAngle);
  vec3 rotated = vec3(
    pos.x * c - pos.z * s,
    pos.y,
    pos.x * s + pos.z * c
  );

  vec4 mvPosition = modelViewMatrix * instanceMatrix * vec4(rotated, 1.0);
  gl_Position = projectionMatrix * mvPosition;
}
