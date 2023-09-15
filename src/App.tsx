import { FullscreenHoverEfects } from "./components/Flexbox/FullscreenHoverEfects/FullscreenHoverEfects";
import { HoverEffects } from "./components/Flexbox/HoverEffects/HoverEffects";

import styles from "./style.module.scss";

function App() {
  return (
    <div className={styles.body}>
      <h1>Css</h1>
      {/* <HoverEffects /> */}
      <FullscreenHoverEfects />
    </div>
  );
}

export default App;
