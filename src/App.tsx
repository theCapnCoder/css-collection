import { CircularProgress } from "./components/Card/CircularProgress/CircularProgress";
import { HoverEffects } from "./components/Card/HoverEffects/HoverEffects";
import { RotatingImage } from "./components/Card/RotatingImage/RotatingImage";
import { FlipCard } from "./components/Flexbox/FlipCard/FlipCard";
import { FullscreenHoverEfects } from "./components/Flexbox/FullscreenHoverEfects/FullscreenHoverEfects";
import { ResponsiveMansory } from "./components/Flexbox/ResponsiveMansory/ResponsiveMansory";
import { SplitScreen } from "./components/Flexbox/SplitScreen/SplitScreen";
import { SplitScreen2 } from "./components/Flexbox/SplitScreen2/SplitScreen2";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.body}>
      {/* Card */}
      {/* <HoverEffects /> */}
      {/* <CircularProgress /> */}
      <RotatingImage />

      {/* Flexbox */}

      {/* <HoverEffects />
      <FullscreenHoverEfects />
      <ResponsiveMansory />
      <SplitScreen />
      <SplitScreen2 />
      <FlipCard /> */}
    </div>
  );
}

export default App;
