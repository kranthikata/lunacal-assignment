import GalleryItem from "../GalleryItem";
const GallerySlides = (props) => {
  const { imagesList } = props;
  return (
    <ul className="flex flex-row gap-4 relative">
      {imagesList.map((eachImage) => (
        <GalleryItem key={eachImage.id} imageDetails={eachImage} />
      ))}
    </ul>
  );
};
export default GallerySlides;
