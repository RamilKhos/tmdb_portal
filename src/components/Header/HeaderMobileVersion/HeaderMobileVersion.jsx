import {
  Box, Button, IconButton, Menu, MenuItem, Typography,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { pages } from '../../../tools/utils';
import { headerTitleMobileVersion } from '../../../tools/muiComponentsStyles';

export const HeaderMobileVersion = ({
  anchorElNav,
  handleOpenNavMenu,
  handleCloseNavMenu,
  btnLogoHandler,
  categoriesBtnHandler,
}) => (
  <>
    <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
      <IconButton
        size="large"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenNavMenu}
        color="inherit"
      >
        <MenuIcon />
      </IconButton>

      <Menu
        id="menu-appbar"
        anchorEl={anchorElNav}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'left' }}
        keepMounted
        transformOrigin={{ vertical: 'top', horizontal: 'left' }}
        open={Boolean(anchorElNav)}
        onClose={handleCloseNavMenu}
        sx={{ display: { xs: 'block', md: 'none' } }}
        onClick={(e) => categoriesBtnHandler(e)}
      >
        {pages.map((page) => (
          <MenuItem key={page} onClick={handleCloseNavMenu}>
            <Typography textAlign="center">{page}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>

    <Button sx={{ display: { xs: 'flex', md: 'none' } }} onClick={btnLogoHandler}>
      <Typography variant="h4" noWrap sx={headerTitleMobileVersion}>
        TMDB Portal
      </Typography>
    </Button>
  </>
);
