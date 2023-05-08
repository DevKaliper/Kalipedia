

export const Home = () => {
  return (
    <section id="feed">
    <article>
      <div className="mx-auto max-w-screen-md py-12">
        <div
          className="relative mb-12 flex flex-col overflow-hidden rounded-xl bg-white bg-clip-border text-gray-700 shadow-md">
          <img
            alt="nature"
            className="h-[32rem] w-full object-cover object-center"
            src="https://i.ibb.co/cY37qPg/kaliper.png" />
        </div>
        <h2
          className="kalipediaTitle text-blue-gray-900 mb-2 block text-center font-mono text-[65px] font-bold leading-[1.3] tracking-normal antialiased md:text-7xl">
          Kalipedia
        </h2>
        <p
          className="block text-center text-base font-semibold leading-relaxed text-gray-700 antialiased md:text-2xl xl:text-2xl">
          ¡Hola a todos! Soy un estudiante de
          <span className="kalipediaTitle"> ingeniería de software</span> que
          ama la programación y el desarrollo fullstack con
          <span className="kalipediaTitle"> React.</span> En este blog personal,
          quiero compartir mis proyectos y avances en este emocionante mundo
          de la tecnología. Desde que comencé a aprender programación,<span
            className="kalipediaTitle"
            >siempre me ha fascinado la posibilidad de crear algo desde
            cero,
          </span>
          y eso es exactamente lo que me motiva a seguir aprendiendo.
          Actualmente,
          <span className="kalipediaTitle"
            >me estoy enfocando en el desarrollo fullstack
          </span>
          con React, una biblioteca que me ha sorprendido con su eficacia y
          eficiencia. Este blog es una oportunidad para mí de documentar
          mi <span className="kalipediaTitle"
            >progreso, compartir mis proyectos y aprender de otros
            programadores apasionados.
          </span>
          También espero poder brindar algunos consejos útiles y trucos que
          he aprendido en el camino.

          <span className="kalipediaTitle"
            >Si eres como yo, un apasionado de la programación y el
            desarrollo de software, este es el lugar para ti. ¡Únete a mí en
            este emocionante viaje de aprendizaje y desarrollo!
          </span>
        </p>
      </div>
    </article>
  </section>

  )
}
