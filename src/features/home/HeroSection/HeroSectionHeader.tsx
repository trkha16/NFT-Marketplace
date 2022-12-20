import { Typography } from "@mui/material";

const HeroSectionHeader = () => {
  return (
    <>
      <Typography
        align="left"
        paddingBottom="20px"
        sx={{ typography: { lg: "h1", md: "h3", xs: "h4" } }}
      >
        Discover Digital Art & Collect Nfts
      </Typography>
      <Typography sx={{ fontSize: { lg: "22px", xs: "16px" } }}>
        Nft Marketplace Ui Created With Anima For Figma. Collect, Buy And Sell
        Art From More Than 20k Nft Artists.
      </Typography>
    </>
  );
};

export default HeroSectionHeader;
