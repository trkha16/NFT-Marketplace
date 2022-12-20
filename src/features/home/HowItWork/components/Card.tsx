import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import { HowItWorkData } from "../HowItWork";

const MyCard = styled(Box)(({ theme }) => ({
  backgroundColor: "var(--background-secondary)",
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  borderRadius: "20px",
  cursor: "pointer",
  width: "330px",
  height: "439px",
  padding: "10px 30px 30px",
  "&:hover": {
    transform: "scale(1.05)",
  },
  [theme.breakpoints.between("md", "lg")]: {
    width: "210px",
    height: "320px",
    padding: "10px 20px 30px",
  },
  [theme.breakpoints.down("md")]: {
    padding: "20px",
    width: "100%",
    height: "157px",
    flexDirection: "row",
    gap: "20px",
  },
}));

const MyCardImage = styled(Box)(({ theme }) => ({
  width: "250px",
  height: "250px",
  [theme.breakpoints.between("md", "lg")]: {
    width: "160px",
    height: "160px",
  },
  [theme.breakpoints.down("md")]: {
    width: "100px",
    height: "100px",
  },
}));

const MyCardContent = styled(Box)(({ theme }) => ({
  display: "flex",
  flexDirection: "column",
  justifyContent: "center",
  alignItems: "center",
  [theme.breakpoints.down("md")]: {
    flex: "1",
    alignItems: "start",
  },
}));

const Card = ({ imageUrl, title, desc }: HowItWorkData) => {
  return (
    <MyCard>
      <MyCardImage>
        <img src={imageUrl} alt="Card" width="100%" />
      </MyCardImage>

      <MyCardContent>
        <Typography
          variant="h5"
          sx={{
            fontSize: { lg: "22px", xs: "16px" },
          }}
        >
          {title}
        </Typography>
        <Typography
          variant="body1"
          sx={{
            mt: "10px",
            fontSize: { lg: "16px", xs: "12px" },
            textAlign: { md: "center", xs: "start" },
          }}
        >
          {desc}
        </Typography>
      </MyCardContent>
    </MyCard>
  );
};

export default Card;
