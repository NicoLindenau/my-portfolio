import Project from "./Project"

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold py-10">MY PROJECTS</h2>
      <div className="grid lg:grid-cols-2 gap-1 md:gap-10 pb-10">
        <Project
          description="Cleaning Service Website created with NEXT.js and tailwindcss."
          websiteLink="https://mk-reinigung.vercel.app/"
          codeLink="https://github.com/NicoLindenau/mk-reinigung"
          img="mk-reinigung.png"
          imgAlt="Cleaning Service Website"
        />
        <Project
          description="Fullstack Todolist created with NEXT.js, tailwindcss, node.js, express and MongoDB"
          websiteLink="https://mern-todo-with-next.vercel.app/"
          codeLink="https://github.com/NicoLindenau/mern-todo-with-nextjs"
          img="fullstack-todolist.png"
          imgAlt="Fullstack Todolist"
        />
      </div>
    </>
  )
}

export default Projects
