import { Container } from "react-bootstrap"

import ProjectCard from "../components/ProjectCard"
import Minesweeper from "../assets/projects/minesweeper.png"
import StockViewer from "../assets/projects/stock-viewer.png"
import Blackjack from "../assets/projects/blackjack.png"
import Sentry from "../assets/projects/sentry.png"
import Flavorful from "../assets/projects/flavorful.png"
import Mp3 from "../assets/projects/mp3.png"
import Terrain from "../assets/projects/terrain.png"
import Masonry, {ResponsiveMasonry} from "react-responsive-masonry"

const Projects = () => {
  return (
    <Container>
    <ResponsiveMasonry
      columnsCountBreakPoints={{350: 1, 750: 2, 900: 3}}
    >
      <Masonry>
<ProjectCard 
        title="Terrain Generator"
        description="An infinite terrain generator using simplex noise along with a writeup on the process. Built Feb. 2024"
        imageSrc={Terrain}
        githubUrl="https://github.com/Adamv27/terrain"
        tags={["JavaScript"]}
      />
      <ProjectCard 
        title="Mp3 ID3 Editor"
        description="A site edit and save the title, artist, album, and cover art ID3 tags. Built Dec. 2023"
        imageSrc={Mp3}
        githubUrl="https://github.com/Adamv27/Mp3Editor"
        tags={["React", "Tailwind"]}
      />
      <ProjectCard 
        title="Flavorful"
        description="A recipe finding app built on the spoonacular API. Flask backend was fully deployed on Google cloud. Built Nov. 2023"
        imageSrc={Flavorful}
        githubUrl="https://github.com/Adamv27/Flavorful"
        tags={["JavaScript", "Python"]}
      />
      <ProjectCard 
        title="Sentry"
        description="A password manager in Java Swing designed with the MVC architecture. Built Apr. 2023"
        imageSrc={Sentry}
        githubUrl="https://github.com/Adamv27/Sentry"
        tags={["Java", "SQL"]}
      />
      <ProjectCard 
        title="Stock Viewer"
        description="Stock price viewer using the financial modeling prep API and HTML canvas for a custom price graph. Built Dec. 2021"
        imageSrc={StockViewer}
        githubUrl="https://github.com/Adamv27/Stock-Viewer"
        tags={["JavaScript"]}
      />
      <ProjectCard 
        title="Minesweeper"
        description="Classic 1989 version of minesweeper made with vanilla JavaScript. Built Dec. 2021"
        imageSrc={Minesweeper}
        githubUrl="https://github.com/Adamv27/Minesweeper-JS"
        tags={["JavaScript"]}
      />
      <ProjectCard 
        title="Blackjack"
        description="Game of blackjack built using pygame with custom drag and drop mechanics. Built Nov. 2021"
        imageSrc={Blackjack}
        githubUrl="https://github.com/Adamv27/Blackjack"
        tags={["Python"]}
      />

      </Masonry>
    </ResponsiveMasonry>
</Container> 
  )
}

export default Projects
