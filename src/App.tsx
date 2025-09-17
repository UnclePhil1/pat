import "./App.css";
import Footer from "./components/footer";
import { FormWaitList } from "./components/form";
import Founders from "./components/founders";
import Header from "./components/header";
import HowItWorks from "./components/howItWorks";
import Navbar from "./components/navbar";
import Problem from "./components/problem";
import Setup from "./components/setUp";
import Solution from "./components/solution";
import Waitlist from "./components/waitlist";

function App() {
  return (
    <>
      <div className="p-6">
        <Navbar />
  <Header />
        <section id="problem"><Problem /></section>
        <section id="solution"><Solution /></section>
        <section id="howitworks"><HowItWorks /></section>
        <section id="setup"><Setup /></section>
        <section id="founders"><Founders /></section>
        <section id="waitlist"><Waitlist /></section>
        <section id="formwaitlist"><FormWaitList /></section>
      </div>
      <Footer />
    </>
  );
}

export default App;
