import { describe, it, expect } from "vitest";
import { emptyStateEngine } from "../emptyStateEngine";
import { UIState } from "../../types/uiState";

describe("emptyStateEngine", () => {
    it("returns ERROR when error is present", () => {
        const result = emptyStateEngine({
            error: new Error("API failed"),
        });

        expect(result.state).toBe(UIState.ERROR);
        expect(result.shouldRenderFallback).toBe(true);
    });

    it("returns NO_PERMISSION when user lacks permission", () => {
        const result = emptyStateEngine({
            hasPermission: false,
        });

        expect(result.state).toBe(UIState.NO_PERMISSION);
        expect(result.shouldRenderFallback).toBe(true);
    });

    it("returns LOADING when loading is true", () => {
        const result = emptyStateEngine({
            loading: true,
        });

        expect(result.state).toBe(UIState.LOADING);
        expect(result.shouldRenderFallback).toBe(true);
    });

    it("returns FILTER_EMPTY when filters are applied and data is empty", () => {
        const result = emptyStateEngine({
            data: [],
            filtersApplied: true,
        });

        expect(result.state).toBe(UIState.FILTER_EMPTY);
        expect(result.shouldRenderFallback).toBe(true);
    });

    it("returns NO_DATA when data is empty and no filters are applied", () => {
        const result = emptyStateEngine({
            data: [],
        });

        expect(result.state).toBe(UIState.NO_DATA);
        expect(result.shouldRenderFallback).toBe(true);
    });

    it("returns READY when data is present", () => {
        const result = emptyStateEngine({
            data: [{ id: 1 }],
        });

        expect(result.state).toBe(UIState.READY);
        expect(result.shouldRenderFallback).toBe(false);
    });

    it("prioritizes ERROR over LOADING", () => {
        const result = emptyStateEngine({
            loading: true,
            error: new Error("Boom"),
        });

        expect(result.state).toBe(UIState.ERROR);
    });

    it("handles object data correctly", () => {
        const result = emptyStateEngine({
            data: { key: "value" },
        });

        expect(result.state).toBe(UIState.READY);
    });

    it("treats undefined data as NO_DATA", () => {
        const result = emptyStateEngine({});

        expect(result.state).toBe(UIState.NO_DATA);
    });
});
