import { Box, Button, Typography } from '@mui/material';
import { pages } from '../../../tools/utils';
import { headerTitle } from '../../../tools/muiComponentsStyles';

export const HeaderDesctopVersion = ({ handleCloseNavMenu }) => (
  <>
    <Button sx={{ display: { xs: 'none', md: 'flex' } }}>
      <Typography variant="h4" noWrap sx={headerTitle}>
        TMDB Portal
      </Typography>
    </Button>

    <Box sx={{ display: { xs: 'none', md: 'flex' } }}>
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
