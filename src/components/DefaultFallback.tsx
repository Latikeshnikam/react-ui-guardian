import React from "react";
import { UIState } from "../types/uiState";
import { UIGuardianRenderProps } from "./types";

const messages: Record<UIState, string> = {
    [UIState.ERROR]: "Something went wrong.",
    [UIState.NO_PERMISSION]: "You do not have permission to view this content.",
    [UIState.LOADING]: "Loading...",
    [UIState.FILTER_EMPTY]: "No results match your filters.",
    [UIState.NO_DATA]: "No data available.",
    [UIState.READY]: "",
};

export function DefaultFallback({ state }: UIGuardianRenderProps) {
    if (state === UIState.READY) return null;

    const isError = state === UIState.ERROR;

    return (
        <div role={isError ? "alert" : "status"} aria-live="polite">
            {messages[state]}
        </div>
    );
}
