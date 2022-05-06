import useRef from "react";

export default function Cursor({ children }) {
  const dot = useRef(null);
  const dotOutline = useRef(null);

  return (
    <div>
      {/* <div ref={dotOutline} className="cursor-dot-outline"></div>
      <div ref={dot} className="cursor-dot"></div> */}
      <main>{children}</main>
    </div>
  );
}
