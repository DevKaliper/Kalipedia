import { Container } from '@mui/material';
import {useState} from 'react'
import SearchAppBar from './components/SearchAppBar';
import NavBar from './components/NavBar';

function App() {
  const [open, setOpen] = useState(false);

 
  return (
    <>
  
    <SearchAppBar setOpen={setOpen}/>
    <NavBar open={open} setOpen={setOpen}/>
    <Container>

      
    </Container>
  

    </>
  );
}

export default App;
