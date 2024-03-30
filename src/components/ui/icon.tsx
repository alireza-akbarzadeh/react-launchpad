import { icons, LucideProps } from "lucide-react";

interface IconProps extends Omit<LucideProps, "ref"> {
  name: keyof typeof icons;
}
const Icon = ({ name, color, size }: IconProps) => {
  const LucideIcon = icons[name];

  return <LucideIcon color={color} size={size} />;
};

export default Icon;
