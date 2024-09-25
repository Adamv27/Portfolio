import { useEffect, useRef } from "react"



const useCanvas = (draw, funcs) => {

  const canvasRef = useRef(null);
  const { predraw, postdraw } = funcs;

  useEffect(() => {
    const canvas = canvasRef.current;
    const context = canvas.getContext('2d');

    let frameCount = 0;
    let animationFrameId;
    const render = () => {
      predraw(context, canvas)
      draw(context, frameCount);
      frameCount++;
      postdraw()
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