import React,{useState} from 'react';
import { Header } from 'semantic-ui-react';
import Card from "./components/Card";
import 'semantic-ui-css/semantic.min.css';

const App = () => {
  const [count, setCount] = useState(0);
  return (
    <>
   
      <Card counts={count} setCounts={setCount} />
    
    <Header as="h2" textAlign="center"> 
      Done By: Sumit Thakur - 12010454
    </Header>
    </>
  );
};

export default App;
