import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

export const alt = `${site.name} — New Jersey Real Estate Agent`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #faf6f0 0%, #f1e9dd 60%, #e9c9b4 100%)",
          color: "#1c1917",
          fontFamily: "Georgia, serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 24, letterSpacing: 6, textTransform: "uppercase", color: "#b5523b" }}>
          New Jersey Real Estate · {site.brokerage}
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 96, lineHeight: 1 }}>{site.name}</div>
          <div style={{ marginTop: 24, fontSize: 40, color: "#6b625a" }}>Buy · Sell · Rent — with someone in your corner.</div>
        </div>
        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 28, color: "#1c1917" }}>
          <span>{site.phone}</span>
          <span>Cranford, NJ</span>
        </div>
      </div>
    ),
    size
  );
}
