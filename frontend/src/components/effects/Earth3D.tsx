"use client";

import {
    useRef,
    useMemo,
} from "react";

import {
    Canvas,
    useFrame,
    useLoader,
} from "@react-three/fiber";

import {
    TextureLoader,
    Mesh,
    Group,
    Sprite,
    Vector3,
} from "three";

import {
    OrbitControls,
     Line,
} from "@react-three/drei";

function Earth() {

    const earthRef = useRef<Mesh>(null);
    const cloudsRef = useRef<Mesh>(null);

    const earthTexture = useLoader(
        TextureLoader,
        "/images/earth/earth-day.jpg"
    );

    const cloudTexture = useLoader(
        TextureLoader,
        "/images/earth/earth-clouds.png"
    );

    /* const nightTexture = useLoader(
        TextureLoader,
        "/images/earth/earth-night.png"
    ); */

    const normalTexture = useLoader(
        TextureLoader,
        "/images/earth/earth-normal.jpg"
    );

    useFrame((_, delta) => {

        if (earthRef.current) {
            earthRef.current.rotation.y +=
                delta * 0.045;
        }

        if (cloudsRef.current) {
            cloudsRef.current.rotation.y +=
                delta * 0.052;
        }

    });

    return (
        <group rotation={[0.08, 0, -0.12]}>

            {/* Earth */}

            <mesh ref={earthRef}>

                <sphereGeometry
                    args={[2.5, 96, 96]}
                />

                <meshStandardMaterial
                    map={earthTexture}
                    normalMap={normalTexture}
                    roughness={0.8}
                    metalness={0}
                />

            </mesh>

            {/* Clouds */}

            <mesh
                ref={cloudsRef}
                scale={1.007}
            >

                <sphereGeometry
                    args={[2.5, 96, 96]}
                />

                <meshStandardMaterial
                    map={cloudTexture}
                    transparent
                    opacity={0.4}
                    depthWrite={false}
                />

            </mesh>

            {/* Atmosphere */}

            {/* <mesh scale={1.025}>

                <sphereGeometry
                    args={[2.5, 96, 96]}
                />

                <meshBasicMaterial
                    color="#38bdf8"
                    transparent
                    opacity={0.055}
                    side={2}
                />

            </mesh> */}

        </group>
    );
}

export function Earth3D() {

    return (
        <div className="h-full w-full">

            <Canvas
                camera={{
                    position: [0, 0, 9],
                    fov: 48,
                }}
                dpr={[1, 1.6]}
                gl={{
                    alpha: true,
                    antialias: true,
                }}
                onCreated={({ gl }) => {
                    gl.setClearColor(0x000000, 0);
                }}
            >
                {/* Lighting */}

                <ambientLight
                    intensity={0.28}
                />

                <directionalLight
                    position={[-5, 3, 6]}
                    intensity={2.5}
                    color="#ffffff"
                />

                <pointLight
                    position={[4, 0, 3]}
                    intensity={10}
                    color="#0ea5e9"
                    distance={10}
                />

                <Earth />

                <ISSOrbit />

                <OrbitControls
                    enableZoom={false}
                    enablePan={false}
                    enableRotate={false}
                />

            </Canvas>

        </div>
    );
}

function ISSOrbit() {

    const orbitRef = useRef<Group>(null);

    const issTexture = useLoader(
        TextureLoader,
        "/images/ISS.png"
    );

    const orbitRadiusX = 3.45;
    const orbitRadiusZ = 3.10;

    const orbitPoints = useMemo(() => {

        const points: Vector3[] = [];
        const segments = 128;

        for (let i = 0; i <= segments; i++) {

            const angle =
                (i / segments) *
                Math.PI *
                2;

            points.push(
                new Vector3(
                    Math.cos(angle) * orbitRadiusX,
                    0,
                    Math.sin(angle) * orbitRadiusZ
                )
            );
        }

        return points;

    }, []);

    useFrame((_, delta) => {

        if (orbitRef.current) {
            orbitRef.current.rotation.y +=
                delta * 0.18;
        }

    });

    return (
        <group
            rotation={[
                0.28,
                0,
                -0.16,
            ]}
        >

            {/* Orbit path */}

            <Line
                points={orbitPoints}
                color="#38bdf8"
                lineWidth={0.6}
                transparent
                opacity={0.20}
            />

            {/* Moving ISS */}

            <group ref={orbitRef}>

                <sprite
                    position={[
                        orbitRadiusX,
                        0,
                        0,
                    ]}
                    scale={[
                        0.72,
                        0.40,
                        1,
                    ]}
                >
                    <spriteMaterial
                        map={issTexture}
                        transparent
                        depthWrite={false}
                    />
                </sprite>

            </group>

        </group>
    );
}