import Header from "../components/Header";
import "slick-carousel/slick/slick.css";
import Banner from "@/components/Banner";
import BannerBottom from "@/components/BannerBottom";
import Feature from "@/components/Feature";
import Mega from "@/components/Mega";
import BlogCard from "@/components/BlogCard";
import AuthorCard from "@/components/AuthorCard";
import Footer from "@/components/Footer";


export default function Home() {
  // const [posts, setPosts] = React.useState(false);
  return (
    <>
      <Header />
      <Banner />
      <BannerBottom />
      <Feature />
      <Mega/>
      <AuthorCard/>
      <BlogCard/>
      <Footer />
    </>
  );
}