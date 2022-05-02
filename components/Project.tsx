import { BiCodeAlt, BiLinkExternal } from "react-icons/bi"

const Project = ({ description, websiteLink, codeLink, img, imgAlt }) => {
  const goToWebsite = () => {
    window.open(websiteLink, "_blank")
  }

  const goToCode = () => {
    window.open(codeLink, "_blank")
  }

  return (
    <div className="relative">
      <div className="hover:backdrop-blur-[1.5px] absolute z-10 w-full h-full lg:opacity-0 hover:opacity-100 flex justify-center items-center transition duration-300">
        <div className="text-center w-full">
          <h4 className="sm:text-xl bg-blue-light py-1 sm:py-4">
            {description}
          </h4>
          <div className="flex justify-center">
            <div
              onClick={goToWebsite}
              className="bg-blue-light text-xl p-3 m-4 mb-0 mr-0 rounded-lg cursor-pointer hover:scale-110 duration-300"
            >
              <BiLinkExternal />
            </div>
            <div
              onClick={goToCode}
              className="bg-blue-light text-xl p-3 m-4 mb-0 rounded-lg cursor-pointer hover:scale-110 duration-300"
            >
              <BiCodeAlt />
            </div>
          </div>
        </div>
      </div>
      <img className="object-contain" src={img} alt={imgAlt} />
    </div>
  )
}

export default Project