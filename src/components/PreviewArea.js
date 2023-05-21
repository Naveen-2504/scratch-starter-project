import React, { useState } from "react";
import CatSprite from "./CatSprite";

export default function PreviewArea({ controls, showText }) {
  const [previewImage, setPreviewImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setPreviewImage(URL.createObjectURL(file));
  };

  return (
    <div className={`flex-none h-full overflow-hidden p-2 w-full relative`}>
      {controls.image && (
        <div
          className={showText ? `w-9/12 relative` : "w-1/6"}
          style={{
            transform: `translate(${parseInt(controls.x)}px, ${parseInt(
              controls.y
            )}px) rotate(${controls.value}deg)`,
            ...controls.style,
          }}
        >
          {showText && (
            <div className="border p-6 absolute left-28 rounded-xl border-indigo-600">
              <div
                className="border border-indigo-600 p-3 absolute top-1.5 transform rotate(358)deg"
                style={{ left: "-25px", borderRadius: "9px 0px 0px 73px" }}
              ></div>
              <div
                className="p-3 absolute top-2 bg-white"
                style={{ left: "-2px" }}
              ></div>
              {controls?.text}
            </div>
          )}
          <CatSprite style={{ ...controls.imgStyle }} />
          {previewImage && (
            <img src={previewImage} alt="Preview" className="preview-image" />
          )}
        </div>
      )}
      <div className="absolute bottom-0 right-0">
        <form className="bg-indigo-500 w-full h-full rounded-full">
          <input
            type="file"
            accept="image/*"
            className="file-input w-10 h-10 relative rounded-full opacity-0 z-50"
            onChange={handleImageChange}
          />
          <div className="absolute top-0 w-full h-full flex rounded-full justify-center items-center text-white">
            <i className="fa fa-upload" />
          </div>
        </form>
      </div>
    </div>
  );
}
