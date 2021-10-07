import { useState } from 'react';
const useInputValue = (name) => {
  const [value, setValue] = useState('');
  const onChange = (e) => setValue(e.target.value);
  return [{ id: name, name, value, onChange }, setValue];
};
export default useInputValue;
