import { ImageResponse } from "next/og";

export const alt = "TEAMZ: Web, App & AI Product Studio";
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
          background:
            "radial-gradient(120% 120% at 18% 12%, #0f231b 0%, #0a0b0d 55%)",
          padding: "80px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
          <div
            style={{
              width: "18px",
              height: "18px",
              borderRadius: "9999px",
              background: "#00DD88",
            }}
          />
          <div
            style={{
              color: "#9aa0a6",
              fontSize: "26px",
              letterSpacing: "6px",
              fontWeight: 600,
            }}
          >
            PRODUCT STUDIO
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: "24px" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: "88px",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-3px",
              display: "flex",
              flexWrap: "wrap",
            }}
          >
            <span>We build digital products that&nbsp;</span>
            <span style={{ color: "#00DD88" }}>scale.</span>
          </div>
          <div
            style={{
              color: "#b9bec4",
              fontSize: "34px",
              lineHeight: 1.35,
              display: "flex",
            }}
          >
            Web apps, mobile apps, product design, and AI automation, end to end.
          </div>
        </div>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          <div
            style={{
              color: "#ffffff",
              fontSize: "44px",
              fontWeight: 700,
              letterSpacing: "-1px",
              display: "flex",
            }}
          >
            team
            <span style={{ color: "#00DD88" }}>-z</span>
          </div>
          <div style={{ color: "#7f868d", fontSize: "28px", display: "flex" }}>
            teamz.ments.app
          </div>
        </div>
      </div>
    ),
    { ...size },
  );
}
