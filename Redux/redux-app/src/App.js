import logo from './logo.svg';
import './App.css';
import {Route,Routes} from 'react-router-dom'
import ReduxCounter from './components/ReduxCounter';


function App() {
  return (
    <div className="App">
     <Routes>
      <Route path='/redux-counter' element={<ReduxCounter/>}/>
     </Routes>
    </div>
  );
}

export default App;
