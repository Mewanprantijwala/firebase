import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import TourForm from "./pages/TourForm"
import Tourlist from "./pages/Tourlist"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TourForm/>}></Route>
          <Route path="/view" element={<Tourlist/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App