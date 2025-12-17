import { UIState } from "../types/uiState";

export type UIGuardianResult = {
    state: UIState;
    shouldRenderFallback: boolean;
};
