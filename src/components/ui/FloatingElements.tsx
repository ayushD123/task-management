import { motion } from 'framer-motion'

const FloatingElement = ({ delay = 0, duration = 5, x = 0, y = 0, size = 20, color = 'purple' }) => {
  return (
    <motion.div
      className={`absolute rounded-full bg-${color}-500/20 backdrop-blur-sm`}
      style={{
        width: size,
        height: size,
        filter: 'blur(8px)',
      }}
      animate={{
        x: [0, x, 0],
        y: [0, y, 0],
        scale: [1, 1.2, 1],
      }}
      transition={{
        duration: duration,
        repeat: Infinity,
        delay: delay,
        ease: "easeInOut",
      }}
    />
  )
}

export function FloatingElements() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      {/* Small floating elements */}
      <FloatingElement delay={0} duration={4} x={20} y={-30} size={8} color="purple" />
      <FloatingElement delay={0.5} duration={5} x={-25} y={20} size={6} color="blue" />
      <FloatingElement delay={1} duration={6} x={15} y={25} size={10} color="pink" />
      <FloatingElement delay={1.5} duration={4.5} x={-20} y={-15} size={7} color="purple" />
      <FloatingElement delay={2} duration={5.5} x={30} y={10} size={9} color="blue" />
      <FloatingElement delay={2.5} duration={4} x={-15} y={-25} size={8} color="pink" />
      
      {/* Medium floating elements */}
      <FloatingElement delay={0.2} duration={6} x={40} y={-40} size={15} color="purple" />
      <FloatingElement delay={0.7} duration={5} x={-35} y={30} size={12} color="blue" />
      <FloatingElement delay={1.2} duration={7} x={25} y={35} size={18} color="pink" />
      
      {/* Large floating elements */}
      <FloatingElement delay={0.3} duration={8} x={50} y={-50} size={25} color="purple" />
      <FloatingElement delay={0.8} duration={7} x={-45} y={40} size={22} color="blue" />
      <FloatingElement delay={1.3} duration={9} x={35} y={45} size={28} color="pink" />
    </div>
  )
} 