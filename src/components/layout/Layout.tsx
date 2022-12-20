import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MyLayout = styled(Box)(({ theme }) => ({
  maxWidth: "1050px",
  width: "1050px",
  margin: "0 auto",
  [theme.breakpoints.between("md", "lg")]: {
    maxWidth: "690px",
    width: "690px",
    margin: "0 auto",
  },
  [theme.breakpoints.down("md")]: {
    maxWidth: "315px",
    margin: "0 auto",
  },
}));

const Layout = ({ children }: { children: React.ReactNode }) => {
  return <MyLayout>{children}</MyLayout>;
};

export default Layout;
