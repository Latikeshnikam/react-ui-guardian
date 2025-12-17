import { useMemo } from "react";
import { emptyStateEngine } from "../engine/emptyStateEngine";
import { EmptyStateEngineInput } from "../engine/types";
import { UIGuardianResult } from "./types";

export function useUIGuardian(input: EmptyStateEngineInput): UIGuardianResult {
    const result = useMemo(() => {
        return emptyStateEngine(input);
    }, [
        input.data,
        input.loading,
        input.error,
        input.hasPermission,
        input.filtersApplied,
    ]);

    return result;
}
