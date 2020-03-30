export type Elevation = 1 | 2 | 3 | 4 | 5;

export interface BaseProps {
  /**
   * Optional classNames.
   */
  className?: string;
  /**
   * Optional styled object.
   */
  style?: React.CSSProperties;
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'mwc-icon': any;
      'wired-button': any;
      'wired-calendar': any;
      'wired-card': any;
      'wired-checkbox': any;
      'wired-combo': any;
      'wired-dialog': any;
      'wired-divider': any;
      'wired-fab': any;
      'wired-icon-button': any;
      'wired-image': any;
      'wired-input': any;
      'wired-item': any;
      'wired-link': any;
      'wired-listbox': any;
      'wired-progress': any;
      'wired-radio-group': any;
      'wired-radio': any;
      'wired-search-input': any;
      'wired-slider': any;
      'wired-spinner': any;
      'wired-tab': any;
      'wired-tabs': any;
      'wired-textarea': any;
      'wired-toggle': any;
      'wired-video': any;
    }
  }
}
