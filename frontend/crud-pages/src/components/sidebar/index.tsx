import { useState } from "react";
import {
    sidebarStyle,
    sidebarItemStyle,
    sidebarItemHoverStyle,
    sidebarItemActiveStyle,
} from "../../styles";
import { welhomeSubtitleStyle, welhomeTitleStyle } from "./style";

function WelhomeName() {
    return (
        <>
            <div style={welhomeTitleStyle}>Welhome</div>
            <div style={welhomeSubtitleStyle}>Aqui você pode:</div>
        </>
    );
}

function Sidebar({ activeIndex, setActiveIndex }: { activeIndex: number; setActiveIndex: (i: number) => void }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    const tabs = ['Consultar imóveis', 'Atualizar seu imóvel', 'Adicionar um imóvel', 'Deletar um imóvel'];

    return (
        <div style={sidebarStyle}>
            <WelhomeName />
            {tabs.map((item, index) => (
                <div
                    key={index}
                    style={{
                        ...sidebarItemStyle,
                        ...(hoveredIndex === index ? sidebarItemHoverStyle : {}),
                        ...(activeIndex === index ? sidebarItemActiveStyle : {}),
                    }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    onClick={() => setActiveIndex(index)}
                >
                    {item}
                </div>
            ))}
        </div>
    );
}

export default Sidebar;
