varying vec2 vUv;
varying float vHeight;

uniform vec3 uBaseColor;   // Green #7A8B5C
uniform vec3 uTipColor;    // Wheat #D4B87A
uniform float uTime;

void main() {
  // Gradient from base (green) to tip (wheat)
  float t = smoothstep(0.0, 1.0, vHeight);
  vec3 color = mix(uBaseColor, uTipColor, t);

  // Subtle variation
  float variation = sin(vUv.x * 20.0 + uTime * 0.2) * 0.03;
  color += variation;

  gl_FragColor = vec4(color, 1.0);
}
