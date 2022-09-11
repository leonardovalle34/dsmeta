import NotificationButton from "./components/notificationButton";
import Header from "./components/header";
import SalesCard from "./components/salescard";
import {ToastContainer} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <>
      <ToastContainer/>
      <Header/>
      <main>
        <section className="sales">
          <div className="dsmeta-container">
              <SalesCard/>
          </div>
        </section>
      </main>
    </>
  )
}

export default App
