import { Box, Typography } from "@mui/material";

interface IData {
  id: number;
  amount: string;
  title: string;
}

const data: IData[] = [
  {
    id: 1,
    amount: "240k+",
    title: "Total Sale",
  },
  {
    id: 2,
    amount: "100k+",
    title: "Auctions",
  },
  {
    id: 3,
    amount: "240k+",
    title: "Artists",
  },
];

const Stats = () => {
  return (
    <Box sx={{ display: "flex", justifyContent: "space-between" }}>
      {data.map((item: IData) => (
        <Box key={item.id} sx={{ width: "30%" }}>
          <Typography
            fontFamily="Space Mono"
            fontWeight="700"
            sx={{ typography: { lg: "h4", xs: "h5" } }}
          >
            {item.amount}
          </Typography>
          <Typography sx={{ fontSize: { lg: "24px", xs: "16px" } }}>
            {item.title}
          </Typography>
        </Box>
      ))}
    </Box>
  );
};

export default Stats;
