import { id } from "@/components/pilgrim/content";
import { PilgrimRoot, pilgrimMetadata, pilgrimViewport } from "@/components/pilgrim/PilgrimRoot";
import "../globals.css";

export const metadata = pilgrimMetadata(id);
export const viewport = pilgrimViewport;

/** Root layout for the Indonesian landing page. */
export default function IndonesianLayout({ children }: { children: React.ReactNode }) {
  return <PilgrimRoot c={id}>{children}</PilgrimRoot>;
}
