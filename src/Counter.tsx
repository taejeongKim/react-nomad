import Button from './Button';
import styles from './Counter.module.css';
import { useEffect, useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);
  const [keyword, setKeyword] = useState('');

  const handleClick = () => {
    setCount((prev) => prev + 1);
  };
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) =>
    setKeyword(event.target.value);
  console.log('I run all the time');

  // Rendering 을 제어한다.

  // 로딩 시 1번만 실행
  useEffect(() => {
    console.log('Call an api');
  }, []);

  // keyword가 변경된 때만 실행
  useEffect(() => {
    if (keyword === '' || keyword.length < 3) return;
    console.log('Search for', keyword);
  }, [keyword]);

  // count가 변경된 때만 실행
  useEffect(() => {
    console.log('I run only when count changes');
  }, [count]);

  return (
    <div>
      <input
        value={keyword}
        onChange={handleChange}
        type="text"
        placeholder="Search here..."
      />
      <h1 className={styles.title}>{count}</h1>
      <Button onClick={handleClick} text="Click" />
    </div>
  );
}

export default Counter;
