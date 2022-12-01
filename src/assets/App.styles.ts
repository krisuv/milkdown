import styled from "@emotion/styled";
import { Box, Button, Typography } from "@mui/material";

export const Wrapper = styled(Box)({
  margin: '100px 0',
  // backgroundColor: '#1f1f1f',
  color: 'white',
  marginInline: 'auto',
  width: 'min(70%, 1400px)',
  display: 'flex',
  flexDirection: 'column',
})

export const Header = styled(Typography)({
  marginBottom: '24px',
  fontSize: '3.5rem',
  fontFamily: 'Montserrat, sans-serif',
  fontWeight: 700,
  backgroundImage: 'linear-gradient(45deg, #F47F2E, white)',
  backgroundClip: 'text',
  color: 'transparent'
})

export const DataButton = styled(Button)({
  textAlign: 'center',
  fontFamily: 'Montserrat, sans-serif',
  marginTop: 32,
  fontWeight: 700,
  alignSelf: 'center',
  fontSize: '1rem',
})