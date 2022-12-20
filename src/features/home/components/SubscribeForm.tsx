import { styled } from "@mui/system";
import { Box, InputBase } from "@mui/material";

const MySubscribeForm = styled(Box)({
  display: "flex",
  width: "420px",
  backgroundColor: "#fff",
  borderRadius: "20px",
  gap: "12px",
});

type SubscribeFormProps = {
  button?: React.ReactNode;
}

const SubscribeForm = ({ button }: SubscribeFormProps) => {
  return (
    <MySubscribeForm>
      <InputBase placeholder="Enter your email here" sx={{ pl: "20px" }} />
      <Box sx={{ flex: "1" }}>
        {button}
      </Box>
    </MySubscribeForm>
  );
};

export default SubscribeForm;
