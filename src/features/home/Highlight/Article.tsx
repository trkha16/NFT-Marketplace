import { Box, Typography } from "@mui/material"
import Button from "../../../components/Button/Button"
import ArtistCard from "../../../components/Card/ArtistCard3"
import Eye from "../../../components/icons/Eye"

const Article = () => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "30px", flex: "1" }}>
      <Box sx={{ width: "151px" }}>
        <ArtistCard
          imgUrl="https://res.cloudinary.com/trkha1609/image/upload/v1670345833/NFT-Marketplace/Avatar_7_tgqle4.png"
          name={
            <Typography>Shroomie</Typography>
          }
          py="10px"
        />
      </Box>
      <Typography sx={{ typography: { lg: "h2", xs: "h3" } }}>Magic Mashrooms</Typography>
      <Box sx={{ width: "198px", display: { md: "flex", xs: "none" } }}>
        <Button
          type="secondary"
          bgcolor="#fff"
          icon={<Eye />}
          title={<Typography color="var(--background-main)" fontWeight={600}>See NFT</Typography>}
        />
      </Box>
    </Box>
  )
}

export default Article