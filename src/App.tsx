import Login from "./Login"
import MainSection from "./MainSection"
import Navbar from "./Navbar"
import Footer from "./Footer"

const App = () => {
  return (
    <section>
      <Navbar />
      <Login />
      <div>
        <h1>KAmlesh</h1>
      </div> 
      <Footer />
      <MainSection />
    </section>
  )
}
export default App