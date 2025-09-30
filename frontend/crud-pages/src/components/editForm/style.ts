import type { CSSProperties } from "react";

export const container: CSSProperties = {
    display: "flex",
    justifyContent: "center",
    marginTop: "5%",
};

export const form: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "15px",
    width: "300px",
    padding: "20px",
    border: "1px solid #ccc",
    borderRadius: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.1)",
};

export const formGroup: CSSProperties = {
    display: "flex",
    flexDirection: "column",
    gap: "5px",
};

export const input: CSSProperties = {
    padding: "8px",
    borderRadius: "6px",
    border: "1px solid #ccc",
};

export const button: CSSProperties = {
    marginTop: "10px",
    padding: "10px",
    borderRadius: "6px",
    backgroundColor: "#06053d",
    color: "white",
    border: "none",
    cursor: "pointer",
};
