import React from 'react';
import List from '../components/List/list';
import Multilist from '../components/List/Multilist';
import ImageList from '../components/List/ImageList';
import 'tailwindcss/tailwind.css';
import "../styles/globals.css";


export default {
  title: 'List',
};

export const SingleList = () => (
    <List/>
  );

  
  export const MultiList = () => (
    <Multilist/>
  );

  export const Imagelist = () => (
    <ImageList/>
  );