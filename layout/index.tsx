// React, NextJS imports
import React from 'react';

// Internal Components imports
import { Box } from '../blocks';
import { ContentLayout } from '../common'
import FooterSection from '../sections/Footer';
import HeaderSection from '../sections/Header';

export default function Layout({ children }) {
  return (
    <Box
      display="flex"
      flexDirection="column"
      gap="spacing-lg"
      minHeight="100vh"
    >
      <HeaderSection />
      <ContentLayout>
        {children}
      </ContentLayout>
      <FooterSection />
    </Box>
  );
}
