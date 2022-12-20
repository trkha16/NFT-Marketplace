import { Box, Typography, Grid } from "@mui/material"
import { styled } from "@mui/system"
import ArtistCard3 from "./ArtistCard3"

const MyCard = styled(Box)({
  backgroundColor: "var(--background-secondary)",
  borderRadius: "20px",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(0.95)",
  },
})

const MyContent = styled(Box)(({ theme }) => ({
  padding: "20px 30px 25px",
  display: "flex",
  flexDirection: "column",
  gap: "25px",
  [theme.breakpoints.down("md")]: {
    padding: "20px 20px 25px",

  },
}))


const NFTCard = () => {
  return (
    <MyCard>
      <Box sx={{ height: { md: "auto", xs: "239px" }, borderRadius: "20px 20px 0 0" }}>
        <img src="https://res.cloudinary.com/trkha1609/image/upload/v1670571989/NFT-Marketplace/Image_eszkyq.png" alt="nft card" />
      </Box>
      <MyContent>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "5px" }}>
          <Typography variant="h5">NFT Name</Typography>
          <ArtistCard3 imgUrl="https://res.cloudinary.com/trkha1609/image/upload/v1670345833/NFT-Marketplace/Avatar_7_tgqle4.png"
            name={<Typography fontFamily="Space Mono">NFT Artist</Typography>}
            bgcolor="transparent"
            px="0"
            py="0"
          />
        </Box>
        <Grid container>
          <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", gap: "8px" }}>
            <Typography variant="caption" color="var(--label-text)" fontFamily="Space Mono">Price</Typography>
            <Typography fontFamily="Space Mono">1.63 ETH</Typography>
          </Grid>
          <Grid item xs={6} sx={{ display: "flex", flexDirection: "column", alignItems: "end", gap: "8px" }}>
            <Typography variant="caption" color="var(--label-text)" fontFamily="Space Mono">Highest Bid</Typography>
            <Typography fontFamily="Space Mono">0.33 wETH</Typography>
          </Grid>
        </Grid>

      </MyContent>
    </MyCard >
  )
}

export default NFTCard