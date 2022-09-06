import NotificationButton from "./components/notificationButton"
import Header from "./components/header"
import SalesCard from "./components/salescard"


function App() {
  return (
    <>
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
