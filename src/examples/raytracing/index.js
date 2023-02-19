import './raytracing.scss';
import { useEffect, useRef, useState } from 'react';

function RayTracing() {
  const container = useRef(null);
  const [rects, setRects] = useState([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [containerBackground, setContainerBackground] = useState('');
  const hues = ["-10", "30", "70", "200"];


  const setBackground = (hue) => {
    let currentRect = rects.find((rect) => {
      return rect.getAttribute('data-hue') === hue
    });

    if (currentRect) {
      const position = currentRect.getBoundingClientRect();

      const innerColor = `hsl(${hue}, 100%, 80%)`;
      const outerColor = `hsl(${hue}, 90%, 50%)`;

      const diffX = mouseX - position.x;
      const diffY = mouseY - position.y;

      return `radial-gradient(ellipse at ${diffX}px ${diffY}px, ${innerColor}, ${outerColor})`
    }
    return '';
  }

  const mouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    setContainerBackground(`radial-gradient(ellipse at ${mouseX}px ${mouseY}px, dimgrey, #000)`);
  }

  useEffect(() => {
    if (rects.length === 0) {
      setRects(Array.from(container.current.children));
    }
  }, [rects]);

  return (
    <>
      <div
        className="raytracing"
        style={{ backgroundImage: containerBackground }}
        ref={container}
        onMouseMove={(e) => mouseMove(e)}
      >
        {hues.map((hue) => {
          return (
            <div
              key={hue}
              style={{ backgroundImage: setBackground(hue) }}
              className="rect"
              data-hue={hue}></div>
          );
        })}
      </div>
    </>
  );
}

export default RayTracing