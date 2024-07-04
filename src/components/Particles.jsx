import { Point, Points } from "@react-three/drei";
import { useThree } from "@react-three/fiber";
import React from "react";

const particleColors = [
  "#673ab7",
  "#f4b677",
  "orange",
  "blue",
  "#8bc34a",
  "purple",
];

const Particles = ({ size = 5000 }) => {
  const { width, height } = useThree((state) => state.viewport);
  return (
    <Points limit={size}>
      {/* // limit is used to limit the number of points in the scene => performance optimization */}
      <pointsMaterial size={0.05} vertexColors />{" "}
      {/* // pointsMaterial is used to define the material of the points; size is the size of the points; vertexColors is used to color the points */}
      {Array.from({ length: size }).map(
        (
          currentElement,
          i // Array.from is used to create an array with a length of size; map is used to iterate over the array and create a point for each element; currentElement is a placeholder for the current element, i is the index of the current element
        ) => (
          <Point
            key={i}
            position={[
              (0.5 - Math.random()) * width * 2,
              0.5 * height + Math.random() ** 0.25 * height * -3,
              (0.5 - Math.random()) * 25,
            ]}
            color={
              particleColors[
                Math.floor(Math.random() * (particleColors.length - 1))
              ]
            }
          />
        )
      )}
    </Points>
  );
};

export default Particles;
