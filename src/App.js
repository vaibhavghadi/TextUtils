import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom'
import Textform from './components/Textform';
import About from './components/About';
import { useState } from 'react';
import Alert from '\./components/Alert';



function App() {
  let [data,setData]=useState('');
  let [alert,setAlert]=useState({
    msg:'',
  })


  let [r1,setR1]=useState(true);
  let [mode,setMode]=useState({
      color: 'black'
  })


  function check(){
    if (r1===false){
      setR1(true);
    }else{
      setR1(false)
    }

    if (r1===true ){
      setMode({
        color: 'white'
      });
      remove();
      document.body.style.backgroundColor="rgb(2 13 45)";
    }
    else {
      setMode({
        color: 'black'
        });
      remove();
      document.body.style.backgroundColor='white';
    }
   
  }

  let [a1,seta1]=useState(false);

  function show(x){
    setData(x);
    seta1(true);
  }

  function display(x){
    setAlert({msg:x})
    setTimeout(()=>{
      setAlert({msg:''})
    },2000);

  }

  function set1(){
    seta1(false);
  }

  function remove(){
    document.body.classList.remove('bg-primary');
    document.body.classList.remove('bg-info');
    document.body.classList.remove('bg-success');
    document.body.classList.remove('bg-danger');

  }

  function back1(x){
    remove();
    document.body.classList.add(x);
  }



  return (
    <div className='app'>
      <Router>
        <Navbar check={check} back1={back1}/>
        <div className='page'>
          <div className='alert1' style={mode}>
          {
            a1 && alert.msg.length>0 ? <Alert dis={alert.msg} mode={mode}/> : null
          }
          </div>
          <Routes>
            <Route path='/' element={<Textform value={data} show={show} dis={display} set={set1} set1={r1} mode={mode}/>}/>
            <Route path='/about' element={<About/>}/>
          </Routes>
        </div>
      </Router>
    </div>

  )
}
    

export default App;
