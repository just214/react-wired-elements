## 0.1.6

07/29/2020

- Upgraded to wired-elements v `2.1.2` and updated to latest import path.
- Updated deps.

## 0.1.4

04/01/2020

- Defaulted `WiredInput` and `WiredSearchInput`'s `value` and `placeholder` props to empty strings to prevent initial value of "undefined"
- Fixed issue where `WiredSearchInput` wasn't clearing the state when the "clear" button was clicked.

## 0.1.3

04/01/2020

- Updated to use `wired-elements` cjs bundle.

## 0.1.2

04/01/2020

- Included `wired-elements` as a dependency.
- Fixed `WiredTabs` component (previously not working).
- Refactored `WiredItem` to utilize controlled input. Mainly for `WiredTabs`.
- Fixed various bugs.
- Fixed casing on components to match TitleCase format.
- Added unit tests for each component.
- Fixed issue with `zeroKnobColor` prop on `WiredSlider`

## 0.1.1

03/31/2020

- Added `stuckAt` prop to `WiredProgress` component.
