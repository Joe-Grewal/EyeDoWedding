import Header from './components/header';
import Bridegroom from './components/bridegroom';
import Sidebar from './components/sidebar';

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
      </div>
    </>
  );
}

export default App;
