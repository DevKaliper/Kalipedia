import { Outlet } from "react-router-dom"
import MainFeed from "../MainFeed"

import News from "../pages/News"

const GeneralLayout = () => { 
    return (<>

    <MainFeed content={<Outlet/>} asidee={<News/>} clase={`main`}/>
    
    
    </>)
 }

 export default GeneralLayout