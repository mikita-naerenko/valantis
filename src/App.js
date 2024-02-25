import Main from './pages/main';
import MyProvider from './context/provider'
import './App.css';

function App() {
  return (
    <div className="App">
      <MyProvider>
        <Main/>
     </MyProvider>
    </div>
  );
}

export default App;
