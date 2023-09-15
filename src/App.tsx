import { FullscreenHoverEfects } from "./components/Flexbox/FullscreenHoverEfects/FullscreenHoverEfects";
import { HoverEffects } from "./components/Flexbox/HoverEffects/HoverEffects";
import { ResponsiveMansory } from "./components/Flexbox/ResponsiveMansory/ResponsiveMansory";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.body}>
      <h1>Css</h1>
      {/* <HoverEffects /> */}
      {/* <FullscreenHoverEfects /> */}
      <ResponsiveMansory />
    </div>
  );
}

export default App;
