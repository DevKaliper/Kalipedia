/* eslint-disable react/prop-types */
import { Outlet } from "react-router-dom"
import MainFeed from "../MainFeed"


const NewsLayout = () => { 
    return (<>

    <MainFeed content={<Outlet/>} asidee={""} clase={`mainNews`}/>
    
    
    </>)
 }




export default NewsLayout;
