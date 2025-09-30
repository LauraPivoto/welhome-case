export const appContainerStyle = {
    display: 'flex',
    height: '100vh',
} as const;

export const sidebarStyle = {
    width: '12%',
    height: '100vh',
    backgroundColor: '#02002eff',
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: 0,
    margin: 0,
    AlignContent: 'center',
} as const;

export const sidebarItemStyle = {
    padding: '15px',
    margin: '5px 0',
    cursor: 'pointer',
    transition: 'background-color 0.2s',
} as const;

export const sidebarItemHoverStyle = {
    backgroundColor: '#ffffffff',
    borderRadius: 5,
    margin: '5px 0',
    padding: '15px',
    color: '#000',
    cursor: 'pointer',
} as const;

export const mainContentStyle = {
    flex: 1,
    height: '100%',
    backgroundColor: '#ffffffff',
} as const;

export const sidebarItemActiveStyle = {
    color: '#000',
    backgroundColor: '#ffffff',
    borderRadius: 5,
};
