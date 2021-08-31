import React, {useState, useEffect} from "react"
/*
export default function Home() {

  const [name, setName] = useState('');
const [age, setAge] =  useState('');
const [data, setData] = useState([]);
   const handleSubmit=(e)=>{
         e.preventDefault();
         const values = {name, age};
         console.log(values);
       try{
        fetch("/.netlify/functions/hello", {
          method: "post",
          body: JSON.stringify(values)
        })
      .then(response => response.json())
      .then(data => {
        setData(data);
        console.log("Data: " + JSON.stringify(data));  

      });
      //console.log(result)
    }catch(err){
      console.log(err);
    }
   }
  return (
    <div className="App">
            
            <form onSubmit={handleSubmit}>
              <input type='text'onChange={(e)=>setName(e.target.value)} value={name}/>
              <input value={age}type='text' onChange={(e)=>setAge(e.target.value)}/>
              <input type='submit' value='submit'/>
            </form>
    </div>
  );
  return <div>Hello world!</div>
}*/
export default function Home() {
  const [mydata, setData] = useState("Default Hello");

  useEffect(() => {
    //console.log("useEffect Called");
    (async()=>{
    const response = await fetch(`/.netlify/functions/hello?name=from Serverless Function`)
     const data =  response.json().then((data)=>setData(data));
           //setData(data)
    })();
  }, []);
      console.log(mydata)

  return <div>
    <div>Hello world with Gatsby from Netlify!</div>
    <div>{mydata.message}</div>
    </div>
}
