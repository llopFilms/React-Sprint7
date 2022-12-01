import { useSearchParams } from 'react-router-dom';

export const useParametres = () => {
  const [parametres, setParametres] = useSearchParams({});
  return { parametres, setParametres };
}
