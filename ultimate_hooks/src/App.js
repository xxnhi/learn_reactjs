import logo from './logo.svg';
import Navbar from './components/Navbar';
import Todos from './components/Todo';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TodoContextProvider from './contexts/TodoContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <Navbar />
        <TodoContextProvider>
          <Todos />
        </TodoContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>     
    </div>
  );
}

export default App;
