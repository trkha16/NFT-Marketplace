import Header from "../components/Header";
import { Box, Grid } from "@mui/material";
import Card from "./components/Card";
import PaintBrush from "../../../components/icons/PaintBrush";
import Swatches from "../../../components/icons/Swatches";
import MusicNotes from "../../../components/icons/MusicNotes";
import Camera from "../../../components/icons/Camera";
import VideoCamera from "../../../components/icons/VideoCamera";
import MagicWand from "../../../components/icons/MagicWand";
import BasketBall from "../../../components/icons/BasketBall";
import Planet from "../../../components/icons/Planet";
import HomeLayout from "../components/HomeLayout";

const data = [
  {
    id: 1,
    category: "Art",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389469/NFT-Marketplace/Homepage/Categories/Cate1_jwbvpv.png",
    cateIcon: <PaintBrush />,
  },
  {
    id: 2,
    category: "Collectibles",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate2_coq6zp.png",
    cateIcon: <Swatches />,
  },
  {
    id: 3,
    category: "Music",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate3_k50koo.png",
    cateIcon: <MusicNotes />,
  },
  {
    id: 4,
    category: "Photography",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate4_wxtvq9.png",
    cateIcon: <Camera />,
  },
  {
    id: 5,
    category: "Video",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate5_feot2v.png",
    cateIcon: <VideoCamera />,
  },
  {
    id: 6,
    category: "Utility",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate6_odxlja.png",
    cateIcon: <MagicWand />,
  },
  {
    id: 7,
    category: "Sport",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389747/NFT-Marketplace/Homepage/Categories/Cate7_djwxsy.png",
    cateIcon: <BasketBall />,
  },
  {
    id: 8,
    category: "Virtual Worlds",
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389748/NFT-Marketplace/Homepage/Categories/Cate8_blgzin.png",
    cateIcon: <Planet />,
  },
];

export type HomeCategoryProps = {
  id?: number;
  category?: string;
  imageUrl?: string;
  cateIcon?: React.ReactNode;
}

const BrowseCategories = () => {
  return (
    <HomeLayout>
      <Box>
        <Header title="Browse Categories" />
        <Grid container spacing={{ md: "30px", xs: "20px" }}>
          {data.map((item: HomeCategoryProps) => (
            <Card key={item.id} {...item} />
          ))}
        </Grid>
      </Box>
    </HomeLayout>
  );
};

export default BrowseCategories;
