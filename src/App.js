import "./App.css";
import ExpenseApp from "./components/ExpenseApp";
import Switcher from "./components/Switcher";
import useDarkMode from "./hooks/useDarkMode";

function App() {
  const [theme, toggleTheme] = useDarkMode();
  return (
    <div className="App" data-theme={theme}>
      <header>
        <h2>Expense tracker</h2>
        <Switcher toggleTheme={toggleTheme} />
      </header>
      <ExpenseApp />
    </div>
  );
}

export default App;
