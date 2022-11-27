import { useCallback, useState } from 'react';
import { Wrapper } from './assets/App.styles';
import Milkdown from './components/Editor';

import './styles.css';

const App = (): JSX.Element => {
  const [content, setContent] = useState('');

  const onTextChange = useCallback((ev: string) => setContent(ev), []);

  console.log(content);

  return (
    <Wrapper>
      <h1>Test</h1>
      <Milkdown onChange={onTextChange} value={content} spellcheck={false} />
    </Wrapper>
  );
};

export default App;
