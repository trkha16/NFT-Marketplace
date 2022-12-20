import { Box, Typography, Link } from "@mui/material";
import Logo from "../icons/Logo";
import Layout from "../layout/Layout";
import DiscordLogo from "../icons/DiscordLogo";
import YoutubeLogo from "../icons/YoutubeLogo";
import TwitterLogo from "../icons/TwitterLogo";
import InstagramLogo from "../icons/InstagramLogo";
import { styled } from "@mui/system";
import FooterForm from "./FooterForm";

const footerIcon = [
  { id: 1, icon: <DiscordLogo />, to: "#" },
  { id: 2, icon: <YoutubeLogo />, to: "#" },
  { id: 3, icon: <TwitterLogo />, to: "#" },
  { id: 4, icon: <InstagramLogo />, to: "#" },
];

const footerExplore = [
  { id: 1, title: "Marketplace", to: "#" },
  { id: 2, title: "Rankings", to: "#" },
  { id: 3, title: "Connect a wallet", to: "#" },
];

const MyFooterText = styled(Typography)({
  color: "#CCC",
});

const MyFooterLink = styled(Link)({
  color: "#CCC",
  textDecoration: "none",
});

const MyFooterCopyright = styled(Box)({
  borderTop: "1px solid var(--label-text)",
  paddingTop: "20px",
  marginTop: "50px",
});

const MyFooterWapper = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--background-secondary)",
  display: "flex",
  padding: "80px 0",
  [theme.breakpoints.between("md", "lg")]: {
    padding: "40px 0",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 0",
  },
}));

const MyFooterContent = styled(Box)(({ theme }) => ({
  display: "flex",
  justifyContent: "space-between",
  [theme.breakpoints.down("lg")]: {
    flexDirection: "column",
    gap: "30px",
  },
}));

const Footer = () => {
  return (
    <MyFooterWapper>
      <Layout>
        <Box>
          <MyFooterContent>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "30px",
                pr: "84px",
              }}
            >
              <Logo />
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <MyFooterText>
                  NFT marketplace UI created with Anima for Figma.
                </MyFooterText>
                <Box
                  sx={{ display: "flex", flexDirection: "column", gap: "15px" }}
                >
                  <MyFooterText>Join our community</MyFooterText>
                  <Box sx={{ display: "flex", gap: "10px" }}>
                    {footerIcon.map((item: any) => (
                      <MyFooterLink key={item.id} href={item.to}>
                        {item.icon}
                      </MyFooterLink>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                gap: "25px",
                width: "240px",
              }}
            >
              <Typography variant="h5">Explore</Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                {footerExplore.map((item: any) => (
                  <MyFooterLink href={item.to} key={item.id}>
                    {item.title}
                  </MyFooterLink>
                ))}
              </Box>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", gap: "30px" }}>
              <Typography variant="h5" fontFamily="Space Mono">
                Join Our Weekly Digest
              </Typography>
              <Box
                sx={{ display: "flex", flexDirection: "column", gap: "20px" }}
              >
                <Box sx={{ width: "330px" }}>
                  <MyFooterText>
                    Get exclusive promotions & updates straight to your inbox.
                  </MyFooterText>
                </Box>
              </Box>
              <FooterForm />
            </Box>
          </MyFooterContent>
          <MyFooterCopyright>
            <Typography sx={{ color: "#CCC", fontSize: "12px" }}>
              Ⓒ NFT Market. Use this template freely.
            </Typography>
          </MyFooterCopyright>
        </Box>
      </Layout>
    </MyFooterWapper>
  );
};

export default Footer;

