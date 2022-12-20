import { Box, Typography } from "@mui/material";
import Button from "../../../components/Button/Button";
import RocketLaunch from "../../../components/icons/RocketLaunch";
import HeroSectionImage from "./HeroSectionImage";
import HeroSectionHeader from "./HeroSectionHeader";
import HeroSectionInfo from "../../../components/Stats/Stats";
import HomeLayout from "../components/HomeLayout";

const HeroSection = () => {
  return (
    <HomeLayout>
      <Box sx={{ display: "flex", gap: "30px" }}>
        <Box sx={{ flex: 1 }}>
          <HeroSectionHeader />
          <Box sx={{ display: { md: "none", xs: "block" }, mt: "40px" }}>
            <HeroSectionImage />
          </Box>
          <Box
            sx={{
              m: { lg: "40px 0", md: "20px 0", xs: "40px 0" },
              width: { md: "224px", xs: "100%" },
            }}
          >
            <Button type="secondary"
              icon={<RocketLaunch />}
              title={
                <Typography
                  fontWeight="600"
                  fontSize="16px"
                  lineHeight="140%"
                  alignSelf="center"
                >
                  Get Started
                </Typography>
              }
            />
          </Box>
          <HeroSectionInfo />
        </Box>
        <Box sx={{ display: { md: "block", xs: "none" } }}>
          <HeroSectionImage />
        </Box>
      </Box>
    </HomeLayout>
  );
};

export default HeroSection;
