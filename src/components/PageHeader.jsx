import { ArrowLeft } from "lucide-react";
import { Link } from "react-router-dom";

export default function PageHeader({ title, icon: Icon }) {
  return (
    <div className="flex items-center gap-4 mb-6">
      <Link to="/">
        <ArrowLeft />
      </Link>
      <Icon />
      <h1 className="text-2xl font-bold">{title}</h1>
    </div>
  );
}