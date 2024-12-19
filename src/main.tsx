import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './styles.css';

// ! : Non-Null Assertion Operator, 분명히 존재하니 null check 하지 말것.
// 코드는 간결해지지만 권장되지 않음.
// as HTMLElement: Type Assertion Operator, ! 와 유사하지만 좀더 구체적
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
