import { UIState } from "../types/uiState";

export type EmptyStateEngineInput = {
    data?: unknown;
    loading?: boolean;
    error?: Error | null;
    hasPermission?: boolean;
    filtersApplied?: boolean;
};

export type EmptyStateEngineResult = {
    state: UIState;
    shouldRenderFallback: boolean;
};
