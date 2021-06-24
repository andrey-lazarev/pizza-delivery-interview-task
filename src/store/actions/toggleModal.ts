import { ToggleModal } from './types';
import { TOGGLE_MODAL } from './constants';

export const toggleModal = (
): ToggleModal => ({
  type: TOGGLE_MODAL,
});
