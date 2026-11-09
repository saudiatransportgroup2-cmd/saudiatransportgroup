import { ur } from "@/components/pilgrim/content";
import { PilgrimRoot, pilgrimMetadata, pilgrimViewport } from "@/components/pilgrim/PilgrimRoot";
import "../globals.css";

export const metadata = pilgrimMetadata(ur);
export const viewport = pilgrimViewport;

/** Root layout for the Urdu landing page. */
export default function UrduLayout({ children }: { children: React.ReactNode }) {
  return <PilgrimRoot c={ur}>{children}</PilgrimRoot>;
}
