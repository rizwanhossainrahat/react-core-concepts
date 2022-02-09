import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks=['manna','salman','amir khan','prabas']
  const products=[
    {name:"adobe",price:'$13.50'},
    {name:"photoshop",price:'$12.00'},
    {name:"reader",price:'$5.21'}
  ]
  return (
    <div className="App">
      <header className="App-header">
        <Counter></Counter>
      <ul>
       {
         nayoks.map(nayok=><li>{nayok}</li>)
       
       }
       {
         products.map(product=><li>{product.name}</li>)
       }
     </ul>
    
       {/* {
         products.map(pd=><Product>product={pd}</Product>)
       } */}
      
        <p>this my first react paragrap</p>
      
        <Person name="bayzid" year="2020"></Person>
        <Person name="rahat" year="2022"></Person>
       <Users></Users>
 
    
      </header>
    </div>
  );
}

function Users(){
  const [users,setUsers]=useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data))
  },[])
  return(
    <div>
      <h3>dynamic user:{users.length}</h3>
      <ul>
        {
          users.map(user=><li>{user.name}</li>)
        }
      </ul>
    </div>
  )
}

function Counter(){
 const [count,setCount]=useState(10)
 const hanadleIncrease=()=>setCount(count+1);
 return(
   <div>
     <h1>count:{count}</h1>
     <button onClick={()=>setCount(count-1)} >Decrease</button>
     <button onClick={hanadleIncrease}>inCrease</button>
   </div>
 )
}

function Product(props){
  const productStyle={
    border:'5px solid red',
    borderRadius:'5px',
    backgroundColor:'gray',
    color:'black'
  }
  var {name,price}=props.product
  return(
    <div style={productStyle}>
      <h2>{name}</h2>
      <h4>{price}</h4>
      <button>buy now</button>
    </div>
  )
}


function Person(props){
  return(
    <div style={{border:'2px solid cyan',margin:'10px',color:'red'}} >
    <h1>name:{props.name}</h1>
    <h2>he is a web developer year:{props.year}</h2>
    </div>
  )
}

export default App;
