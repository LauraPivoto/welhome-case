import React, { useState } from "react";
import * as S from "./style";

export default function DeleteForm() {
    const [id, setId] = useState("");

    async function handleDelete(e: React.FormEvent) {
        e.preventDefault();

        if (!id) {
            alert("Informe o ID do imóvel!");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/properties/${id}`, {
                method: "DELETE",
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Erro ao deletar imóvel: ${res.status} - ${text}`);
            }

            alert(`Imóvel com ID ${id} deletado com sucesso!`);
            setId(""); // limpa o campo
        } catch (err) {
            console.error(err);
            alert("Erro ao deletar imóvel.");
        }
    }

    return (
        <>
            <h1 style={S.title}>Deletar um imóvel</h1>
            <div style={S.container}>
                <form onSubmit={handleDelete} style={S.form}>
                    <div style={S.formGroup}>
                        <label>ID do Imóvel</label>
                        <input
                            type="text"
                            name="id"
                            value={id}
                            onChange={(e) => setId(e.target.value)}
                            style={S.input}
                        />
                    </div>

                    <button type="submit" style={S.button}>Deletar Imóvel</button>
                </form>
            </div>
        </>
    );
}
