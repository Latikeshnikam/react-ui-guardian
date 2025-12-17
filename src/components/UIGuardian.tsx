import React from "react";
import { useUIGuardian } from "../hooks/useUIGuardian";
import { EmptyStateEngineInput } from "../engine/types";
import { UIState } from "../types/uiState";
import { DefaultFallback } from "./DefaultFallback";
import { UIGuardianFallbackComponent } from "./types";

type UIGuardianProps = EmptyStateEngineInput & {
    children: React.ReactNode;
    components?: Partial<Record<UIState, UIGuardianFallbackComponent>>;
};

export function UIGuardian({
    children,
    components = {},
    ...engineInput
}: UIGuardianProps) {
    const { state, shouldRenderFallback } = useUIGuardian(engineInput);

    if (!shouldRenderFallback) {
        return <>{children}</>;
    }

    const Fallback = components[state] ?? DefaultFallback;

    return <Fallback state={state} />;
}
