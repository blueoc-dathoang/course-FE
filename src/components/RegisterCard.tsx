import { Box, Card, Typography } from "@mui/material";

type RegisterCardProps = {
  image: string;
  title: string;
  desc: string;
};

const RegisterCard = ({ image, title, desc }: RegisterCardProps) => {
  return (
    <Card
      className="cardHover"
      sx={{
        boxShadow: 3,
        padding: 1,
        paddingTop: 2,
        paddingBottom: 5,
        border: "1px solid transparent",
        ":hover": {
          border: "1px solid #1e5fbf",  
          boxShadow: 6,
        },
      }}
    >
      <Box
        component={"img"}
        sx={{ maxWidth: "270px", maxHeight: "216px", marginBottom: "10px" }}
        src={image}
      ></Box>
      <Typography
        variant="h2"
        sx={{
          color: "rgb(45, 69, 84)",
          fontSize: "24px",
          fontWeight: 700,
          lineHeight: "28px",
          letterSpacing: "0.13px",
          marginBottom: "6px",
        }}
      >
        {title}
      </Typography>
      <Typography sx={{ color: "rgb(45, 69, 84)" }}>{desc}</Typography>
    </Card>
  );
};

export default RegisterCard;
