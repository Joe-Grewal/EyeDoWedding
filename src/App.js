import Header from './components/header';
import Bridegroom from './components/bridegroom';
import Sidebar from './components/sidebar';
import Countdown from './components/countdown';
import Story from './components/story';
import Seeyou from './components/seeyou';
import Organization from './components/organization';

function App() {
  return (
    <>
      <Sidebar />
      <div id="oliven-main">
        <Header />
        <Bridegroom />
        <Countdown />
        <Story />
        <Seeyou />
        <Organization />
      </div>
    </>
  );
}

export default App;
