import { useLocation } from 'react-router-dom';

const useGender = (): string => {
  const { pathname } = useLocation();
  const genderMatch = pathname.match(/\/(men|women|kids)(\/category\/([^/]+))?/);
  const gender: string = (genderMatch && genderMatch[1]) || 'men';

  return gender;
};

export default useGender;
