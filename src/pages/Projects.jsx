import React from 'react'

import ProjectCard from '../components/ProjectCard'
import Carousel, { CarouselItem } from '../components/Carousel'
import './Projects.css'

import SentryImage from '../assets/projects/sentry.png'
import StockImage from '../assets/projects/stock-viewer.png'
import MinesweeperImage from '../assets/projects/minesweeper.png'
import BlackJackImage from '../assets/projects/blackjack.png'

function Projects() {
  return (
    <div className='projects-container'>
      <h1 className='title'>Projects</h1>
      <div className='line' style={{width: '40%'}}></div>
      <Carousel>
        <CarouselItem>
          <ProjectCard 
            image={SentryImage}
            tags={["Java", "SQLite3", "Swing"]}
            title="Sentry"
            srcLink="https://github.com/Adamv27/Sentry"
            desc="Password manager desktop application designed with a MVC architecture. Stores and retrieves hashed user data from an SQLite database."
          />
        </CarouselItem>
        <CarouselItem>
          <ProjectCard 
            image={StockImage}
            tags={["JavaScript"]}
            title="Stock Viewer"
            srcLink="https://github.com/Adamv27/Stock-Viewer"
            desc="Connects to Financial Modeling Prep API to retrieve stock data and display results in custom made graph."
          />
        </CarouselItem>
        <CarouselItem>
          <ProjectCard 
            image={MinesweeperImage}
            tags={["JavaScript"]}
            title="Minesweeper"
            srcLink="https://github.com/Adamv27/Minesweeper-JS"
            desc="Classic game of Minesweeper made in vanilla JavaScript. Implements long touch library to allow mobile play."
          />
        </CarouselItem>
        <CarouselItem>
          <ProjectCard 
            image={BlackJackImage}
            tags={["Python"]}
            title="BlackJack"
            srcLink="https://github.com/Adamv27/Blackjack"
            desc="The game blackjack built with the Pygame library. Inplemented custom drag and drop mechanics for chips."
          />
        </CarouselItem>
      </Carousel>
    </div> 
  )
}

export default Projects
