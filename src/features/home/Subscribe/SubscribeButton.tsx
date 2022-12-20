import { Box, Typography } from "@mui/material";
import Button from "../../../components/Button/Button";
import Envelope from "../../../components/icons/Envelope";
import SubscribeForm from "../components/SubscribeForm";
import SubscribeFormMobile from "../components/SubscribeFormMobile";

const SubscribeButton = () => {
  return (
    <>
      {/* Button laptop */}
      <Box sx={{ display: { lg: "flex", xs: "none" } }}>
        <SubscribeForm
          button={
            <Button
              type="secondary"
              icon={<Envelope />}
              title={<Typography fontWeight="600">Subscribe</Typography>}
            />
          }
        />

      </Box>
      {/* Button tablet & mobile */}
      <Box sx={{ display: { lg: "none", xs: "flex" } }}>
        <SubscribeFormMobile
          button={
            <Button
              type="tertiary"
              icon={<Envelope />}
              title={<Typography fontWeight="600">Subscribe</Typography>}
            />
          }
        />
      </Box>
    </>
  );
};

export default SubscribeButton;
