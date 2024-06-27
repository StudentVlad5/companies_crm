import Header from '@/components/header';
import MagicButton from '@/components/magic-button';
import React from 'react';


export interface PageProps {}

export default function Page({}: PageProps) {
  return (
    <>
      <Header>Dashboard</Header>
      <MagicButton/>
    </>
  );
}