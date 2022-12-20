import { Box, Typography } from "@mui/material";
import Button from "../../../../components/Button/Button";
import { styled } from "@mui/system";
import ArtistCard from "../../../../components/Card/ArtistCard3";

const MyImage = styled(Box)({
  borderRadius: "20px",
  flex: "1",
  "&:hover": {
    transform: "scale(0.95)",
  },
  cursor: "pointer"
})

const CollectionCard = ({ ...props }) => {
  return (
    <Box sx={{ display: "flex", flexDirection: "column", gap: "15px" }}>
      <MyImage>
        <img src={props.img1} alt="Dog" />
      </MyImage>
      <Box sx={{ display: "flex", justifyContent: "space-between", gap: "15px" }}>
        <MyImage>
          <img src={props.img2} alt="Dog" width="100%" />
        </MyImage>
        <MyImage>
          <img src={props.img3} alt="Dog" width="100%" />
        </MyImage>
        <MyImage>
          <Button
            type="full"
            title={
              <Typography variant="h5" fontFamily="Space Mono">1025+</Typography>
            }
          />
        </MyImage>
      </Box>
      <Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        <Typography variant="h5">{props.collectName}</Typography>
        <ArtistCard
          imgUrl={props.avaUser}
          name={props.userName}
          bgcolor="transparent"
          px="0"
          py="0"
        />
      </Box>
    </Box>
  );
};

export default CollectionCard;
