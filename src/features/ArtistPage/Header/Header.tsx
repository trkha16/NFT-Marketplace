import { Box } from "@mui/material"
import { styled } from "@mui/system"
import Layout from "../../../components/layout/Layout"

const MyHeader = styled(Box)({
  position: "relative",
  height: "370px"
})


const MyAvatar = styled(Box)(({ theme }) => ({
  width: "124px",
  borderRadius: "20px",
  border: "2px solid var(--background-main)",
  position: "absolute",
  bottom: "0",
  cursor: "pointer",
  [theme.breakpoints.down("md")]: {
    left: "50%",
    transform: "translate(-50%)"
  },
}))

const Header = () => {
  return (
    <MyHeader>
      <Box sx={{ width: "100%", height: "320px" }}>
        <img src="https://res.cloudinary.com/trkha1609/image/upload/v1670671929/NFT-Marketplace/Image_PlaceHolder_sxnuzc.png" alt="cover" />
      </Box>
      <Layout>
        <MyAvatar>
          <Box sx={{ width: "120px", height: "120px" }}>
            <img src="https://res.cloudinary.com/trkha1609/image/upload/v1671358551/NFT-Marketplace/Avatar_Placeholder_1_rutfu9.png" alt="avatar" />
          </Box>
        </MyAvatar>
      </Layout>
    </MyHeader>
  )
}

export default Header