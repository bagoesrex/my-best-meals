"use client";

import Image from "next/image";
import { useRef, useState } from "react";

export default function ImagePicker({ label, name }) {
  const [pickedImage, setPickedImage] = useState();
  const imageInput = useRef();

  function handlePickClick() {
    imageInput.current.click();
  }

  function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();
    fileReader.onload = () => setPickedImage(fileReader.result);
    fileReader.readAsDataURL(file);
  }

  return (
    <div className="mb-4">
      <div className="flex items-start gap-6 mb-4">
        <div className="w-40 h-40 border-2 border-gray-400 flex items-center justify-center text-center text-gray-400 relative overflow-hidden">
          {!pickedImage && <p className="p-4 text-sm">No image picked yet.</p>}
          {pickedImage && (
            <Image
              src={pickedImage}
              alt="The image."
              fill
              className="object-cover"
            />
          )}
        </div>

        <div className="flex flex-col justify-start gap-2">
          <input
            type="file"
            id={name}
            accept="image/png, image/jpeg"
            name={name}
            ref={imageInput}
            onChange={handleImageChange}
            className="hidden"
          />
          <button
            type="button"
            onClick={handlePickClick}
            className="cursor-pointer bg-gray-400 hover:bg-gray-500 text-white px-4 py-2 rounded text-sm font-medium"
          >
            Choose Image
          </button>
        </div>
      </div>
    </div>
  );
}
