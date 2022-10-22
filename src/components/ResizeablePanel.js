import useMeasure from "react-use-measure";
import { AnimatePresence, motion } from "framer-motion";

const ignoreCircularReferences = () => {
	const seen = new WeakSet();
	return (key, value) => {
	  if (key.startsWith("_")) return; // Don't compare React's internal props.
	  if (typeof value === "object" && value !== null) {
		if (seen.has(value)) return;
		seen.add(value);
	  }
	  return value;
	};
  };
  
const ResizeablePanel = props => {
	const [ref, {height} ] = useMeasure();

	return (
		<motion.div
			animate={{height}}
		>
			<AnimatePresence initial={false} exitBeforeEnter>
				<motion.div
					key={JSON.stringify(props.children, ignoreCircularReferences())}
					initial={{
						opacity: 0,
					}}
					animate={{
						opacity: 1,
						transition: { duration: .25, delay: .25 },
					}}
					exit={{
						opacity: 0,
						transition: { duration: .25 }
					}}
				>
				<div ref={ref}>
					{props.children}
				</div>
				</motion.div>
			</AnimatePresence>
		</motion.div>
	)
}

export default ResizeablePanel;