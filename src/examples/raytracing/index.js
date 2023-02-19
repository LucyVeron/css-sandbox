import './raytracing.scss';
import { useEffect, useRef, useState } from 'react';

function RayTracing() {
  const container = useRef(null);
  const [rects, setRects] = useState([]);
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);
  const [bgImage, setBgImage] = useState('');
  const hues = ["-10", "30", "70", "200"];


  const setBackground = (hue) => {
    let currentRect = rects.find((rect) => {
      return rect.getAttribute('data-hue') === hue
    });

    if (currentRect) {
      const position = currentRect.getBoundingClientRect();

      const innerColor = `hsl(${hue}, 100%, 80%)`;
      const outerColor = `hsl(${hue}, 40%, 30%)`;

      const diffX = mouseX - position.x;
      const diffY = mouseY - position.y;

      return `radial-gradient(ellipse at ${diffX}px ${diffY}px, ${innerColor}, ${outerColor})`
    }
    return '';
  }

  const mouseMove = (e) => {
    setMouseX(e.clientX);
    setMouseY(e.clientY);
    setBgImage(`radial-gradient(ellipse at ${mouseX}px ${mouseY}px, #fff, #bbb)`);
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
        style={{ backgroundImage: bgImage }}
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