
import React from 'react';

const InputArea = ({ value, onChange }) => {
  return (
    <textarea
    placeholder=''
      value={value}
      onChange={onChange}
      rows={4}
      cols={50}
    />
  );
};

export default InputArea;