import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";

const MyHeader = styled(Box)({
  width: "100%",
  height: "100%",
  display: "flex",
  justifyContent: "space-between"
})

type HeaderProps = {
  title?: string;
  subtitle?: string;
  button?: React.ReactNode;
}

const Header = ({ title, subtitle, button }: HeaderProps) => {
  return (
    <MyHeader sx={{ mb: { lg: "60px", xs: "40px" } }}>
      <Box>
        <Typography sx={{ typography: { lg: "h3", xs: "h4" } }}>
          {title}
        </Typography>
        <Typography sx={{ fontSize: { lg: "22px", xs: "16px" }, mt: "10px" }}>
          {subtitle}
        </Typography>
      </Box>
      {button ?
        (button) : null}
    </MyHeader>
  );
};

export default Header;
