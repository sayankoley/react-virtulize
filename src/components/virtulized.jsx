import { useState } from "react";

export const Virtulized = ({ list, height, itemHeiht }) => {
  const [index, setIndex] = useState([0, Math.floor(height / itemHeiht)]);
  const visibel = list.slice(index[0], index[1] + 1);
  const handleScroll = (e) => {
    const { scrollTop } = e.target;
    const newScroll = Math.floor(scrollTop / itemHeiht);

    setIndex([newScroll, newScroll + Math.floor(height / itemHeiht)]);
  };
  console.log(index);

  return (
    <>
      <div className="boxcon" onScroll={handleScroll}>
        <div style={{ height: list.length * itemHeiht }} className="wrap">
          {visibel.map((it, i) => {
            return (
              <div
                style={{
                  position: "absolute",
                  width: "100%",
                  transform: `translateY(${(index[0] + i) * itemHeiht}px)`,
                }}
                id={it}
                key={it}
                className="it"
              >
                {" "}
                item {it}
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
