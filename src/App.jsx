import SolarSystem from "./sso/SSO";
import headerImage from "./assets/kl.gif";
// -------------------

// --- Code responsible for the random geenration
const reactDescription = [
  "Essential",
  "Vital",
  "Basic",
  "Indispensable",
  "Necessary",
  "Key",
  "Central",
  "Significant",
  "Important",
  "Critical",
  "Primary",
  "Main",
  "Pivotal",
  "Foundational",
  "Underlying",
  "Underpinning",
  "Undergirding",
  "Underlying",
  "Underpinning",
  "Underpin",
];
function getRandomInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

// Header Function
function Header() {
  const description = reactDescription[getRandomInt(19)];

  return (
    <header>
      <img src={headerImage} alt="Kissing lips GIF" />
      <h1>{description} Essentials</h1>
      <p>
        {description}👄 panty concepts you will need for almost any app you are
        going to build!
      </p>
    </header>
  );
}

function CoreConcept() {
  return (
    <li>
      <img src="" alt="" />
      <h3>TITLE</h3>
      <p>DESCRIPTION</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Core Concepts</h2>
          <ul>
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
            <CoreConcept />
          </ul>
        </section>
      </main>
      <div id="SolarSystem">
        <SolarSystem />
      </div>
    </div>
  );
}

export default App;
