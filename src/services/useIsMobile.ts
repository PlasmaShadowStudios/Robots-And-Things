import { useEffect, useState } from "react";


export default function useIsMobile(windowWidth:number) {

  //Detect if mobile using handleWindowSizeChange event
  const [width, setWidth] = useState<number>(windowWidth);

  function handleWindowSizeChange() {
    setWidth(windowWidth);
  }
  useEffect(() => {
    window.addEventListener("resize", handleWindowSizeChange);
    return () => {
      window.removeEventListener("resize", handleWindowSizeChange);
    };
  });

  return width <= 768;
}
