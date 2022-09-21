import Header from './components/header';
import Bridegroom from './components/bridegroom';
import Sidebar from './components/sidebar';
import Countdown from './components/countdown';
import Story from './components/story';
import Seeyou from './components/seeyou';
import Organization from './components/organization';
import Gallery from './components/gallery';
import Where from './components/where';
import RSVP from './components/rsvp';
import Footer from './components/footer';

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
        <Gallery />
        <Where />
        <RSVP />
        <Footer />
      </div>
    </>
  );
}

export default App;
