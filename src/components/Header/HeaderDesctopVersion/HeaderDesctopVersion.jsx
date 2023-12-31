import { Box, Button, Typography } from '@mui/material';
import { pages } from '../../../tools/utils';
import { headerTitle } from '../../../tools/muiComponentsStyles';

export const HeaderDesctopVersion = ({
  handleCloseNavMenu,
  btnLogoHandler,
  categoriesBtnHandler,
}) => (
  <>
    <Button sx={{ display: { xs: 'none', md: 'flex' } }} onClick={btnLogoHandler}>
      <Typography variant="h4" noWrap sx={headerTitle}>
        TMDB Portal
      </Typography>
    </Button>

    <Box sx={{ display: { xs: 'none', md: 'flex' } }} onClick={(e) => categoriesBtnHandler(e)}>
      {pages.map((page) => (
        <Button
          key={page}
          onClick={handleCloseNavMenu}
          sx={{ my: 2, mx: 1, color: 'white' }}
        >
          {page}
        </Button>
      ))}
    </Box>
  </>
);
