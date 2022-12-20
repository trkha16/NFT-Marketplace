import { Box } from "@mui/material";
import BrowseCategories from "../features/home/Category/BrowseCategories";
import Discover from "../features/home/Discover/Discover";
import HeroSection from "../features/home/HeroSection/HeroSection";
import Highlight from "../features/home/Highlight/Highlight";
import HowItWork from "../features/home/HowItWork/HowItWork";
import Subscribe from "../features/home/Subscribe/Subscribe";
import TopCreators from "../features/home/TopCreators/TopCreators";
import TrendingCollection from "../features/home/Trending/TrendingCollection";

const Home = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", widthh: "100%" }}>
      <HeroSection />
      <TrendingCollection />
      <TopCreators />
      <BrowseCategories />
      <Discover />
      <Highlight />
      <HowItWork />
      <Subscribe />
    </Box>
  );
};

export default Home;
