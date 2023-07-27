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
