const { mockTHREE } = require('ebabel-mocks');

const boundingBox = require('../src/ebabel-bounding-box');

let THREE;
let mesh;

beforeEach(() => {
  THREE = mockTHREE;
  mesh = {};
});

test('boundingBox returns an object', () => {
  const result = boundingBox(THREE, mesh);
  expect(result !== undefined && result !== null).toBe(true);
});
