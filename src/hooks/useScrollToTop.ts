import { useEffect } from 'react';

/**
 * Scrolls the window to the top when the component mounts.
 * Used by sub-pages (About, Services, Contact) that need to
 * reset scroll position on navigation.
 */
export function useScrollToTop() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
}
