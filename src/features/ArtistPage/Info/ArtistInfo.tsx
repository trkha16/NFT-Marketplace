import Layout from '../../../components/layout/Layout'
import { Box, Typography } from "@mui/material"
import Button from '../../../components/Button/Button'

import { styled } from "@mui/system"
import CopyIcon from '../../../components/icons/CopyIcon'
import PlusIcon from '../../../components/icons/PlusIcon'
import Stats from '../../../components/Stats/Stats'
import { Link } from 'react-router-dom'
import GlobeIcon from '../../../components/icons/GlobeIcon'
import DiscordLogo from '../../../components/icons/DiscordLogo'
import YoutubeLogo from '../../../components/icons/YoutubeLogo'
import TwitterLogo from '../../../components/icons/TwitterLogo'
import InstagramLogo from '../../../components/icons/InstagramLogo'

const MyArtistInfo = styled(Box)(({ theme }) => ({
  padding: "40px 0",
  [theme.breakpoints.between("md", "lg")]: {
    padding: "30px 0",
  },
  [theme.breakpoints.down("md")]: {
    padding: "30px 0",
  },
}));

const MyHeader = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "30px",
  },
}))

const MyTitle = styled(Typography)({
  fontFamily: "Space Mono",
  fontWeight: "700",
  color: "var(--label-text)"
})

const MyButtonGroup = styled(Box)(({ theme }) => ({
  display: "flex",
  gap: "20px",
  [theme.breakpoints.down("md")]: {
    flexDirection: "column",
    gap: "20px",
  },
}))

const MyStats = styled(Box)(({ theme }) => ({
  width: "510px",
  [theme.breakpoints.down("md")]: {
    width: "100%"
  },
}))

const MyArtistName = styled(Typography)(({ theme }) => ({
  [theme.breakpoints.down("md")]: {
    textAlign: "center"
  },
}))

const ArtistInfo = () => {
  return (
    <MyArtistInfo>
      <Layout>
        <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
          <MyHeader>
            <MyArtistName sx={{ typography: { lg: "h2", md: "h3", xs: "h4" } }}>Animakid</MyArtistName>
            <MyButtonGroup>
              <Box sx={{ width: { md: "186px", xs: "100%" } }}>
                <Button type='secondary' icon={<CopyIcon />} title={<Typography fontWeight="600">0xc0E3...B79C</Typography>} />
              </Box>
              <Box sx={{ width: { md: "145px", xs: "100%" } }}>
                <Button type='secondary' icon={<PlusIcon />} title={<Typography>Follow</Typography>} bgcolor="transparent" border='2px solid var(--main-color)' />
              </Box>
            </MyButtonGroup>
          </MyHeader>
          <MyStats>
            <Stats />
          </MyStats>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <MyTitle>
              Bio
            </MyTitle>
            <Typography fontSize="22px">The Internet's Friendliest Designer Kid.</Typography>
          </Box>
          <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            <MyTitle variant='h5'>
              Links
            </MyTitle>
            <Box sx={{ display: "flex", gap: "10px" }}>
              <Link to="#">
                <GlobeIcon />
              </Link>
              <Link to="#">
                <DiscordLogo />
              </Link>
              <Link to="#">
                <YoutubeLogo />
              </Link>
              <Link to="#">
                <TwitterLogo />
              </Link>
              <Link to="#">
                <InstagramLogo />
              </Link>
            </Box>
          </Box>
        </Box>
      </Layout>
    </MyArtistInfo>
  )
}

export default ArtistInfo