import type { CSSProperties } from "react";

export const sidebarStyle: CSSProperties = {
    width: "200px",
    height: "100vh",
    backgroundColor: "#02002eff",
    color: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "0",
    margin: "0",
    fontFamily: "Roboto, sans-serif",
};

export const sidebarItemStyle: CSSProperties = {
    width: "100%",
    padding: "15px 20px",
    cursor: "pointer",
    transition: "all 0.2s ease",
    textAlign: "center",
    boxSizing: "border-box",
    fontSize: "14px",
    fontWeight: "normal",
};

export const sidebarItemHoverStyle: CSSProperties = {
    backgroundColor: "#1c1c44",
};

export const sidebarItemActiveStyle: CSSProperties = {
    backgroundColor: "#06053d",
    fontWeight: "bold",
};

export const welhomeTitleStyle: CSSProperties = {
    fontSize: "24px",
    fontWeight: "bold",
    margin: "20px",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
};

export const welhomeSubtitleStyle: CSSProperties = {
    fontSize: "14px",
    fontWeight: "bold",
    marginBottom: "20px",
    textAlign: "center",
    fontFamily: "Roboto, sans-serif",
};
