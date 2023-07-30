import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const appBar = {
  background: 'linear-gradient(90deg, rgba(9,34,46,1) 0%, rgba(6,42,61,1) 28%, rgba(2,30,45,1) 100%)',
};

export const headerTitle = {
  mr: 2,
  display: { xs: 'none', md: 'flex' },
  fontFamily: 'Edu SA Beginner',
  fontWeight: 700,
  letterSpacing: '1px',
  textDecoration: 'none',
  background: 'linear-gradient(90deg, rgba(169,214,237,1) 0%, rgba(123,192,228,1) 28%, rgba(3,189,227,1) 100%)',
  backgroundClip: 'text',
  textFillColor: 'transparent',
};

export const headerTitleMobileVersion = {
  ...headerTitle,
  display: { xs: 'flex', md: 'none' },
  flexGrow: 1,
};

export const CssTextField = styled(TextField)({
  '& label': {
    color: 'white',
  },
  '& label.Mui-focused': {
    color: 'white',
  },
  '& .MuiInputBase-input': {
    color: 'white',
  },
  '& .MuiInput-underline:after': {
    borderBottomColor: 'white',
  },
  '& .MuiInput-underline:before': {
    borderBottomColor: 'white',
  },
});
