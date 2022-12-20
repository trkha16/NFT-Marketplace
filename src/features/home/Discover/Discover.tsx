import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/Header";
import Eye from "../../../components/icons/Eye";
import { styled } from "@mui/system"
import Button from "../../../components/Button/Button";
import NFTCard from "../../../components/Card/NFTCard";
import HomeLayout from "../components/HomeLayout";

const MyNFT = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "30px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px"
  },
}))

const Discover = () => {
  const theme = useTheme();
  const mdScreen = useMediaQuery(theme.breakpoints.down("md"));
  const lgScreen = useMediaQuery(theme.breakpoints.down("lg"));

  let size = mdScreen ? 3 : lgScreen ? 2 : 3;

  return (
    <HomeLayout>
      <Header
        title="Discover More Nfts"
        subtitle="Explore New Trending Nfts"
        button={
          <Box sx={{ display: { md: "flex", xs: "none" }, width: "187px", alignItems: "flex-end" }}>
            <Button
              type="secondary"
              icon={<Eye />}
              title={
                <Typography>See All</Typography>
              }
              bgColor="transparent"
              border="2px solid var(--main-color)"
            />
          </Box>
        }
      />
      <MyNFT>
        {
          [1, 2, 3, 4].slice(0, size).map(item => (
            <NFTCard />
          ))
        }
      </MyNFT>
      <Box sx={{ display: { md: "none", xs: "flex" }, width: "100%", marginTop: "40px" }}>
        <Button
          type="secondary"
          icon={<Eye />}
          title={
            <Typography>See All</Typography>
          }
          bgColor="transparent"
          border="2px solid var(--main-color)"
        />
      </Box>
    </HomeLayout >
  )
}

export default Discover