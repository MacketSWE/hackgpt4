import { AnimatePresence, motion } from "framer-motion";

interface Props {
  label: string;
  href?: string;
  onClick?: () => void;
}

export const Button = ({ onClick, label }: Props) => {
  function pressedOnClick(e: any) {
    if (onClick) {
      e.preventDefault();
      onClick();
    }
  }
  return (
    <AnimatePresence>
      <motion.div
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        <div
          onClick={pressedOnClick}
          className="select-none w-28 h-20 rounded-lg bg-gray-700 cursor-pointer flex items-center justify-center"
        >
          {label}
        </div>
      </motion.div>
    </AnimatePresence>
  );
};
