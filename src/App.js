import "./styles.css";
import ReactDOM from "react-dom";
import Header from "./header.js";
import Footer from "./Footer.js";
import MainContent from "./Content.js";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}

function Page() {
  return (
    <>
      <Header />
      <MainContent />
      <Footer />
    </>
  );
}

ReactDOM.render(<Page />, document.getElementById("root"));
