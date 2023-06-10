import { useState } from "react";
import {news, addNews} from "../Constant/addNews"


const News = () => {
  return (
    <section
      id="aside"
      className="grid grid-cols-1 gap-x-2 gap-y-5 xl:flex xl:flex-col">
      <h2 className="kalipediaTitle m-5 text-center font-mono text-4xl font-bold">
        Nuevos Articulos
      </h2>
      <article>
        <div className="relative top-4">
          <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border">
            <div className="">
              <a href="#">
                <img
                  className="w-auto rounded-lg"
                  src="https://res.cloudinary.com/practicaldev/image/fetch/s--qITuC-EE--/c_imagga_scale,f_auto,fl_progressive,h_900,q_auto,w_1600/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/0n9u7fer04ok7brz354x.png"
                  alt="card image"
                />
              </a>
            </div>
            <div className="flex-1 p-6 text-secondary">
              <a href="#">
                <h4 className="text-xl font-extrabold">
                  Haciendo el clone de youtube con tailwindcss y reactjs.
                </h4>
              </a>
              <p className="opcacity-60 mb-3">
                Consumiendo la api de youtube v3 proporcionada por Rapid APi y
                usando react-router-dom. Cree una aplicación de clon de youtube
                con ReactJS y TailwindCSS. En este Proyecto, aprendí a cómo
                crear una aplicación de clon de YouTube con ReactJS y
                TailwindCSS...
              </p>
              <div className="flex w-full items-center justify-between">
                <button className="rounded-lg bg-orange-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <a href="">Leer</a>
                </button>
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
      </article>
      <article>
        <div className="relative top-4">
          <div className="shadow-card flex flex-col rounded-xl bg-white bg-clip-border">
            <div className="mx-4 mt-6 translate-y-0">
              <a href="#">
                <img
                  className="w-auto rounded-lg"
                  src="https://user-images.githubusercontent.com/122651755/226196204-99927fa0-3917-4580-93b5-ed84b2b91aa5.png"
                  alt="card image"
                />
              </a>
            </div>
            <div className="flex-1 p-6 text-secondary">
              <a href="#">
                <h4 className="text-xl font-extrabold">
                  The Simpsons Fan Page
                </h4>
              </a>
              <p className="opcacity-60 mb-3">
                This is my first web project as such. (7-3-2023) In the
                beginning it was done only with html css, and a little bit of
                JS.
              </p>
              <div className="flex w-full items-center justify-between">
                <button className="rounded-lg bg-yellow-500 px-6 py-3 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-yellow-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none">
                  <a href="">Leer</a>
                </button>
                <div
                  id="chips"
                  className="ml-3">
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-green-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    nuevo
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-blue-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    Css
                  </div>
                  <div className="center relative inline-block select-none whitespace-nowrap rounded-lg bg-pink-500 px-3.5 py-2 align-baseline font-sans text-xs font-bold uppercase leading-none text-white">
                    Scss
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default News;
