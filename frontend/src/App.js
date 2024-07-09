import './App.css';
import {BrowserRouter, Routes, Route} from "react-router-dom";
// import { fromJSON } from 'postcss';
import Home from './Home/Home';
import CreateQuiz from './CreateQuiz/CreateQuiz';
import Quizzes from './TakeQuiz/Quizzes';
import ShowQuiz from './TakeQuiz/ShowQuiz';

function App() {
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/createQuiz' element={<CreateQuiz/>}/>
      {/* <Route path='/allQuizzes' element={<Quizzes/>}/> */}
      <Route path='/takeQuiz' element={<Quizzes/>}/>
      <Route path='/takeQuiz/showQuiz/:id' element={<ShowQuiz/>}/>

    </Routes>
    </BrowserRouter>
  )
}

export default App;
