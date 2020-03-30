# react-wired-elements

[Wired Elements](https://wiredjs.com/) as React components.

- Great for quick prototyping
- TypeScript types included 👍

## **[Storybook Demo]()**

> The Storybook Demo includes interactive examples as well as detailed documentation for each component's props and usage.

This library wraps each of the wired elements in a React component and exposes the available attributes, methods, and styling options as props (as best as possible).

There are some naming and functionality differences between Wired Elements and this library. This is due, in part, to differences in how React and web components work as well as an effort to follow common naming conventions/patterns in React.

> Since these are web components, they dispatch native events as opposed to React synthetic events.

## Known Issues

- `WiredTabs` just not working :/
- `maxRows` prop on `WiredTextArea` component not working
- `firstDate` and `lastDate` not working on `WiredCalendar`
- `knobRadius` not working on `WiredSlider`

## Installation

**Step 1.** Install this library with using `yarn` or `npm`.

```
yarn add react-wired-elements
```

**Step 2.** Include the Wired Elements and Material Icons packages in the head of your main HTML file.

**The `wired-elements` npm package will not work.**

```html
<head>
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    rel="stylesheet"
  />
  <script src="https://unpkg.com/wired-elements@2.0.5/lib/wired-elements-bundled.js"></script>
</head>
```

## Usage

```tsx
import React from 'react';
import { WiredButton } from 'react-wired-elements';

const App = () => {
  return (
    <div>
      <WiredButton onClick={handleSubmit}>Submit</WiredButton>
    </div>
  );
};
```

Checkout the [Storybook Demo]() for interactive examples and detailed prop definitions.

Here is the full list of components. Click any component to be directed to it's Storybook example.

- [WiredButton](http://localhost:6006/?path=/story/wiredbutton--default)
- [WiredCalendar](http://localhost:6006/?path=/story/wiredcalendar--default)
- [WiredCard](http://localhost:6006/?path=/story/wiredcard--default)
- [WiredCheckbox](http://localhost:6006/?path=/story/wiredcheckbox--default)
- [WiredCombo](http://localhost:6006/?path=/story/wiredcombo--default)
- [WiredDialog](http://localhost:6006/?path=/story/wireddialog--default)
- [WiredDivider](http://localhost:6006/?path=/story/wireddivider--default)
- [WiredFab](http://localhost:6006/?path=/story/wiredfab--default)
- [WiredIconButton](http://localhost:6006/?path=/story/wirediconbutton--default)
- [WiredImage](http://localhost:6006/?path=/story/wiredimage--default)
- [WiredInput](http://localhost:6006/?path=/story/wiredinput--default)
- [WiredItem](http://localhost:6006/?path=/story/wireditem--default)
- [WiredLink](http://localhost:6006/?path=/story/wiredlink--default)
- [WiredListbox](http://localhost:6006/?path=/story/wiredlistbox--default)
- [WiredProgress](http://localhost:6006/?path=/story/wiredprogress--default)
- [WiredRadio](http://localhost:6006/?path=/story/wiredradio--default)
- [WiredRadioGroup](http://localhost:6006/?path=/story/wiredradiogroup--default)
- [WiredSearchInput](http://localhost:6006/?path=/story/wiredsearchinput--default)
- [WiredSlider](http://localhost:6006/?path=/story/wiredslider--default)
- [WiredSpinner](http://localhost:6006/?path=/story/wiredspinner--default)
- [WiredTab](http://localhost:6006/?path=/story/wiredtab--default)
- [WiredTabs](http://localhost:6006/?path=/story/wiredtabs--default)
- [WiredTextarea](http://localhost:6006/?path=/story/wiredtextarea--default)
- [WiredToggle](http://localhost:6006/?path=/story/wiredtoggle--default)
- [WiredVideo](http://localhost:6006/?path=/story/wiredvideo--default)
