import { styled } from "@mui/system";
import { Grid, Box, Typography } from "@mui/material";
import { HomeCategoryProps } from "../BrowseCategories";

const MyCard = styled(Box)({
  backgroundColor: "var(--background-secondary)",
  borderRadius: "20px",
  height: "auto",
  minHeight: "100%",
  cursor: "pointer",
  "&:hover": {
    transform: "scale(0.95)",
  },
});

const MyCardImage = styled(Box)(({ theme }) => ({
  position: "relative",
  width: "100%",
  height: "240px",
  borderTopLeftRadius: "inherit",
  borderTopRightRadius: "inherit",
  [theme.breakpoints.down("lg")]: {
    height: "142px",
  },
}));

const MyCardBlurImage = styled(Box)({
  position: "absolute",
  top: 0,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100%",
  height: "100%",
  background: "rgba(255, 255, 255, 0.1)",
  backdropFilter: "blur(7.5px)",
  borderRadius: "inherit",
});

const MyBlurIcon = styled(Box)(({ theme }) => ({
  width: "100px",
  heigth: "100px",
  [theme.breakpoints.down("lg")]: {
    width: "80px",
    height: "80px",
  },
}));

const Card = (props: HomeCategoryProps) => {
  return (
    <Grid item md={3} xs={6}>
      <MyCard>
        <MyCardImage>
          <img src={props.imageUrl} alt="cate" width="100%" height="100%" />
          <MyCardBlurImage>
            <MyBlurIcon>{props.cateIcon}</MyBlurIcon>
          </MyCardBlurImage>
        </MyCardImage>
        <Typography
          variant="h5"
          sx={{ m: "20px 30px 25px", fontSize: { lg: "22px", xs: "16px" } }}
        >
          {props.category}
        </Typography>
      </MyCard>
    </Grid>
  );
};

export default Card;
