import { Box } from "@mui/material"
import { styled } from "@mui/system";
import { InputHTMLAttributes } from "react";

const MyInput = styled(Box)({})

type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  icon?: React.ReactNode;
}

const Input = ({ icon }: InputProps) => {
  return (
    <MyInput>
      <Box>
        {icon}
      </Box>
    </MyInput>
  )
}

export default Input