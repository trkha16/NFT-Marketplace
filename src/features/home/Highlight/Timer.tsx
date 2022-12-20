import { styled } from "@mui/system"
import { Box, Typography } from "@mui/material"

const MyTimer = styled(Box)(({ theme }) => ({
  background: "rgba(59, 59, 59, 0.5)",
  backdropFilter: "blur(5px)",
  borderRadius: "20px",
  padding: "30px",
  display: "flex",
  flexDirection: "column",
  gap: "10px",
  width: "295px",
  height: "100%",
  [theme.breakpoints.down("md")]: {
    width: "100%",
    margin: "30px 0",
  },
}))

const Timer = () => {
  return (
    <MyTimer>
      <Typography fontFamily="Space Mono">Auction ends in:</Typography>
      <Box sx={{ display: "flex", justifyContent: "space-between" }}>
        <Box>
          <Typography variant="h3" fontFamily="Space Mono">59</Typography>
          <Typography variant="caption" fontFamily="Space Mono">Hours</Typography>
        </Box>
        <Typography variant="h4">:</Typography>
        <Box>
          <Typography variant="h3" fontFamily="Space Mono">59</Typography>
          <Typography variant="caption" fontFamily="Space Mono">Minutes</Typography>
        </Box>
        <Typography variant="h4">:</Typography>
        <Box>
          <Typography variant="h3" fontFamily="Space Mono">59</Typography>
          <Typography variant="caption" fontFamily="Space Mono">Seconds</Typography>
        </Box>
      </Box>
    </MyTimer>
  )
}

export default Timer