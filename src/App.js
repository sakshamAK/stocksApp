import './App.css';
import { Fragment, useState, useEffect } from 'react'


function App() {
  const [bgSrc, setBgSrc] = useState(`#EEF2FF`);
  const [imgSrc, setImgSrc] = useState("/images/default.svg");
  const [myVal, setMyVal] = useState('');
  const [Num, setNum] = useState('');
  const [currVal, setCurrVal] = useState('');
  const [res, setRes] = useState('');

  useEffect(() => {
    document.body.style.background = bgSrc;//#EEF2FF   `url("${bgSrc}"`
  }, [bgSrc]
  )
  let val = 0, number = 0, curVal = 0, Pnum, Pper, Lnum, Lper;
  const onchange = (e, id) => {
      if(id === 'Myprice') setMyVal(e);
      if(id === 'number') setNum(e);
      if(id === 'CurrVal') setCurrVal(e);
  }
  const onSubmit = (e) => {
    e.preventDefault();
    val = parseInt(myVal);
    number = parseInt(Num);
    curVal = parseInt(currVal);
    if(!isNaN(val) && !isNaN(number) && !isNaN(curVal)) {
      val = parseInt(myVal);
      number = parseInt(Num);
      curVal = parseInt(currVal);
    } else setRes("Please enter values greater than 0");
    if(curVal > val) {
      Pnum = (curVal - val) * number;
      Pper = (((curVal - val) * 100) / curVal).toFixed(2);
      setRes(`Yay! Your total profit is ₹${Pnum}. You gained profit of ${Pper}%`);
      setImgSrc("/images/rise.svg");
      (Pper > 50) ? setBgSrc(`url("https://media.giphy.com/media/KiGMzfSIrNf0s/giphy.gif"`) : setBgSrc(`#EEF2FF`);
    } else {
      Lnum = (val - curVal) * number;
      Lper = (((val - curVal) * 100) / val).toFixed(2);
      setRes(`You lost ₹${Lnum}. Your loss is about ${Lper}%`);
      setImgSrc("/images/drops.svg");
      (Lper > 50) ? setBgSrc(`url("https://media.giphy.com/media/lSzQjkthGS1gc/giphy.gif"`) : setBgSrc(`#EEF2FF`);
    }
  }

  return (
    <Fragment>
      <header>
          <span>Created By <a href = "https://sakshamak.netlify.app/">Saksham</a></span>
        <div>
          <a href = "https://github.com/sakshamAK"><img src = "\images\github.svg" alt = "github"/></a>
          <a href = "https://twitter.com/saksham_ka"><img src = "./images/twitter.svg" alt = "twitter"/></a>
          <a href = "https://www.linkedin.com/in/saksham-ak-55b9131b3/"><img src = "./images/linkedIn.svg" alt = "linkedIn"/></a>
          <a href = "https://thefearofblogs.medium.com/"><img src = "./images/medium.svg" alt = "medium"/></a>
        </div>
      </header>
      <div className = "container">
        <div>
          <form onSubmit = { (e) => onSubmit(e) }>
            <h1 className = "head">Check Profit/Loss on your Stocks</h1>
            <h3>Purchase Price</h3>
            <input type = "number" id = "myPrice" className = "numFields" onChange = { (e) => onchange(e.target.value, 'Myprice') }/>
            <h3>Stocks Amount</h3>
            <input type = "number" id = "stockNumber" className = "numFields" onChange = { (e) => onchange(e.target.value, 'number') }/>
            <h3>Current Rate</h3>
            <input type = "number" id = "currentValue" className = "numFields" onChange = { (e) => onchange(e.target.value, 'CurrVal') }/>
            <input type = "submit" style = {{display: 'none'}} onSubmit = { (e) => onSubmit(e) }/>
            <h2>{res}</h2>
          </form>
        </div>
        <img src = {imgSrc} alt = "stocks" />
      </div>
    </Fragment>
  );
}

export default App;
