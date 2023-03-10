import logo from './logo.svg';
import Navbar from './components/Navbar';
import Todos from './components/Todo';
import ThemeContextProvider from './contexts/ThemeContext';
import ThemeToggle from './components/ThemeToggle';
import TodoContextProvider from './contexts/TodoContext';
import AuthContextProvider from './contexts/AuthContext';

function App() {
  return (
    <div className="App">
      <ThemeContextProvider>
        <AuthContextProvider>
            <Navbar />
            <TodoContextProvider>
              <Todos />
            </TodoContextProvider>
        </AuthContextProvider>
        <ThemeToggle/>
      </ThemeContextProvider>     
    </div>
  );
}

export default App;
