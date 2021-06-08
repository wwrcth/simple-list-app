import { createFeatureSelector } from '@ngrx/store';

import { State } from './index';

export const rootSelector = createFeatureSelector<State>('core');
