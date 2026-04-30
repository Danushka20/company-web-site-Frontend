import { useEffect, useRef } from 'react';

/**
 * Closes a dropdown when the user clicks outside the referenced element.
 *
 * @param isOpen  Current open state of the dropdown
 * @param onClose Callback to close the dropdown
 * @returns       A ref to attach to the dropdown container element
 */
export function useDropdownClose<T extends HTMLElement = HTMLDivElement>(
  isOpen: boolean,
  onClose: () => void,
) {
  const ref = useRef<T | null>(null);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    const handleOutsideClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        onClose();
      }
    };

    document.addEventListener('mousedown', handleOutsideClick);

    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
    };
  }, [isOpen, onClose]);

  return ref;
}
