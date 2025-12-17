import { UIState } from "../types/uiState";

export type UIGuardianRenderProps = {
    state: UIState;
};

export type UIGuardianFallbackComponent =
    React.ComponentType<UIGuardianRenderProps>;
