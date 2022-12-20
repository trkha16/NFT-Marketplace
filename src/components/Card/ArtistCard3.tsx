import { styled } from "@mui/system"
import { Box } from "@mui/material"
import React from "react";

const MyContainer = styled(Box)((props: ArtistCardProps) => ({
  backgroundColor: props.bgcolor,
  padding: `${props.py} ${props.px}`,
  borderRadius: "20px",
  display: "flex",
  gap: "12px",
  alignItems: "center",
  width: "100%",
}))

const MyImage = styled(Box)({
  width: "24px",
  height: "24px "
})


export type ArtistCardProps = {
  imgUrl?: string,
  name?: React.ReactNode;
  py?: string;
  px?: string;
  bgcolor?: string;
}

const ArtistCard3 = ({ imgUrl, name, py = "20px", px = "20px", bgcolor = "var(--background-secondary)" }: ArtistCardProps) => {
  return (
    <MyContainer py={py} bgcolor={bgcolor} px={px}>
      <MyImage>
        <img src={imgUrl} alt="artist avatar" width="24px" height="24px" />
      </MyImage>
      {name}
    </MyContainer>
  )
}

export default ArtistCard3