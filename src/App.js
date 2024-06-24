
// import {compose,pipe} from 'lodash/fp';
// import Home from './Home';
// import Create from './Create';
// import Update from './Update';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import {Provider} from 'react-redux';
import {store} from './Redux2/store';


import Home from '../src/Redux2/Home'
function App() {
  


  
  return (
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
      
      <Route path="/home" element={<Home/>}/>
      </Routes>
      </BrowserRouter> */}
      <Provider store={store}>
      <Home/>
      </Provider>
    </div>
  );
}

export default App;
