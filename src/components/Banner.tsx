
// React and Next.js imports
import Image from "next/image";

// Local image imports
import bannerImgOne from "../../public/images/goo1.jpg";

const Banner = () => {
  return (
    <div className="w-full h-auto md:h-[650px] relative">
      {/* Display the first banner image */}
      <Image
        className="w-full h-auto object-cover"
        src={bannerImgOne}
        alt="Banner image"
        layout="responsive" // Helps in managing responsiveness
        width={1920} // Specify image width for correct aspect ratio
        height={650} // Specify image height
        loading="eager" // Load image eagerly for immediate display
      />
    </div>
  );
};

export default Banner;
