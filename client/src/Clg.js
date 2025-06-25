import logo from './logo.svg';
import './App.css';
import {Link,Route,Routes,BroserRouter}from 'react-router-dom'
import Header from './Header';
import Menu from './Menu';
import Work from './Work';
import Chart from './Chart';


function Clg() {
  let result = [10, 20, 30, 40, 50];
  let records = [
    ["Raju", 111, "WGL"],
    ["Suresh", 122, "KNR"]
  ];

  return (
    <div>
      <Header/>
      <div>
        <Menu />
        <table border='1'>
          <thead>
            <tr>
              <th>Name</th>
              <th>Code</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {records.map((x) => (
              <tr>
                <td>{x[0]}</td>
                <td>{x[1]}</td>
                <td>{x[2]}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <Work />
      <Chart />
    </div>
    
  );
}

export default Clg;
