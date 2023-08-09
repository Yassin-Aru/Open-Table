function Images({ images }: { images: string[] }) {
  return (
    <div>
      <h1 className="font-bold text-3xl mt-10 mb-7 border-b pb-5">{images.length} {images.length > 1 ? "Photos" : (images.length === 1 ? "Photo" : "Photos are not available" )}</h1>
      <div className="flex flex-wrap">
        {images.map((image) => (
          <img
            className="w-56 h-44 mr-1 mb-1"
            src={image}
            alt="image"
          />
        ))}
      </div>
    </div>
  );
}

export default Images;
