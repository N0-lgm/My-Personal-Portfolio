import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";

// Placeholder colors for icons (HTML, CSS, JS, React, Tailwind, Figma, Git)
const tools = [
  { id: 1, name: "HTML", color: "#E34F26" },
  { id: 2, name: "CSS", color: "#1572B6" },
  { id: 3, name: "JavaScript", color: "#F7DF1E" },
  { id: 4, name: "React", color: "#61DAFB" },
  { id: 5, name: "Astro", color: "#BC0230" },
  { id: 6, name: "Tailwind", color: "#38B2AC" },
  { id: 7, name: "Figma", color: "#F24E1E" },
  { id: 8, name: "Git", color: "#F05032" },
];

function DockIcon({ mouseX, color, name }) {
  let ref = useRef(null);

  let distance = useTransform(mouseX, (val) => {
    let bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  // The "Pop" magic: Width scales based on mouse distance
  let widthSync = useTransform(distance, [-150, 0, 150], [40, 80, 40]);
  let width = useSpring(widthSync, { mass: 0.1, stiffness: 150, damping: 12 });

  return (
    <motion.div
      ref={ref}
      style={{ width }}
      className="aspect-square rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center relative group cursor-pointer shadow-sm hover:shadow-md transition-shadow"
    >
      {/* Icon Circle */}
      <div
        className="w-1/2 h-1/2 rounded-full"
        style={{ backgroundColor: color }}
      />

      {/* Tooltip */}
      <span className="absolute -top-10 scale-0 group-hover:scale-100 transition-transform bg-black text-white text-[10px] py-1 px-2 rounded font-medium pointer-events-none">
        {name}
      </span>
    </motion.div>
  );
}

export default function StackDock() {
  let mouseX = useMotionValue(Infinity);

  return (
    <div
      onMouseMove={(e) => mouseX.set(e.pageX)}
      onMouseLeave={() => mouseX.set(Infinity)}
      className="mx-auto flex h-24 items-end gap-4 px-4 pb-3"
    >
      {tools.map((tool) => (
        <DockIcon key={tool.id} mouseX={mouseX} {...tool} />
      ))}
    </div>
  );
}
