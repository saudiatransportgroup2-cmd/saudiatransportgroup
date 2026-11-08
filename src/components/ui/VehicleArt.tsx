import type { VehicleKind } from "@/data/fleet";

/**
 * Neutral line-art vehicle illustrations used until real photography is supplied.
 * Replace by setting `image` on a vehicle in data/fleet.ts.
 */
export function VehicleArt({ kind, className = "" }: { kind: VehicleKind; className?: string }) {
  const stroke = "currentColor";
  const common = { fill: "none", stroke, strokeWidth: 3, strokeLinecap: "round", strokeLinejoin: "round" } as const;
  const wheel = (cx: number) => (
    <g key={cx}>
      <circle cx={cx} cy={118} r={14} fill="#0a1a33" stroke={stroke} strokeWidth={3} />
      <circle cx={cx} cy={118} r={5} fill={stroke} />
    </g>
  );
  let body: React.ReactNode;
  switch (kind) {
    case "sedan":
    case "luxury":
      body = (
        <>
          <path {...common} d="M20 110 L24 90 Q28 80 44 76 L74 52 Q82 46 96 46 H150 Q164 46 172 54 L196 76 Q214 80 222 92 L228 110 Z" />
          <path {...common} d="M82 56 H118 V76 H62 Z M126 56 H152 L176 76 H126 Z" />
        </>
      );
      break;
    case "suv":
      body = (
        <>
          <path {...common} d="M16 110 L20 84 Q24 74 40 72 L62 46 H190 Q204 46 212 58 L226 76 Q236 82 238 94 L240 110 Z" />
          <path {...common} d="M70 56 H120 V74 H54 Z M128 56 H190 L206 74 H128 Z" />
        </>
      );
      break;
    case "van":
      body = (
        <>
          <path {...common} d="M14 110 V58 Q14 44 28 44 H180 Q192 44 200 56 L236 84 Q244 90 244 100 V110 Z" />
          <path {...common} d="M28 56 H80 V76 H28 Z M92 56 H144 V76 H92 Z M156 56 H182 L210 76 H156 Z" />
        </>
      );
      break;
    case "minibus":
      body = (
        <>
          <path {...common} d="M10 110 V50 Q10 38 24 38 H196 Q206 38 212 48 L244 84 V110 Z" />
          <path {...common} d="M22 50 H66 V74 H22 Z M74 50 H118 V74 H74 Z M126 50 H170 V74 H126 Z M178 50 H196 L220 74 H178 Z" />
        </>
      );
      break;
    case "bus":
      body = (
        <>
          <path {...common} d="M6 110 V36 Q6 26 18 26 H232 Q250 26 250 44 V110 Z" />
          <path {...common} d="M16 40 H58 V70 H16 Z M66 40 H108 V70 H66 Z M116 40 H158 V70 H116 Z M166 40 H208 V70 H166 Z M216 40 H238 V70 H216 Z" />
        </>
      );
      break;
  }
  const wheels = kind === "bus" || kind === "minibus" ? [52, 200] : [64, 190];
  return (
    <svg viewBox="0 0 256 140" className={className} role="img" aria-hidden="true">
      {body}
      {wheels.map(wheel)}
      <path d="M0 133 H256" stroke={stroke} strokeOpacity={0.25} strokeWidth={2} strokeDasharray="4 8" />
    </svg>
  );
}
