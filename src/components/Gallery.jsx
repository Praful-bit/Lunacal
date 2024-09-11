import { useState } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import "./Gallery.css"; // Import custom CSS file

const Gallery = () => {
  const [images, setImages] = useState([
    "https://images.pexels.com/photos/28295237/pexels-photo-28295237.jpeg",
    "https://images.pexels.com/photos/27215766/pexels-photo-27215766.jpeg",
    "https://images.pexels.com/photos/19749005/pexels-photo-19749005.jpeg",
  ]);

  const addImage = (event) => {
    const file = event.target.files[0];
    if (file) {
      const newImage = URL.createObjectURL(file);
      setImages([newImage, ...images]);
    }
  };

  return (
    <div className="p-6 bg-gray-700 rounded-lg shadow-xl h-full">
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-white font-serif text-xl py-4 px-6 rounded-3xl transition duration-300 bg-black shadow-md">
          Gallery
        </h3>

        <label
          htmlFor="fileInput"
          className="px-6 py-4 text-lg font-serif bg-gray-800 rounded-full text-white shadow-2xl hover:bg-gray-700 transition duration-300 cursor-pointer relative inline-block active:top-1 active:shadow-none border border-gray-600"
        >
          + ADD IMAGE
        </label>
        <input
          id="fileInput"
          type="file"
          accept="image/*"
          onChange={addImage}
          style={{ display: "none" }}
        />

        <FaArrowLeft className="gallery-arrow-left" />

        <FaArrowRight className="gallery-arrow-right" />
      </div>

      <div className="grid grid-cols-3 gap-4">
        {images.map((image, index) => (
          <div key={index} className="w-full h-24 bg-gray-600 rounded-lg">
            <img
              src={image}
              alt="Gallery"
              className="w-full h-full object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
