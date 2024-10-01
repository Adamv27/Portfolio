import Grid from "../../grid/grid";
import useWindowSize from "../../hooks/useWindowSize";
import Canvas from "../Canvas";


const GridPattern = () => {
  const dimensions = useWindowSize();
  const grid = new Grid(dimensions)

  const draw = (ctx, frameCount) => {
    grid.draw(ctx);
  }

  return <Canvas draw={draw} />
}

export default GridPattern;