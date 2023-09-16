import { FullscreenHoverEfects } from "./components/Flexbox/FullscreenHoverEfects/FullscreenHoverEfects";
import { HoverEffects } from "./components/Flexbox/HoverEffects/HoverEffects";
import { ResponsiveMansory } from "./components/Flexbox/ResponsiveMansory/ResponsiveMansory";
import { SplitScreen } from "./components/Flexbox/SplitScreen/SplitScreen";
import { SplitScreen2 } from "./components/Flexbox/SplitScreen2/SplitScreen2";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.body}>
      {/* <HoverEffects /> */}
      {/* <FullscreenHoverEfects /> */}
      {/* <ResponsiveMansory /> */}
      {/* <SplitScreen />} */}
      <SplitScreen2 />
    </div>
  );
}

export default App;
