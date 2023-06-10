import { Outlet } from "react-router-dom"
import MainFeed from "../MainFeed"

const GeneralLayout = () => { 
    return (<>

    <MainFeed content={<Outlet/>}/>
    
    
    </>)
 }

 export default GeneralLayout