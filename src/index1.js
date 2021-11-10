import React from 'react';
import ReactDOM from 'react-dom';
import CounterApp from './componenetes/CounterApp';
import './index.css';
//import App from './App';
import reportWebVitals from './reportWebVitals';

// const clase = {
//   nombre :'Juan',
//   apellido :'Bobadilla'
// }

// const elemento = <h1>hola {clase.nombre} {clase.apellido}</h1>

// const menu = <nav>
//   <a href=''>ONE</a><a href=''>TWO</a><a href=''>THREE</a><a href=''>FOUR</a>
// </nav>;

// const header = <div>
//   <div>
//     {menu}
//   </div>
//   <div>
//     {elemento}
//   </div>
// </div>

// class Clock extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {date: new Date()};
//   }

// componentDidMount(){
//   this.timerID = setInterval(
//     () => this.tick(),
//     1000
//   );
// }
// componentWillUnmount(){
//   clearInterval(this.timerID);
// }

// tick() {
//   this.setState({
//     date: new Date()
//   });
// }

//   render(){
//   return (
//     <div>
//       <h1>Hello, world!</h1>
//       <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
//     </div>
//   );
// }
// }




ReactDOM.render(
  <React.StrictMode>
  <CounterApp value={120}/>

  </React.StrictMode>,
  document.getElementById('root')
);
  
 

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();