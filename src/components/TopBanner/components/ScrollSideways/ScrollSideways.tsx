import {
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import { FunctionComponent, useRef, useState } from "react";
import ScrollSidewaysProps from "./ScrollSidewaysProps";
import styles from "./ScrollSideways.module.scss";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const ScrollSideways: FunctionComponent<ScrollSidewaysProps> = (props) => {
  const { children, offset = 50, isEffectActive } = props;
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = elementTop - clientHeight;
  const final = elementTop + offset;

  const yRange = useTransform(scrollY, [initial, final], [offset, -offset]);
  const y = useSpring(yRange, { stiffness: 400, damping: 90 });

  useIsomorphicLayoutEffect(() => {
    const element = ref.current;
    const onResize = () => {
      if (element)
        setElementTop(
          element.getBoundingClientRect().top + window.scrollY || window.scrollY
        );
      setClientHeight(window.innerHeight);
    };
    onResize();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [ref]);

  if (prefersReducedMotion || !isEffectActive) {
    return <>{children}</>;
  }

  return (
    <motion.div className={styles.parallax_wrapper} ref={ref} style={{ y }}>
      {children}
    </motion.div>
  );
};

export default ScrollSideways;
