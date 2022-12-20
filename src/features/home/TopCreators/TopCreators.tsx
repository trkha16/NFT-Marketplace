import { Box, Grid, Typography } from "@mui/material";
import Header from "../components/Header";
import RocketLaunch from "../../../components/icons/RocketLaunch";
import ArtistCard1 from "../../../components/Card/ArtistCard1";
import Button from "../../../components/Button/Button";
import HomeLayout from "../components/HomeLayout";

const TopCreators = () => {
  return (
    <HomeLayout>
      <Header
        title="Top creators"
        subtitle="Checkout Top Rated Creators on the NFT Marketplace"
        button={
          <Box sx={{ width: "247px", display: "flex", alignItems: "flex-end" }}>
            <Button
              type="secondary"
              icon={<RocketLaunch />}
              title={
                <Typography>View Rankings</Typography>
              }
              bgcolor="transparent"
              border="2px solid var(--main-color)"
            />
          </Box>
        }
      />
      <Grid container>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12].map((item) => (
          <Grid item key={item} lg={3}>
            <ArtistCard1 />
          </Grid>
        ))}
      </Grid>
    </HomeLayout >
  );
};

export default TopCreators;
