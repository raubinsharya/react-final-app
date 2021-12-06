import React, { createRef } from "react";
import style from "./carousel.module.css";
import { ReactComponent as LeftArrowIcon } from "../assets/icons/arrow-left-solid.svg";
import { ReactComponent as RightArrowIcon } from "../assets/icons/arrow-right-solid.svg";

export default function Carousel({ images = [] }) {
  let count: number = 0;
  const nodeRefs: Array<any> = [];
  const handleCurrent = (e: number) => {
    count = e % nodeRefs.length;
    for (let i in nodeRefs) {
      nodeRefs[i].current.style.display = "none";
    }
    nodeRefs[Math.abs(count) % nodeRefs.length].current.style.display = "block";
  };

  React.useEffect(() => {
    let timer = setInterval(() => {
      handleCurrent(count + 1);
    }, 3000);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className={style.carouselContainer}>
      <div className={style.carouselItem}>
        {images.map((i, index) => {
          let ref: any = createRef();
          nodeRefs.push(ref);
          return (
            <div className={style.itemContainer} ref={ref} key={index}>
              <img className={style.carouselItem} src={i} />
              <h3 className={style.itemText}>
                This is sample Text {index + 1}
              </h3>
            </div>
          );
        })}
      </div>
      <div className={style.carouselButton}>
        <LeftArrowIcon
          style={{
            width: "50px",
            padding: "10px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.263)",
          }}
          onClick={() => handleCurrent(count - 1)}
        />
        <RightArrowIcon
          style={{
            width: "50px",
            padding: "10px",
            color: "white",
            backgroundColor: "rgba(0, 0, 0, 0.263)",
          }}
          onClick={() => handleCurrent(count + 1)}
        />
      </div>
    </div>
  );
}
