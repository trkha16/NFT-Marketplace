import { styled } from "@mui/system";
import { Box, Typography } from "@mui/material";
import SubscribeButton from "./SubscribeButton";
import HomeLayout from "../components/HomeLayout";

const MySubscribe = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--background-secondary)",
  display: "flex",
  padding: "60px",
  gap: "80px",
  borderRadius: "20px",
  [theme.breakpoints.between("md", "lg")]: {
    padding: "40px 30px",
    gap: "30px",
  },
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    backgroundColor: "transparent",
    padding: 0,
    gap: "30px",
  },
}));

const MySubscribeImg = styled(Box)(({ theme }) => ({
  width: "425px",
  height: "310px",
  borderRadius: "20px",
  [theme.breakpoints.between("md", "lg")]: {
    width: "300px",
    height: "280px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "255px",
  },
}));

const MySubscribeContent = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "40px",
  flexDirection: "column",
  width: "425px",
  justifyContent: "center",
  [theme.breakpoints.between("md", "lg")]: {
    width: "300px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
  },
}));

const Subscribe = () => {
  return (
    <HomeLayout>
      <MySubscribe>
        <MySubscribeImg>
          <img
            src="https://res.cloudinary.com/trkha1609/image/upload/v1669448493/NFT-Marketplace/Homepage/subscribeImg_mqk8d9.png"
            alt="subscribe"
          />
        </MySubscribeImg>
        <MySubscribeContent>
          <Box
            sx={{
              display: "flex",
              gap: "10px",
              flexDirection: "column",
            }}
          >
            <Typography sx={{ typography: { lg: "h3", xs: "h4" } }}>
              Join Our Weekly Digest
            </Typography>
            <Typography
              variant="body1"
              sx={{ fontSize: { lg: "22px", xs: "16px" } }}
            >
              Get exclusive promotions & updates straight to your inbox.
            </Typography>
          </Box>
          <SubscribeButton />
        </MySubscribeContent>
      </MySubscribe>
    </HomeLayout>
  );
};

export default Subscribe;
