import React, { useState } from "react";
import * as S from "./styles"

export default function AddForm() {
    const [form, setForm] = useState({ title: "", address: "", status: "active" });

    function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) {
        const { name, value } = e.target;
        setForm(prev => ({ ...prev, [name]: value }));
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        const { title, address, status } = form;
        if (!title || !address) {
            alert("Informe título e endereço do imóvel!");
            return;
        }
        try {
            const res = await fetch(`http://localhost:3000/properties`, {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ title, address, status }),
            });
            if (!res.ok) {
                const text = await res.text();
                throw new Error(`Erro ao criar imóvel: ${res.status} - ${text}`);
            }
            const data = await res.json();
            console.log("Imóvel criado:", data);
            alert("Imóvel criado com sucesso!");
            setForm({ title: "", address: "", status: "active" });
        } catch (err) {
            console.error(err);
            alert("Erro ao criar imóvel.");
        }
    }

    return (
        <>
            <h1 style={S.title}>Adicione um imóvel</h1>
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

                    <button type="submit" style={S.button}>Criar Imóvel</button>
                </form>
            </div>
        </>
    );
}
