import { Box } from "@mui/material";
import { styled } from "@mui/system";

const MyButton = styled(Box)((props: ButtonProps) => ({
  backgroundColor: props.bgColor,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: props.radius,
  cursor: "pointer",
  width: "100%",
  height:
    props.type === "primary"
      ? "72px"
      : props.type === "secondary"
        ? "60px"
        : props.type === "tertiary"
          ? "46px" : "100%",
  "&:hover": {
    transform: "scale(0.95)",
  },
  border: props.border,
}));

type ButtonProps = {
  bgColor?: string;
  onClick?: () => void;
  type: "primary" | "secondary" | "tertiary" | "full";
  radius?: string;
  icon?: React.ReactNode;
  title?: React.ReactNode;
  border?: string;
}

const Button = ({
  bgColor = "var(--main-color)",
  onClick,
  type,
  icon,
  title,
  border = "none",
  radius = "20px",
  ...props
}: ButtonProps) => {
  return (
    <MyButton type={type} bgColor={bgColor} radius={radius} border={border} {...props}>
      <Box sx={{ display: "flex", gap: "12px" }}>
        {icon}
        {title}
      </Box>
    </MyButton>
  );
};

export default Button;
