/* eslint-disable */
import React from "react";
import Button from "./Button";

export default {
  title: "Button",
};

export const Default = () => (
  <>
  <Button text={"contained"} variant={'contained'} onClick={() => {}} />
  <Button text={"outline"} variant={'outline'} onClick={() => {}} />
  <Button text={"text"} variant={'text'} onClick={() => {}} />
  </>
);

Default.story = {
  name: "default",
};
