import { Box } from "@mui/material";
import { styled } from "@mui/system";
import Layout from "../../../components/layout/Layout";

const MyLayout = styled(Box)(({ theme }) => ({
  padding: "80px 0",
  [theme.breakpoints.between("md", "lg")]: {
    padding: "40px 0",
  },
  [theme.breakpoints.down("md")]: {
    padding: "40px 0",
  },
}));

const HomeLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <MyLayout>
      <Layout>
        {children}
      </Layout>
    </MyLayout>
  )
};

export default HomeLayout;
