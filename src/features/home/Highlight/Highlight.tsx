import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material"
import Button from "../../../components/Button/Button"
import Eye from "../../../components/icons/Eye"
import Timer from "./Timer"
import Article from "./Article"

const MyHighlight = styled(Box)({
  backgroundImage: 'url("https://res.cloudinary.com/trkha1609/image/upload/v1670232480/NFT-Marketplace/mushroomBg_ycbrfi.png")',
  backgroundSize: "cover",
  height: "640px",
})

const MyLinearBackground = styled(Box)({
  background: 'linear-gradient(180deg, rgba(162, 89, 255, 0) 0%, #A259FF 100%)',
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "center",
  alignItems: "end",
  paddingBottom: "60px",
  order: "0",

})

const MyContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "flex-end",
  alignItems: "flex-end",
  margin: "0 auto",
  width: "1050px",
  [theme.breakpoints.between("md", "lg")]: {
    width: "670px",
  },
  [theme.breakpoints.down("md")]: {
    width: "315px",
    flexDirection: "column",
  },
}))

const Highlight = () => {
  return (
    <MyHighlight>
      <MyLinearBackground>
        <MyContent>
          <Article />
          <Timer />
          <Box sx={{ width: "100%", display: { md: "none", xs: "flex" } }}>
            <Button
              type="secondary"
              bgcolor="#fff"
              icon={<Eye />}
              title={<Typography color="var(--background-main)" fontWeight={600}>See NFT</Typography>}
            />
          </Box>
        </MyContent>
      </MyLinearBackground>
    </MyHighlight >
  )
}

export default Highlight