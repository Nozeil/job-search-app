import { PATHS } from '@/constants';
import { Vacancys } from '@/models';
import { useLayoutEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function useEmptyStateRedirect(data: Vacancys) {
  const location = useLocation();
  const navigate = useNavigate();

  useLayoutEffect(() => {
    if (!data.length) {
      navigate(PATHS.EMPTY_PAGE, { state: location.pathname });
    }
  }, [data, location.pathname, navigate]);
}
