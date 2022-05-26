import { useState, useEffect } from 'react';

const useIPFS = (hash, filename) => {
  const [file, setFile] = useState(null);

  useEffect(() => {
    setFile(`https://cf-ipfs.com/ipfs/${hash}?filename=${filename}`);
  }, []);

  return file;
};

export default useIPFS;
