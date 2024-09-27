import "../styles/Canvas.css";
import useCanvas from "../hooks/useCanvas";
import resizeCanvas from "../util/draw";


const _setup = (context, canvas) => { }

const _predraw = (context, canvas) => {
  context.save()
  resizeCanvas(canvas)
  const { width, height } = context.canvas
  context.clearRect(0, 0, width, height)
}

const Canvas = props => {

  const { draw, setup = _setup, predraw = _predraw, ...rest } = props
  const canvasRef = useCanvas(draw, { setup, predraw })

  return <canvas className="canvas" ref={canvasRef} {...rest} />
}

export default Canvas