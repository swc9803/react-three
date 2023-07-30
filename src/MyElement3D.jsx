/* eslint-disable react/no-unknown-property */
import { OrbitControls } from "@react-three/drei";
// import * as THREE from "three";
import { useRef, useState } from "react";

function MyElement3D() {
    const refMesh = useRef()
    const [, setRefAllocated] = useState(false)

    return (
        <>
            <OrbitControls />

            <ambientLight intensity={0.1} />
            <directionalLight position={[2, 1, 3]} intensity={0.5} />

            <mesh ref={ (el) => {
                refMesh.current = el
                setRefAllocated(true)
            }}>
                <boxGeometry />
                <meshStandardMaterial color="#1abc9c" />
            </mesh>

            <mesh geometry={refMesh.current?.geometry}>
                <meshBasicMaterial color="yellow" wireframe={true} />
            </mesh>
        </>
    )
}

export default MyElement3D