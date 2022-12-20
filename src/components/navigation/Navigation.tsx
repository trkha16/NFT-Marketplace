import { Box, Typography } from "@mui/material";
import { styled } from "@mui/system";
import Button from "../Button/Button";
import Logo from "../icons/Logo";
import User from "../icons/User";
import { Link } from "react-router-dom"

const menuItem = [
  {
    id: 1,
    title: "Marketplace",
    to: "#",
  },
  {
    id: 2,
    title: "Rankings",
    to: "#",
  },
  {
    id: 3,
    title: "Connect a wallet",
    to: "#",
  },
];

const MyLogo = styled(Link)({
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
});

const MyLink = styled(Link)({
  fontWeight: "600",
  color: "#ffffff",
  alignContent: "center",
  textDecoration: "none",
  "&:hover": {
    transform: "scale(0.95)",
  },
});

const Navigation = () => {
  return (
    <Box
      sx={{ display: "flex", justifyContent: "space-between", p: "20px 50px" }}
    >
      <MyLogo to="/">
        <Logo />
      </MyLogo>
      <Box
        sx={{
          display: "flex",
          justifyContent: "space-between",
          gap: "10px",
        }}
      >
        {menuItem.map((item) => (
          <Box
            key={item.id}
            sx={{
              p: "0 20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <MyLink to={item.to}>
              {item.title}
            </MyLink>
          </Box>
        ))}

        <Box sx={{ width: "152px" }}>
          <Button type="secondary"
            icon={<User />}
            title={<Typography fontWeight="600">Sign Up</Typography>}
          />
        </Box>
      </Box>
    </Box>
  );
};

export default Navigation;
