/* eslint-disable */
import React from 'react';
import Header from './Header';

export default {
  title: "Header",
};

export const Default = () => <Header currentPage={'About'} />;

Default.story = {
  name: 'default',
};
