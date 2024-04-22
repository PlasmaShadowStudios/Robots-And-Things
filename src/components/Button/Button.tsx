import * as React from 'react';
import Button from '@mui/material/Button';

interface Props {
   text: string;
   variant: any;
}

export default function PrimaryButton({text, variant='contained'} : Props) {
  return <Button variant={variant}>{text}</Button>;
}