import { createAction } from '@ngrx/store';

export const ShowSpinner = createAction(
  '[UI] Show Spinner',
);

export const HideSpinner = createAction(
  '[UI] Hide Spinner',
);
