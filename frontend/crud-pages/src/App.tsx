import { useEffect, useState } from 'react';
import { appContainerStyle, mainContentStyle } from './styles';
import TableProperties from './components/table';
import Sidebar from './components/sidebar';
import UpdateForm from './components/editForm';
import AddForm from './components/addForm';
import DeleteForm from './components/deleteForm';

const globalFontStyle = `
  body {
    font-family: 'Roboto', sans-serif;
  }
`;
document.head.insertAdjacentHTML('beforeend', `<style>${globalFontStyle}</style>`);

function MainContent({ activeIndex }: { activeIndex: number }) {
  function renderContent() {
    switch (activeIndex) {
      case 0:
        return <div><ReadProperties /></div>;
      case 1:
        return <div><UpdateProperties /></div>;
      case 2:
        return <div><AddProperties /></div>;
      case 3:
        return <div><DeleteProperties /></div>;
    }
  }

  return <div style={mainContentStyle}>{renderContent()}</div>;
}

function ReadProperties() {
  const [properties, setProperties] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/properties")
      .then((res) => res.json())
      .then((data) => setProperties(data.data));
  }, []);

  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Seus imóveis</h1>
      <TableProperties properties={properties} />
    </>
  );
}

function UpdateProperties() {
  return (
    <>
      <h1 style={{ textAlign: 'center' }}>Atualize um imóvel</h1>
      <UpdateForm />
      :
    </>
  );
}

function AddProperties() {
  return (
    <>
      <AddForm />
    </>
  );
}

function DeleteProperties() {
  return (
    <><DeleteForm />
    </>
  );
}

function App() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div style={appContainerStyle}>
      <Sidebar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      <MainContent activeIndex={activeIndex} />
    </div>
  );
}

export default App;
