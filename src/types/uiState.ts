/**
 * All possible UI states that react-ui-guardian can detect.
 * Order does NOT imply priority.
 */
export enum UIState {
  ERROR = 'ERROR',
  NO_PERMISSION = 'NO_PERMISSION',
  LOADING = 'LOADING',
  FILTER_EMPTY = 'FILTER_EMPTY',
  NO_DATA = 'NO_DATA',
  READY = 'READY',
}
