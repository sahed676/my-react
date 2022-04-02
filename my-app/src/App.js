import React from "react";
import Card from "./components/Card";
import Data from "./Data.json";

let items = [];

items =  Data.map((item, index) => <Card key = {index} todoTitle = {item.Titlle} todoDesc = {item.Description} />)

function App () {
return     <div>
<h1 className="heading-style" >My Name is Sahed</h1>
{items};
</div>

}


export default App;
