import React, {useState} from 'react'

export default function TextForm(props) {
  const handleUpClick =() =>{
    console.log("Upper case button was clicked" + text);
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Converted to Upper case", "success");
  }
  const handleDownClick = ()=>{
    console.log("lower case button was clicked"+ text);
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Converted to Lower case", "success");
  }
  const handleOnChange =(event) =>{
    console.log("On change ");
    setText(event.target.value);
  }
  const handleOffClick = (event) =>{
    console.log("elements are removed");
    setText("");
    props.showAlert("elements are removed", "success");

  }
const handleTitleClick = ()=>{
  console.log("")
  // let newText = text.charAt(0).toUpperCase() + text.substring(1, text.split("").length).toLowerCase();
  // setText(newText)
  let newText = text
  .split(" ")
  .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
  .join(" ");
  setText(newText);
  props.showAlert("Converted to Title case", "success");
}
const handleCopy = ()=>{
  var text= document.getElementById("myBox");
  text.select();
  navigator.clipboard.writeText(text.value);
  props.showAlert("Text copied sucessfully", "success");

}

const handleSpace = ()=>{
  let newText = text.split(/[ ]+/);// if there are more than one space then it will be split and then the join will allow to join the texts handling extra spaces
  setText(newText.join(" "));
  props.showAlert("Converted BY handling spaces", "success");

}
const handleFirstWord = ()=>{
  // var text = document.getElementById("myBox");
  let res = text.split(" ");
  let newText = text.slice(0, res[0].length);
  setText(newText);
  props.showAlert("got the first letter", "success");

};
const handleLineWise = () =>{
  let newText = "";
  let line = text.split(". ");
   for (let i=0; i< line.length; i++){
newText += `Line ${i+1}: ${line[i]}.\n`;
   }
   setText(newText);
   props.showAlert("Converted to Lines ", "success");

}
// const wordformer = () =>{

// console.log(0);
// }
  // var i = 0;
  // var speed = 50;
  // const handleAnalyseClick = (event) =>{
  //   console.log("data is being analyse");
  //   if(i< text.length){
  //      document.getElementById("demo").value += setText(text.charAt(i));
  //     i++;
  //     setTimeout(handleAnalyseClick, speed);
  // }
  // }

const [text, setText] = useState('');
// setText("newText");
  return (
    <>
    
<div className="container" style={{color: props.mode === 'dark'?'white':'#071c36'}}>
  <div className="mb-3">
  <label htmlFor="myBox" className="form-label">{props.heading}</label>
    <textarea className="form-control" id="myBox" value ={text} style={{backgroundColor: props.mode === 'dark'?'grey':'white', color: props.mode === 'dark'?'white':'#071c36'}} onChange={handleOnChange} rows="8"> 
    </textarea>
    {/* <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div> */}
  </div>
  <div className='Button'>
  <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>convert to upper case</button>
  <button className="btn btn-primary mx-2 my-2" onClick={handleDownClick}>convert to lower case</button>
  <button className="btn btn-danger mx-2 my-2" id ="remove" onClick={handleOffClick}>X</button>      
  {/* <button className="btn btn-primary mx-2"onClick={handleAnalyseClick}>Analyse</button>       */}
  <button className="btn btn-primary mx-2 my-2"  onClick={handleTitleClick}>Title case</button>      
  <button className="btn btn-primary mx-2 my-2"  onClick={handleCopy}>Copy text</button>      
  <button className="btn btn-primary mx-2 my-2"  onClick={handleSpace}>remove extra spaces</button>      
  <button className="btn btn-primary mx-2 my-2"  onClick={handleFirstWord}>handle first letter</button>      
  <button className="btn btn-primary mx-2 my-2"  onClick={handleLineWise}>arrange line wise</button>      
  </div>
    </div>
          <div className="container my-2"  style={{color: props.mode === 'dark'?'white':'#071c36'}}>
            <h1>Your text Summary</h1>
            <p>{text.split(" ").length } words, {text.length} characters</p>
            <p>{0.008 *  text.split(" ").length} Minutes read</p>
            <h2>Preview the text</h2>
            <p>{text.length>0?text:"Enter something in the textBox to preview it"}</p>
          </div>
    </>
  )
}
