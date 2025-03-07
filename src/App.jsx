import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { GiftProvider } from "./context/GiftContext";
import Navbar from './components/Navbar';
import NotFoundPage from './pages/NotFoundPage';
import HomePage from './pages/HomePage'
import ListPage from "./pages/ListPage";
import AddPresent from "./pages/AddPresent";
import DetailsPage from "./pages/DetailsPage";

function App() {
  return (
    <Router>
      <GiftProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/listPage" element={<ListPage />} />
          <Route path="/addPresent" element={<AddPresent />} />
          <Route path="/details/:id" element={<DetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </GiftProvider>
    </Router>
  )
}

export default App;