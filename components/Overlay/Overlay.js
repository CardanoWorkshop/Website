// React
import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

const Overlay = ({ children, selector }) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);

    return () => setMounted(false);
  }, [selector]);

  return mounted
    ? createPortal(children, document.getElementById("overlay"))
    : null;
};

export default Overlay;
