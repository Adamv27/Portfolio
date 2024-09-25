import "../styles/Canvas.css";
import useCanvas from "../hooks/useCanvas";
import resizeCanvas from "../util/draw";

const _postdraw = () => {
}

const _predraw = (context, canvas) => {
  context.save()
  resizeCanvas(canvas)
  const { width, height } = context.canvas
  context.clearRect(0, 0, width, height)
}

const Canvas = props => {

  const { draw, predraw = _predraw, postdraw = _postdraw, ...rest } = props
  const canvasRef = useCanvas(draw, { postdraw, predraw })

  return <canvas className="canvas" ref={canvasRef} {...rest} />
}

export default Canvas