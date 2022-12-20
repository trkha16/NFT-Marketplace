import { Box } from "@mui/material";
import Header from "../components/Header";
import Card from "./components/Card";
import HomeLayout from "../components/HomeLayout";

const data = [
  {
    id: 1,
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389469/NFT-Marketplace/Homepage/HowItWorks/WorkIcon1_cr2kie.png",
    title: "Setup Your Wallet",
    desc: "Set up your wallet of choice. Connect it to the Animarket by clicking the wallet icon in the top right corner.",
  },
  {
    id: 2,
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389559/NFT-Marketplace/Homepage/HowItWorks/WorkIcon2_jur4je.png",
    title: "Create Collection",
    desc: "Upload your work and setup your collection. Add a description, social links and floor price.",
  },
  {
    id: 3,
    imageUrl:
      "https://res.cloudinary.com/trkha1609/image/upload/v1669389559/NFT-Marketplace/Homepage/HowItWorks/WorkIcon3_axbcsj.png",
    title: "Start Earning",
    desc: "Choose between auctions and fixed-price listings. Start earning by selling your NFTs or trading others.",
  },
];

export type HowItWorkData = {
  id?: number;
  imageUrl: string;
  title: string;
  desc: string;
}

const HowItWork = () => {
  return (
    <HomeLayout>
      <Box>
        <Header title="How It Works" subtitle="Find Out How To Get Started" />

        <Box
          sx={{
            display: "flex",
            flexDirection: { md: "row", xs: "column" },
            gap: { md: "30px", xs: "20px" },
          }}
        >
          {data.map((item: HowItWorkData) => (
            <Card key={item.id} {...item} />
          ))}
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default HowItWork;
