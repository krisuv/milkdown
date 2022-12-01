import { Button, createMuiTheme, ThemeProvider } from '@mui/material';
import { useCallback, useState,useEffect } from 'react';
import {Header, Wrapper, DataButton } from './assets/App.styles';
import Milkdown from './components/Editor';
import './styles.css';

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#F47F2E',
            light: '#f59756',
            dark: '#d1651b',
            contrastText: 'white'
        }
    }
})

const App = (): JSX.Element => {
  const [content, setContent] = useState('');
  const [html, setHTML] = useState<string | undefined>();

  const onTextChange = useCallback((ev: string) => setContent(ev), []);

  useEffect(() => {
      console.log(content)
  }, [content]);

  const displayHTML = () => {
      console.log('display HTML...');
  }

  return (
    <ThemeProvider theme={theme}>
        <Wrapper>
        <Header variant='h1'>Milkdown POC test</Header>
        <Milkdown onChange={onTextChange} value={content} setHTML={setHTML} spellcheck={false} />
          <DataButton onClick={displayHTML} variant='contained' color='primary'>Download HTML</DataButton>
        </Wrapper>
    </ThemeProvider>
  );
};

export default App;
