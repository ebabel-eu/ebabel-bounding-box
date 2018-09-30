const boundingBox = require('../index');

let THREE;
let mesh;

beforeEach(() => {
  // Mocking.
  THREE = {
    Box3: class Box3 {
      constructor() {}
      setFromObject() {
        return {
          getSize: () => {},
          getCenter: () => {}
        };
      }
    },
    Vector3: class Vector3 {
      constructor() {}
    }
  };

  mesh = {};
});

test('boundingBox returns an object', () => {
  const result = boundingBox(THREE, mesh);
  expect(result !== undefined && result !== null).toBe(true);
});
