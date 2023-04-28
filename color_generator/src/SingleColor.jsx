import React, { useEffect } from "react";
import { toast } from "react-toastify";
const SingleColor = ({ color, index }) => {
  const { hex, weight } = color;

  const copyToClipboard = async () => {
    if (navigator.clipboard) {
      try {
        await navigator.clipboard.writeText(`#${hex}`);
        toast.success(`#${hex} is copied to clipboard`);
      } catch (err) {
        toast.error(`coun't copy to clipboard`);
      }
    } else {
      toast.error(`coun't copy to clipboard`);
    }
  };

  return (
    <article
      className={index > 10 ? "color color-light" : "color"}
      style={{ background: `#${hex}` }}
      onClick={copyToClipboard}
    >
      <p className="percent-value">{weight}%</p>
      <a className="hex-value">#{hex}</a>
    </article>
  );
};

export default SingleColor;
