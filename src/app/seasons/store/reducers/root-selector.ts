import { createFeatureSelector } from '@ngrx/store';

import { State } from './';

export const rootSelector = createFeatureSelector<State>('seasons');
