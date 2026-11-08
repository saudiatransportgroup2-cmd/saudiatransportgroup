import { Plane, Landmark, MapPinned, UserRound, CalendarDays, Route, Bus, Users } from "lucide-react";
import type { ServiceIcon } from "@/data/services";

const map = {
  plane: Plane,
  kaaba: Landmark,
  map: MapPinned,
  user: UserRound,
  calendar: CalendarDays,
  bus: Bus,
  users: Users,
  route: Route,
} as const;

export function ServiceGlyph({ name, className = "size-6" }: { name: ServiceIcon; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} aria-hidden strokeWidth={1.6} />;
}
