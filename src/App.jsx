import { Toaster } from "@/components/ui/toaster"
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PageNotFound from './lib/PageNotFound';
// Add page imports here
import Home from './pages/Home';

const repoBasePath = '/Sukoon-Case-Study';
const envBasePath = import.meta.env.BASE_URL || '/';
const routerBase =
  typeof window !== 'undefined' && window.location.pathname.startsWith(repoBasePath)
    ? repoBasePath
    : envBasePath;

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  );
};


function App() {

  return (
    <>
      <Router basename={routerBase}>
        <AppRoutes />
      </Router>
      <Toaster />
    </>
  )
}

export default App