import { styled } from "@mui/system";
import { Box, InputBase } from "@mui/material";

const MySubscribeForm = styled(Box)({
  width: "100%",
  display: "flex",
  flexDirection: "column",
  gap: "16px",
});
const MySubscribeInput = styled(Box)({
  backgroundColor: "#fff",
  borderRadius: "20px",
  ".MuiInputBase-input": {
    padding: "0",
  },
});

type SubscribeFormMobileProps = {
  button?: React.ReactNode;
}

const SubscribeFormMobile = ({ button }: SubscribeFormMobileProps) => {
  return (
    <MySubscribeForm>
      <MySubscribeInput>
        <InputBase
          placeholder="Enter your email here"
          fullWidth
          sx={{ p: "12px 20px" }}
        />
      </MySubscribeInput>
      {button}
    </MySubscribeForm >
  );
};

export default SubscribeFormMobile;
