import Header from './components/header';
import Bridegroom from './components/bridegroom';
import Sidebar from './components/sidebar';
import Countdown from './components/countdown';

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
      </div>
    </>
  );
}

export default App;
