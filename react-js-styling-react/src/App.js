// import logo from './logo.svg';
import './App.css';
import {FixStyledButton, VarStyledButton, CssStyledButton} from './StyledComponent';

function App() {
  return <div>
    <div>
      <FixStyledButton>
        Hello World
      </FixStyledButton>
    </div>
    <div>
      <VarStyledButton color='green' background='light gray'>
        Hello World
      </VarStyledButton>
    </div>
    <div>
      <CssStyledButton>
        Hello World
      </CssStyledButton>
    </div>
  </div>;
}

export default App;
