import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material"

const MySignupPage = styled(Box)({
  display: "flex",
  gap: "60px"

})

const MyBackground = styled(Box)({
  height: "650px",
})

const MyForm = styled(Box)({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center"
})



const Signup = () => {
  return (
    <MySignupPage>
      <MyBackground>
        <img src="https://res.cloudinary.com/trkha1609/image/upload/v1671377697/NFT-Marketplace/Image_Placeholder_1_hrutbj.png" alt="background signup" />
      </MyBackground>
      <MyForm>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "20px", width: "460px" }}>
          <Typography variant="h2">Create Account</Typography>
          <Typography fontSize="22px">Welcome! enter your details and start creating, collecting and selling NFTs.</Typography>
        </Box>
      </MyForm>
    </MySignupPage>
  )
}

export default Signup