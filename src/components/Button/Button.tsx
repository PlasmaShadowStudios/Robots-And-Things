import * as React from "react";
import Button from "@mui/material/Button";

interface Props {
  text: string;
  variant?: any;
  onClick: () => any;
  className?: string;
  fontSize?: number;
}

export default function PrimaryButton({
  text,
  variant = "contained",
  className = "",
  fontSize = 24,
  onClick,
}: Props) {
  return (
    <Button
      sx={{ fontSize: 24 }}
      className={className}
      variant={variant}
      onClick={onClick}
    >
      {text}
    </Button>
  );
}
