export enum VISIBILITY_FILTER {
    SHOW_HOME = 'SHOW_HOME',
    SHOW_OPINION = 'SHOW_OPINION',
    SHOW_WORLD = 'SHOW_WORLD'
}

export interface TodoFilter {
    label: string;
    value: VISIBILITY_FILTER;
}

export const initialFilters: TodoFilter[] = [
    { label: 'Home', value: VISIBILITY_FILTER.SHOW_HOME },
    { label: 'Opinion', value: VISIBILITY_FILTER.SHOW_OPINION },
    { label: 'World', value: VISIBILITY_FILTER.SHOW_WORLD }
];
