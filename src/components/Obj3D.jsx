import React from "react";

function Obj3D() {
  return (
    <mesh rotation={[0, 0, 0]}>
      <boxBufferGeometry attach="geometry" args={[3, 3, 3]} />
      <meshLambertMaterial attach="material" color="blue" />
    </mesh>
  );
}

export default Obj3D;
