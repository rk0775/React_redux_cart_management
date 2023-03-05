import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './components/Header';
import Foods from './components/Foods';
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Error } from './pages/Error';
import { FoodDetails } from './components/FoodDetails';

import { Provider } from 'react-redux';
import { store } from './redux/store';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Provider store={store}>
        <BrowserRouter>
          <Header />
          <Routes>
            <Route exact path='/' element={<Foods />} />
            <Route path='/fooddetails/:id' element={<FoodDetails />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </BrowserRouter>
      </Provider>

    </div>
  )
}

export default App
