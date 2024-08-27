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
