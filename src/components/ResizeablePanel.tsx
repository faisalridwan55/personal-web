import useMeasure from "react-use-measure";
import { motion } from "framer-motion";
import { AnimatedComponent } from "./AnimatedComponent";

const ignoreCircularReferences = () => {
  const seen = new WeakSet();
  return (key: string, value: object | null) => {
    if (key.startsWith("_")) return; // Don't compare React's internal props.
    if (typeof value === "object" && value !== null) {
      if (seen.has(value)) return;
      seen.add(value);
    }
    return value;
  };
};

const ResizeablePanel = (props: any) => {
  const [ref, { height }] = useMeasure();

  return (
    <motion.div animate={{ height }}>
      <AnimatedComponent initial={false} exitBeforeEnter>
        <motion.div
          key={JSON.stringify(props.children, ignoreCircularReferences())}
          initial={{
            opacity: 0,
          }}
          animate={{
            opacity: 1,
            transition: { duration: 0.25, delay: 0.25 },
          }}
          exit={{
            opacity: 0,
            transition: { duration: 0.25 },
          }}
        >
          <div ref={ref}>{props.children}</div>
        </motion.div>
      </AnimatedComponent>
    </motion.div>
  );
};

export default ResizeablePanel;
