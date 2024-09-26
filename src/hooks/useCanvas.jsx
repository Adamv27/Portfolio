import { useEffect, useRef } from "react"

const useCanvas = (draw, funcs) => {

  const canvasRef = useRef(null);
  const { setup, predraw } = funcs;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let frameCount = 1;
    let animationFrameId;
    setup(context, canvas);
    const render = () => {
      predraw(context, canvas)
      draw(context, frameCount);
      frameCount += 2;
      animationFrameId = window.requestAnimationFrame(render)
    }
    render()

    return () => {
      window.cancelAnimationFrame(animationFrameId)
    }

  }, [draw])

  return canvasRef
}

export default useCanvas 