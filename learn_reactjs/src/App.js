import logo from './logo.svg';
import TodoFeature from './features/Todo';
import AlbumFeature from './features/Album';
import ColorBox from './components/ColorBox';
import Counter from './components/Counter';

function App() {
  return (
    <div className="App">
      {/*<AlbumFeature/>
         <ColorBox />
         <Counter/>
      */}
         <TodoFeature />
      
    </div>
  );
}

export default App;
