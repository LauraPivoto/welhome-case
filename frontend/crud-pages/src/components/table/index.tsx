import * as S from "./style";
type StatusEnum = "active" | "inactive";
type Property = { id: number; title: string; address: string; status: StatusEnum; };

function TableProperties({ properties }: { properties: Property[] }) {
    return (
        <div style={S.tableContainer}>
            <table style={S.tableStyle}>
                <thead>
                    <tr>
                        <th style={S.thStyle}>ID</th>
                        <th style={S.thStyle}>Nome</th>
                        <th style={S.thStyle}>Endereço</th>
                        <th style={S.thStyle}>Status</th>
                    </tr>
                </thead>
                <tbody>
                    {properties.map((property) => (
                        <tr key={property.id}>
                            <td style={S.tdStyle}>{property.id}</td>
                            <td style={S.tdStyle}>{property.title}</td>
                            <td style={S.tdStyle}>{property.address}</td>
                            <td style={S.tdStyle}>
                                {property.status === "active" ? (
                                    <span style={S.statusActiveStyle}>● Ativo</span>
                                ) : (
                                    <span style={S.statusInactiveStyle}>● Inativo</span>
                                )}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default TableProperties;
