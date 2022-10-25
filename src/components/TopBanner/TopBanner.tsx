import { FunctionComponent } from "react";
import ScrollSideways from "../ScrollSideways/ScrollSideways";
import styles from "./TopBanner.module.scss";

const TopBanner: FunctionComponent = () => {
  return (
    <div className={styles.wrapper}>
      <ScrollSideways
        direction="right"
        isEffectActive={true}
        offset={150}
        initialOffset={-150}
      >
        <h1 className={styles.topBannerHeadline}>TopBanner</h1>
      </ScrollSideways>
      <ScrollSideways direction="left" isEffectActive={true} offset={150}>
        <h1 className={styles.topBannerHeadline}>Test</h1>
      </ScrollSideways>
    </div>
  );
};

export default TopBanner;
