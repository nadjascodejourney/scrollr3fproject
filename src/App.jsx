import { Canvas } from "@react-three/fiber";
import styles from "./styles.module.css";

// custom components
import ScrollBasedAnimation from "./components/ScrollBasedAnimation";
import Menu from "./components/Menu";

export default function App() {
  return (
    <>
      <Canvas dpr={[1, 2]} className={styles.canvas}>
        <ambientLight />
        <directionalLight color="red" intensity={10} />
        <ScrollBasedAnimation />
        {/*<Text>HI!</Text>*/}
      </Canvas>
      <Menu />
    </>
  );
}
