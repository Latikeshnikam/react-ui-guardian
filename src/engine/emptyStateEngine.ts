import { UIState } from "../types/uiState";
import { EmptyStateEngineInput, EmptyStateEngineResult } from "./types";

export function emptyStateEngine(
    input: EmptyStateEngineInput
): EmptyStateEngineResult {
    const {
        data,
        loading = false,
        error = null,
        hasPermission = true,
        filtersApplied = false,
    } = input;

    // 1. Error has priority
    if (error) {
        return { state: UIState.ERROR, shouldRenderFallback: true };
    }

    // 2. Permission check
    if (!hasPermission) {
        return { state: UIState.NO_PERMISSION, shouldRenderFallback: true };
    }

    // 3. Loading state
    if (loading) {
        return { state: UIState.LOADING, shouldRenderFallback: true };
    }

    // 4. Data existence check
    const hasData = Array.isArray(data)
        ? data.length > 0
        : data && typeof data === "object"
        ? Object.keys(data).length > 0
        : Boolean(data);

    // 5. Filtered empty
    if (!hasData && filtersApplied) {
        return { state: UIState.FILTER_EMPTY, shouldRenderFallback: true };
    }

    // 6. No data at all
    if (!hasData) {
        return { state: UIState.NO_DATA, shouldRenderFallback: true };
    }

    // 7. All good
    return { state: UIState.READY, shouldRenderFallback: false };
}
