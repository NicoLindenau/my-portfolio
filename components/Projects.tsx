import Project from "./Project"
import fullstackTodolist from "../public/fullstack-todolist.png"
import mkReinigung from "../public/mk-reinigung.png"
import onlineShop from "../public/online-shop.png"
import sortingAlgorithmVisualizer from "../public/sorting-algorithm-visualizer.png"

const Projects = () => {
  return (
    <>
      <h2 className="text-center text-4xl font-bold py-10">MY PROJECTS</h2>
      <div className="grid lg:grid-cols-2 gap-1 md:gap-10 pb-10">
        <Project
          description="Cleaning Service Website created with NEXT.js and tailwindcss."
          websiteLink="https://mk-reinigung.vercel.app/"
          codeLink="https://github.com/NicoLindenau/mk-reinigung"
          img={mkReinigung}
          imgAlt="cleaning service website"
        />
        <Project
          description="Fullstack Todolist created with NEXT.js, tailwindcss, node.js, express and MongoDB"
          websiteLink="https://mern-todo-with-nextjs.vercel.app/"
          codeLink="https://github.com/NicoLindenau/mern-todo-with-nextjs"
          img={fullstackTodolist}
          imgAlt="fullstack todolist"
        />
        <Project
          description="Fullstack online shop created with React, Bootstrap, Redux, node.js, express and MongoDB"
          websiteLink="https://proshopnico.herokuapp.com/"
          codeLink="https://github.com/NicoLindenau/mern-online-shop"
          img={onlineShop}
          imgAlt="online shop"
        />
        <Project
          description="Visualize the merge-sort algorithm created with NEXT.js, tailwindcss and TypeScript"
          websiteLink="https://sorting-algorithm-visualizer-black.vercel.app/"
          codeLink="https://github.com/NicoLindenau/sorting-algorithm-visualizer"
          img={sortingAlgorithmVisualizer}
          imgAlt="sorting algorithm visualizer"
        />
      </div>
    </>
  )
}

export default Projects
