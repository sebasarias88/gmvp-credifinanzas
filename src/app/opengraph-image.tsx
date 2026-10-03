import { ImageResponse } from "next/og";
import { site } from "@/content/site";

export const alt = `${site.name} — Vuelve a tener vida crediticia`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 72, background: "radial-gradient(circle at 85% 10%, #0b5fc2 0%, #0a1a3f 55%)", color: "#fff" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 700 }}>
          <div style={{ width: 48, height: 48, borderRadius: 14, background: "#E4B53A" }} />
          Credifinanzas
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, fontWeight: 800, lineHeight: 1.02, letterSpacing: -3 }}>
          <span>Llega hasta donde te propongas.</span>
          <span style={{ color: "#E4B53A" }}>Te llevamos más allá.</span>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a9b6d3" }}>Asesoría en CIFIN-TransUnion y DataCrédito-Experian · Armenia, Quindío</div>
      </div>
    ),
    size,
  );
}
