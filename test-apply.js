function greet(name) {
  if (typeof name !== 'string') {
    throw new TypeError('Name must be a string');
  }
  return "Hello, " + name;
}

function add(a, b) {
  if (typeof a !== 'number' || typeof b !== 'number' || isNaN(a) || isNaN(b)) {
    throw new TypeError('Both arguments must be numbers');
  }
  return a + b;
}

function clamp(x, min, max) {
  return Math.max(min, Math.min(max, x));
}
