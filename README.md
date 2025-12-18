# react-ui-guardian

[![npm version](https://img.shields.io/npm/v/react-ui-guardian.svg)](https://www.npmjs.com/package/react-ui-guardian)
[![npm downloads](https://img.shields.io/npm/dm/react-ui-guardian.svg)](https://www.npmjs.com/package/react-ui-guardian)
[![bundle size](https://img.shields.io/bundlephobia/minzip/react-ui-guardian)](https://bundlephobia.com/package/react-ui-guardian)
[![Build](https://github.com/Latikeshnikam/react-ui-guardian/actions/workflows/ci.yml/badge.svg)](https://github.com/Latikeshnikam/react-ui-guardian/actions/workflows/ci.yml)
[![license](https://img.shields.io/npm/l/react-ui-guardian.svg)](LICENSE)

**Protect your React UI from empty, error, and broken states — intelligently.**

`react-ui-guardian` is a lightweight React library that standardizes how you handle  
**loading**, **error**, **empty**, and **permission** states across your application —  
without repetitive `if/else` logic.

It is **logic-first**, **headless-friendly**, and **accessible by default**.

---

## ✨ Why react-ui-guardian?

In real-world React apps, every screen ends up with code like this:

```tsx
if (loading) return <Loader />;
if (error) return <Error />;
if (!data.length) return <Empty />;
return <Table />;
```

This logic gets duplicated everywhere and becomes inconsistent.

`react-ui-guardian` solves this by:

-   Detecting UI states centrally
-   Enforcing consistent priority rules
-   Allowing flexible UI customization
-   Staying framework-agnostic and lightweight

---

## 🚀 Installation

```bash
npm install react-ui-guardian
```

## 📦 Basic Usage

Use `<UIGuardian />` to automatically guard your UI.

```tsx
import { UIGuardian } from "react-ui-guardian";

<UIGuardian
    data={users}
    loading={isLoading}
    error={error}
    hasPermission={hasPermission}
    filtersApplied={filtersApplied}
>
    <UsersTable data={users} />
</UIGuardian>;
```

### What happens

-   Shows loading UI while fetching
-   Shows error UI if request fails
-   Shows empty UI when no data exists
-   Renders children only when data is ready

---

## 🎨 Custom Fallback UI (Per State)

Override fallback UI for specific states.

```tsx
import { UIGuardian, UIState } from "react-ui-guardian";

<UIGuardian
    data={users}
    loading={isLoading}
    error={error}
    components={{
        [UIState.ERROR]: ErrorState,
        [UIState.NO_DATA]: EmptyState,
        [UIState.FILTER_EMPTY]: NoResultsState,
    }}
>
    <UsersTable data={users} />
</UIGuardian>;
```

Each fallback component receives:

```tsx
{
    state: UIState;
}
```

---

## 🧠 Headless Usage (Hook Only)

For full control, use the useUIGuardian hook directly.

```tsx
import { useUIGuardian, UIState } from "react-ui-guardian";

const ui = useUIGuardian({
    data,
    loading,
    error,
    hasPermission,
    filtersApplied,
});

if (ui.shouldRenderFallback) {
    switch (ui.state) {
        case UIState.ERROR:
            return <ErrorUI />;
        case UIState.NO_DATA:
            return <EmptyUI />;
        default:
            return <LoadingUI />;
    }
}

return <UsersTable data={data} />;
```

---

## 🧩 Supported UI States

| State           | Description                    |
| --------------- | ------------------------------ |
| `ERROR`         | API or runtime error           |
| `NO_PERMISSION` | User lacks access              |
| `LOADING`       | Data is being fetched          |
| `FILTER_EMPTY`  | Filters applied but no results |
| `NO_DATA`       | No data available              |
| `READY`         | Data is ready                  |

---

## Priority Order

```tsx
ERROR → NO_PERMISSION → LOADING → FILTER_EMPTY → NO_DATA → READY
```

---

## ♿ Accessibility

-   Errors use role="alert"
-   Status updates use aria-live="polite"
-   No visual-only cues
-   Screen-reader friendly by default

---

## ⚡ Performance

-   Memoized logic using useMemo
-   No deep comparisons
-   No unnecessary re-renders
-   Tree-shakeable and side-effect free
-   For best performance, pass stable references for data and error

---

## 🛡️ Design Principles

-   Logic-first architecture
-   Headless by default
-   UI optional and customizable
-   No styling assumptions
-   No external dependencies

---

## 📍 When to Use

-   Dashboards
-   Tables & lists
-   Admin panels
-   Analytics screens
-   Enterprise React apps
