const GalleryItem = (props) => {
  const { imageDetails } = props;
  const { imageUrl } = imageDetails;

  return (
    <li className="w-[167px] h-full">
      <img
        src={imageUrl}
        alt="imageItem"
        className="w-full h-full rounded-2xl transform transition-transform duration-300 ease-in-out hover:z-50 hover:translate-y-[-18px] hover:-rotate-3 saturate-0 hover:saturate-100"
      />
    </li>
  );
};
export default GalleryItem;
