import Image from "next/image";
import React from "react";

const ImageGallery = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="flex justify-center mb-4">
        <Image
          alt="Featured image"
          className="rounded-md object-cover"
          src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
          width={700}
          height={300}
        />
      </div>
      <div className="grid grid-cols-5 gap-4">
        {Array.from({ length: 5 }).map((_, index) => (
          <div key={index}>
            <Image
              alt={`Gallery image ${index + 1}`}
              className="rounded-md object-cover"
              src="https://images.pexels.com/photos/271624/pexels-photo-271624.jpeg?auto=compress&cs=tinysrgb&w=600"
              width={250}
              height={250}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImageGallery;
