import Header from "../components/Header";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import CollectionCard from "./components/CollectionCard";
import HomeLayout from "../components/HomeLayout";

const trendingData = [
  {
    id: 1,
    collectName: "Dsgn Animals",
    avaUser: "https://res.cloudinary.com/trkha1609/image/upload/v1670519021/NFT-Marketplace/Avatar_6_qe6pxo.png",
    userName: "MrFox",
    img1: "https://res.cloudinary.com/trkha1609/image/upload/v1669389469/NFT-Marketplace/Homepage/Dog_ybhcjt.png",
    img2: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Squirrel_jg6vmb.png",
    img3: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Bear_sybne7.png"
  },
  {
    id: 2,
    collectName: "Magic Mushrooms",
    avaUser: "https://res.cloudinary.com/trkha1609/image/upload/v1670345833/NFT-Marketplace/Avatar_7_tgqle4.png",
    userName: "Shroomie",
    img1: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Mushroom1_to3vqv.png",
    img2: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Mushroom2_x0acco.png",
    img3: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Mushroom3_dopn8h.png"
  },
  {
    id: 3,
    collectName: "Disco Machines",
    avaUser: "https://res.cloudinary.com/trkha1609/image/upload/v1670519023/NFT-Marketplace/avatar_12_khqy4q.png",
    userName: "BeKind2Robots",
    img1: "https://res.cloudinary.com/trkha1609/image/upload/v1669389469/NFT-Marketplace/Homepage/DiscoMachine1_dggnft.png",
    img2: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/DiscoMachine3_sfwwrk.png",
    img3: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/DiscoMachine3_sfwwrk.png"
  },
  {
    id: 4,
    collectName: "Dsgn Animals",
    avaUser: "https://res.cloudinary.com/trkha1609/image/upload/v1670519021/NFT-Marketplace/Avatar_6_qe6pxo.png",
    userName: "MrFox",
    img1: "https://res.cloudinary.com/trkha1609/image/upload/v1669389469/NFT-Marketplace/Homepage/Dog_ybhcjt.png",
    img2: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Squirrel_jg6vmb.png",
    img3: "https://res.cloudinary.com/trkha1609/image/upload/v1669389468/NFT-Marketplace/Homepage/Bear_sybne7.png"
  }
]

const TrendingCollection = () => {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  let size = mdScreen ? 1 : lgScreen ? 2 : 3;

  return (
    <HomeLayout>
      <Box>
        <Header
          title="Trending Collection"
          subtitle="Checkout Our Weekly Updated Trending Collection."
        />
        <Box sx={{ display: "flex", gap: "30px" }}>
          {
            trendingData.slice(0, size).map(item => (
              <CollectionCard key={item.id} {...item} />
            ))
          }
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default TrendingCollection;
