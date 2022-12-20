import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MyHeroImg = styled(Box)(({ theme }) => ({
  width: "510px",
  height: "510px",
  cursor: "pointer",
  [theme.breakpoints.between("md", "lg")]: {
    width: "310px",
    height: "310px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100%",
    height: "100%",
  },
}));

const HeroSectionImage = () => {
  return (
    <MyHeroImg>
      <img
        src="https://cdn.animaapp.com/projects/6357ce7c8a65b2f16659918c/files/heroanimationtransparentbck-2.gif"
        alt="hero section"
        width="100%"
        height="100%"
      />
    </MyHeroImg>
  );
};

export default HeroSectionImage;
