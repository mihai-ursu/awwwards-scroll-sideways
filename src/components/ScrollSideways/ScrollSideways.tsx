import {
  useReducedMotion,
  useScroll,
  useTransform,
  useSpring,
  motion,
} from "framer-motion";
import { FunctionComponent, useRef, useState } from "react";
import ScrollSidewaysProps from "./ScrollSidewaysProps";
import useIsomorphicLayoutEffect from "@/hooks/useIsomorphicLayoutEffect";

const ScrollSideways: FunctionComponent<ScrollSidewaysProps> = (props) => {
  const {
    children,
    offset = 50,
    isEffectActive,
    direction,
    initialX = 0,
  } = props;
  const prefersReducedMotion = useReducedMotion();
  const [elementTop, setElementTop] = useState(0);
  const [clientHeight, setClientHeight] = useState(0);
  const ref = useRef<HTMLDivElement>(null);

  const { scrollY } = useScroll();

  const initial = Math.max(elementTop - clientHeight, 0);
  const final = elementTop + offset;

  const directionValue = direction === "left" ? -1 : 1;

  const xRange = useTransform(
    scrollY,
    [initial, final],
    [initialX, offset * directionValue]
  );
  const x = useSpring(xRange, { stiffness: 400, damping: 90 });

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
    <motion.div initial={{ x: initialX }} ref={ref} style={{ x: x }}>
      {children}
    </motion.div>
  );
};

export default ScrollSideways;
