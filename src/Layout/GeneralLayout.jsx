import { Outlet } from "react-router-dom"
import MainFeed from "../MainFeed"
import AsideNews from "../pages/AsideNews"

const GeneralLayout = () => { 
    return (<>

    <MainFeed content={<Outlet/>} asidee={<AsideNews/>} clas={`main`}/>
    
    
    </>)
 }

 export default GeneralLayout