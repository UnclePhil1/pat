import "./App.css";
// import Footer from "./components/footer";
// import Toaster from "./components/ui/toaster";
// import { FormWaitList } from "./components/form";
// import Founders from "./components/founders";
// import Header from "./components/header";
// import HowItWorks from "./components/howItWorks";
// import Navbar from "./components/navbar";
// import Problem from "./components/problem";
// import Setup from "./components/setUp";
// import Solution from "./components/solution";
// import Waitlist from "./components/waitlist";
import IndexPage from "./pages/IndexPage";
import PatLanding from "./components/PatLanding";

function App() {
  const path = typeof window !== 'undefined' ? window.location.pathname : '/';

  if (path === '/pitch') {
    return <IndexPage />;
  }

  return (
    <>
      <PatLanding />
    </>
  );
}

export default App;
