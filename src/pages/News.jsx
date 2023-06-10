
import {news} from "../Constant/addNews"
import { Link } from "react-router-dom";


const News = () => {
  let articulos = [...news]
  


  if (articulos.length > 0){

    return (
      <>
      <article>
        {
          
          articulos.map(item =>(
            <div key={item.id} className="relative top-4 mb-4" >
              <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border">
                <div className="" >
                  <Link to="#">
                    <img src={item.img} alt="card image" className="w-auto rounded-lg" />
                  </Link>

                </div>
                <div className="flex-1 p-6 text-secondary">
                  <Link to="#">
                    <h4 className="text-xl font-extrabold">
                      {item.title}

                    </h4>
                  </Link>
                  <p className="opcacity-60 mb-3">
                    {item.body}
                  </p>
                  <div className="flex w-full items-center justify-between">
                  
                    <Link to="/" className="rounded-lg bg-orange-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">{item.leer}</Link>
                 
                  <div
                    id="chips"
                    className="ml-3">
                    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                      nuevo
                    </div>
                    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-teal-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                      React
                    </div>
                    <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-red-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                      Clone
                    </div>
                  </div>
                </div>
                </div>

              </div>
            </div>
  
          ))
        }
    

      </article>
  
   
   
      
      
      </>
      
    );

  }

  return <h3>No hay Articulos por mostrar</h3>


};

export default News;
