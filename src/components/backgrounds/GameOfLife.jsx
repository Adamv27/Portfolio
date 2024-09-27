import useWindowSize from "../../hooks/useWindowSize"
import Canvas from "../Canvas"
import LifeGrid from "../../grid/lifeGrid";

const GameOfLife = () => {
  const dimensions = useWindowSize();
  const grid = new LifeGrid(dimensions);

  const draw = (ctx, frameCount) => {
    grid.draw(ctx);
    grid.update(frameCount);


  }

  return <Canvas draw={draw} />
}

export default GameOfLife
