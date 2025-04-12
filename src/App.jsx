import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import 'bootstrap/dist/css/bootstrap.css'
import TourForm from "./pages/TourForm"

const App = () => {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<TourForm/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App