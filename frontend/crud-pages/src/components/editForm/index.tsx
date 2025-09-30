import React, { useState } from "react";
import * as S from "./style";

export default function UpdateForm() {
    const [form, setForm] = useState({
        id: "",
        title: "",
        address: "",
        status: "active",
    });

    function handleChange(
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
    ) {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();

        const { id, title, address, status } = form;

        if (!id) {
            alert("Informe o ID do imóvel!");
            return;
        }

        const payload: Record<string, string> = {};
        if (title.trim() !== "") payload.title = title;
        if (address.trim() !== "") payload.address = address;
        if (status.trim() !== "") payload.status = status;

        if (Object.keys(payload).length === 0) {
            alert("Nenhum campo para atualizar!");
            return;
        }

        try {
            const res = await fetch(`http://localhost:3000/properties/${id}`, {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(payload),
            });

            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Erro ao salvar: ${res.status} - ${text}`);
            }

            const data = await res.json();
            console.log("Imóvel atualizado:", data.data);
            alert("Imóvel atualizado com sucesso!");
        } catch (err) {
            console.error(err);
            alert("Erro ao atualizar imóvel.");
        }
    }

    return (
        <div style={S.container}>
            <form onSubmit={handleSubmit} style={S.form}>
                <div style={S.formGroup}>
                    <label>Título</label>
                    <input type="text" name="title" value={form.title} onChange={handleChange} style={S.input} />
                </div>

                <div style={S.formGroup}>
                    <label>Endereço</label>
                    <input type="text" name="address" value={form.address} onChange={handleChange} style={S.input} />
                </div>

                <div style={S.formGroup}>
                    <label>Status</label>
                    <select name="status" value={form.status} onChange={handleChange} style={S.input}>
                        <option value="active">Ativo</option>
                        <option value="inactive">Inativo</option>
                    </select>
                </div>

                <div style={S.formGroup}>
                    <label>ID do imóvel</label>
                    <input type="text" name="id" value={form.id} onChange={handleChange} style={S.input} />
                </div>

                <button type="submit" style={S.button}>Salvar Alterações</button>
            </form>
        </div>
    );
}
