import SolarSystem from "./sso/SSO";
// -------------------

// Header Function
function Header() {
  return (
    <header>
      <img src="src/assets/react-core-concepts.png" alt="Stylized atom" />
      <h1>Panty Essentials</h1>
      <p>
        Fundamental panty concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <SolarSystem />
    </div>
  );
}

export default App;
