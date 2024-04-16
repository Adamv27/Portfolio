import { Container } from "react-bootstrap"

import ProjectCard from "../components/ProjectCard"
import Minesweeper from "../assets/projects/minesweeper.png"
import StockViewer from "../assets/projects/stock-viewer.png"
import Blackjack from "../assets/projects/blackjack.png"
import Sentry from "../assets/projects/sentry.png"

const Projects = () => {
  return (
    <Container>
      <ProjectCard 
        title="Card Title"
        description="Some quick exmaple text to build on the card title and make up the bulk of the card's content."
        imageSrc={Minesweeper}
        githubUrl=""
      />
      <ProjectCard 
        title="Sentry"
        description="A password manager in Java Swing designed with the MVC architecture. Built Apr. 2023"
        imageSrc={Sentry}
        githubUrl="https://github.com/Adamv27/Sentry"
      />
      <ProjectCard 
        title="Stock Viewer"
        description="Stock price viewer using the financial modeling prep API and HTML canvas for a custom price graph. Built Dec. 2021"
        imageSrc={StockViewer}
        githubUrl="https://github.com/Adamv27/Stock-Viewer"
      />
      <ProjectCard 
        title="Minesweeper"
        description="Classic 1989 version of minesweeper made with vanilla JavaScript. Built Dec. 2021"
        imageSrc={Minesweeper}
        githubUrl="https://github.com/Adamv27/Minesweeper-JS"
      />
      <ProjectCard 
        title="Blackjack"
        description="Game of blackjack built using pygame with custom drag and drop mechanics. Built Nov. 2021"
        imageSrc={Blackjack}
        githubUrl="https://github.com/Adamv27/Blackjack"
        tags={["Python", "Java"]}
      />
    </Container>
  )
}

export default Projects
