import { Box, Typography } from "@mui/material";
import SubscribeForm from "../../features/home/components/SubscribeForm";
import SubscribeFormMobile from "../../features/home/components/SubscribeFormMobile";
import Button from "../Button/Button";

import Envelope from "../icons/Envelope";

const FooterForm = () => {
  return (
    <>
      {/* Button laptop */}
      <Box sx={{ display: { md: "flex", xs: "none" } }}>
        <SubscribeForm
          button={
            <Button
              type="secondary"
              title={<Typography fontWeight="600">Subscribe</Typography>}
            />}
        />
      </Box>
      {/* Button tablet & mobile */}
      <Box sx={{ display: { md: "none", xs: "flex" } }}>
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

export default FooterForm;
