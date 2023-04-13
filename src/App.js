import { useEffect } from 'react';
import './App.css';
import {  useRecoilState, useRecoilValue } from 'recoil';
import { apiState, viewAtom } from './atoms';



function App() {
  const [apiData,setApiData] = useRecoilState(apiState)
  const view = useRecoilValue(viewAtom)
    

  useEffect(()=>{
    const getData = async ()=>{
      const url = `https://dummyjson.com/products/${view}`;
      const data = await fetch(url)
      const body = await data.json();
      setApiData(body)
    }
    getData();

  },[view])
  return (
    <div className="App">
     {
       apiData.products &&  apiData.products.map(item=><h1>{item.title}</h1>)
     }
    </div>
  );
}

export default App;
