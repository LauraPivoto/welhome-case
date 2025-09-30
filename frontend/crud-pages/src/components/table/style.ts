import type { CSSProperties } from "react";

export const tableContainer: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "100%",
    minHeight: "5%",
};

export const tableStyle: CSSProperties = {
    width: "50%",
    borderWidth: "2px",
    borderColor: "#ccc",
    borderStyle: "solid",
    borderRadius: "8px",
    overflow: "hidden",
    background: "#fff",
    borderCollapse: "collapse",
};

export const thStyle: CSSProperties = {
    textAlign: "center",
    padding: "8px",
    borderBottom: "1px solid #ccc",
    background: "#f5f5f5",
};

export const tdStyle: CSSProperties = {
    padding: "8px",
    borderBottom: "1px solid #eee",
    textAlign: "center",
};

export const statusActiveStyle: CSSProperties = {
    color: "green",
    fontWeight: "bold",
};

export const statusInactiveStyle: CSSProperties = {
    color: "red",
    fontWeight: "bold",
};
