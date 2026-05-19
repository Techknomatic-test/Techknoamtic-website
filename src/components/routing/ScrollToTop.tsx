import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { shouldOpenContactForm } from '../../config/contactNavigation';
import { shouldScrollToAccelerators } from '../../config/homeNavigation';

export const ScrollToTop = () => {
  const { pathname, state, search } = useLocation();

  useEffect(() => {
    if (shouldOpenContactForm(state, search)) return;
    if (shouldScrollToAccelerators(state, search)) return;
    window.__lenis?.scrollTo(0, { immediate: true });
    window.scrollTo(0, 0);
  }, [pathname, state, search]);

  return null;
};
