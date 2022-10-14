import React from "react";
import { AnimatePresence, AnimatePresenceProps } from "framer-motion";

interface NewAnimatePresenceProps
  extends Omit<AnimatePresenceProps, "children"> {
  children: React.ReactNode;
}

export function AnimatedComponent({
  children,
  initial,
  exitBeforeEnter,
}: {
  children: React.ReactNode;
  initial?: boolean;
  exitBeforeEnter?: boolean;
}) {
  const NewAnimatePresence: React.FC<NewAnimatePresenceProps> = AnimatePresence;

  return (
    <NewAnimatePresence initial={initial} exitBeforeEnter={exitBeforeEnter}>
      {children}
    </NewAnimatePresence>
  );
}
