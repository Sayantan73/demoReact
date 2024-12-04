// import logo from './logo.svg';
import './App.css';
import Item from './components/Item';
import ItemDate from './components/ItemDate';
import Card from './components/Card';
import Newproduct from './components/Newproduct';

function App() {
  const response = [
    {
      itemName: "Nirma",
      itemDay: "20",
      itemMonth: "june",
      itemYear: "1998"
    },
    {
      itemName: "Nirma2",
      itemDay: "202",
      itemMonth: "june2",
      itemYear: "19982"
    },
    {
      itemName: "Nirma3",
      itemDay: "203",
      itemMonth: "june3",
      itemYear: "19983"
    },
  ]

  function getProductData(productData) {
    console.log("I am inside App.js");
    
    console.log(productData);
    response.push(productData)
    console.log(response)
  }

  return (
    <div>
    <Newproduct getData={getProductData}></Newproduct>
      <Card>

      {response.map((item)=> {
        return (<div>
            <Item name={item.itemName}> I am your item</Item>
            <ItemDate day={item.itemDay} month={item.itemMonth} year={item.itemYear}></ItemDate>
        </div> )
      })}
        {/* <Item name={response[0].itemName}> I am your first item</Item>
        <ItemDate day={response[0].itemDay} month={response[0].itemMonth} year={response[0].itemYear}></ItemDate>
        <Item name={response[1].itemName}></Item>
        <ItemDate day={response[1].itemDay} month={response[1].itemMonth} year={response[1].itemYear}></ItemDate>
        <Item name={response[2].itemName}></Item>
        <ItemDate day={response[2].itemDay} month={response[2].itemMonth} year={response[2].itemYear}></ItemDate> */}
        <Item name ="Surfexel"></Item>
        <ItemDate day="05" month="july" year="1999"></ItemDate>
        <Item name ="Sunlight"></Item>
        <ItemDate day="25" month="july" year="1995"></ItemDate>
      </Card>
      
      

      <div className="App">
        Hello World
      </div>
    </div>
  );
}

export default App;
