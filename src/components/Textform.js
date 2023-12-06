import React from 'react';
import '../style/Textform.css';

export default function Textform(props) {

  let word=props.value.split(/\s+/);
  let x=props.value.split(/\s+/).join(' ');

 
  function upper(){
    props.show(props.value.toUpperCase());
    {
      props.value==='' ? props.set() : props.dis('Text has been converted to Upper Case');
    }
    
  }

  function lower(){
    props.show(props.value.toLowerCase())
    {
      props.value==='' ? props.set() :  props.dis('Text has been converted to Lower Case')
    }
   

  }

  function clear(){
    props.show('')
    {
      props.value==='' ? props.set() :  props.dis('Text Cleared')
    }
    
  }

  function copy(){
    navigator.clipboard.writeText(props.value)
    {
      props.value==='' ? props.set() :   props.dis('Text Copied')
    }

  }

  function remove(){
    props.show(x);
    {
      props.value==='' ? props.set() :  props.dis('Extra Spaces Removed')
    }
    
   
  }
  return (
    <div className='navbar1' style={props.mode}>
      <div className="form-float">
        <h5>Enter the Text to Analyze Below : </h5><br/>
        <textarea className={props.set1 ?  'form-control t1' : 'form-control t2'}  rows="8" placeholder="Enter Here : " value={props.value} onChange={(e)=>{
          props.show(e.target.value)
        }}/>
        <br/><br/>
        <button type="button" disable={(props.value==='').toString()} className="btn btn-warning mx-3" onClick={()=>upper()}><b>UPPER CASE</b></button>
        <button type="button" disable={(props.value==='').toString()} className="btn btn-warning mx-3" onClick={()=>lower()}><b>LOWER CASE</b></button>
        <button type="button" disable={(props.value==='').toString()} className="btn btn-warning mx-3" onClick={()=>remove()}><b>REMOVE SPACES</b></button>
        <button type="button" disable={(props.value==='').toString()} className="btn btn-warning mx-3" onClick={()=>clear()}><b>CLEAR</b></button>
        <button type="button" disable={(props.value==='').toString()} className="btn btn-warning mx-3" onClick={()=>copy()}><b>COPY</b></button>
      </div>
      <div className='content'>
        <h5>Summary  </h5><br/>
        <h6> Words : {x.length===0 ? 0 : x.endsWith(' ') ? word.length-1 : word.length }</h6>
        <h6> Characters : {word.join('').length}</h6><br/>
        <h5> Preview : </h5>
        {
           props.value.length===0 ? 'Enter something in the above textbox to preview it.' : <h6 className='pre' style={{backgroundColor:"white",color:"black"}}>{props.value}</h6> 
        }
       
      </div>
      
    </div>
  )
}
