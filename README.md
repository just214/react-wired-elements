# react-wired-elements

[Wired Elements](https://wiredjs.com/) as React components.

- Great for quick prototyping
- TypeScript types included 👍

## **[Storybook Demo](https://www.react-wired-elements.netlify.com)**

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

Checkout the [Storybook Demo](https://www.react-wired-elements.netlify.com) for interactive examples and detailed prop definitions and usage instructions.

Here is the full list of components. Click any component to be directed to it's Storybook example.

- [WiredButton](https://www.react-wired-elements.netlify.com/?path=/story/wiredbutton--default)
- [WiredCalendar](https://www.react-wired-elements.netlify.com/?path=/story/wiredcalendar--default)
- [WiredCard](https://www.react-wired-elements.netlify.com/?path=/story/wiredcard--default)
- [WiredCheckbox](https://www.react-wired-elements.netlify.com/?path=/story/wiredcheckbox--default)
- [WiredCombo](https://www.react-wired-elements.netlify.com/?path=/story/wiredcombo--default)
- [WiredDialog](https://www.react-wired-elements.netlify.com/?path=/story/wireddialog--default)
- [WiredDivider](https://www.react-wired-elements.netlify.com/?path=/story/wireddivider--default)
- [WiredFab](https://www.react-wired-elements.netlify.com/?path=/story/wiredfab--default)
- [WiredIconButton](https://www.react-wired-elements.netlify.com/?path=/story/wirediconbutton--default)
- [WiredImage](https://www.react-wired-elements.netlify.com/?path=/story/wiredimage--default)
- [WiredInput](https://www.react-wired-elements.netlify.com/?path=/story/wiredinput--default)
- [WiredItem](https://www.react-wired-elements.netlify.com/?path=/story/wireditem--default)
- [WiredLink](https://www.react-wired-elements.netlify.com/?path=/story/wiredlink--default)
- [WiredListbox](https://www.react-wired-elements.netlify.com/?path=/story/wiredlistbox--default)
- [WiredProgress](https://www.react-wired-elements.netlify.com/?path=/story/wiredprogress--default)
- [WiredRadio](https://www.react-wired-elements.netlify.com/?path=/story/wiredradio--default)
- [WiredRadioGroup](https://www.react-wired-elements.netlify.com/?path=/story/wiredradiogroup--default)
- [WiredSearchInput](https://www.react-wired-elements.netlify.com/?path=/story/wiredsearchinput--default)
- [WiredSlider](https://www.react-wired-elements.netlify.com/?path=/story/wiredslider--default)
- [WiredSpinner](https://www.react-wired-elements.netlify.com/?path=/story/wiredspinner--default)
- [WiredTab](https://www.react-wired-elements.netlify.com/?path=/story/wiredtab--default)
- [WiredTabs](https://www.react-wired-elements.netlify.com/?path=/story/wiredtabs--default)
- [WiredTextarea](https://www.react-wired-elements.netlify.com/?path=/story/wiredtextarea--default)
- [WiredToggle](https://www.react-wired-elements.netlify.com/?path=/story/wiredtoggle--default)
- [WiredVideo](https://www.react-wired-elements.netlify.com/?path=/story/wiredvideo--default)
