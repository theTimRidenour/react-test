import React from 'react';
import ReactDOM from 'react-dom';

function VehicleItem(props) {
  return (

    <ul>
        <table>
            <tr>
                <th>Year</th>
                <th>Model</th>
                <th>Price</th>
                <th>Buy</th>
            </tr>
            <tr>
                <td>{props.year}</td>
                <td>{props.model}</td>
                <td>${props.price}</td>
                <td><button>Buy Now</button></td>
            </tr>
        </table>
    </ul>

  )

}

function AppHeader(props) {
  return (

    <div>
      <h2>Welcome to React Transportation</h2>
      <p>The best place to buy vehicles online</p>
      <h2>Choose Options</h2>
      <p>New Only <input type="checkbox" id="coding" name="interest" value="coding" checked/></p>
      <p>
        Select type &nbsp;
        <select>
          <option value = {props.catItems[0]}>{props.catItems[0]}</option>
          <option value = {props.catItems[1]}>{props.catItems[1]}</option>
          <option value = {props.catItems[2]}>{props.catItems[2]}</option>
        </select>
      </p>
    </div>

  )
}

function CategoryHeader(props) {
  return (

    <div>
      <h2>{props.header}</h2>
    </div>

  )
}

function VehicleApp(props) {
  return (

    <div>
      <AppHeader catItems = {["Cars", "Trucks", "Convertibles"]} />
      <CategoryHeader header = "Cars"/>
        <VehicleItem year = "2013" model = "A" price = "32000"/>
        <VehicleItem year = "2011" model = "B" price = "4400" />
        <VehicleItem year = "2016" model = "B" price = "15500" />
      <CategoryHeader header = "Trucks"/>
        <VehicleItem year = "2014" model = "D" price = "18000" />
        <VehicleItem year = "2013" model = "E" price = "5200" />
      <CategoryHeader header = "Convertibles"/>
        <VehicleItem year = "2009" model = "F" price = "2000" />
        <VehicleItem year = "2010" model = "G" price = "6000" />
        <VehicleItem year = "2012" model = "H" price = "12500" />
        <VehicleItem year = "2017" model = "M" price = "50000" />
    </div>

  )
}

ReactDOM.render(
  <VehicleApp/>,
  document.getElementById("root")
)
