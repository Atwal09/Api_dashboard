import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export default function DashboardCard({
  title,
  description,
  icon: Icon,
  to,
  accentColor,
  glowClass,
  index,
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.1 }}
    >
      <Link to={to} className="block group">
        <div className={`glass-card-hover p-6 h-48 ${glowClass}`}>
          <Icon className="w-6 h-6 text-white mb-2" />
          <h3 className="text-lg font-semibold">{title}</h3>
          <p className="text-sm opacity-70">{description}</p>
        </div>
      </Link>
    </motion.div>
  );
}