/* eslint-disable import/no-extraneous-dependencies */
import { useState } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import { HeaderMobileVersion } from './HeaderMobileVersion/HeaderMobileVersion';
import { HeaderDesctopVersion } from './HeaderDesctopVersion/HeaderDesctopVersion';
import { appBar } from '../tools/muiComponentsStyles';

export const Header = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static" sx={appBar}>
      <Container maxWidth="xl">
        <Toolbar disableGutters sx={{ display: 'flex', justifyContent: 'space-around' }}>

          <HeaderDesctopVersion
            handleCloseNavMenu={handleCloseNavMenu}
          />

          <HeaderMobileVersion
            anchorElNav={anchorElNav}
            handleOpenNavMenu={handleOpenNavMenu}
            handleCloseNavMenu={handleCloseNavMenu}
          />

        </Toolbar>
      </Container>
    </AppBar>
  );
};
