'use strict';

/**
 * `boundingBox`
 * Calculate a 3D bounding box for a THREE.js mesh.
 * @param {object} THREE - Core library of THREE.js
 * @param {string} mesh - 3D THREE.js object for a mesh that needs a bounding box calculated.
 */
const boundingBox = (THREE, mesh) => {
  const box = new THREE.Box3().setFromObject(mesh);
  const size = new THREE.Vector3();
  box.getSize(size);
  const center = new THREE.Vector3();
  box.getCenter(center);

  return {
    max: box.max,
    min: box.min,
    size,
    center
  };
};

module.exports = boundingBox;
