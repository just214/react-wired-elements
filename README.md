# react-wired-elements

[Wired Elements](https://wiredjs.com/) as React components.

<img style="width: 80%;" src="https://res.cloudinary.com/gojutin/image/upload/v1585680913/react-wired-elements/react-wired-elements-image.png" />

- Great for quick prototyping
- TypeScript types included 👍

## **[Storybook Demo](https://react-wired-elements.netlify.com)**

> The Storybook Demo includes interactive examples as well as detailed documentation for each component's props and usage.

[Wired Elements](https://wiredjs.com/) is a really cool library that provides web components with a wireframe look using SVGs. This library wraps each of the wired elements in a React component and exposes the available attributes, methods, and styling options as props (as best as possible).

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
import { WiredCard, WiredButton } from 'react-wired-elements';

const App = () => {
  return (
    <WiredCard fill="dodgerblue" elevation={3}>
      <WiredButton onClick={handleSubmit}>Submit</WiredButton>
    </WiredCard>
  );
};
```

Checkout the [Storybook Demo](https://react-wired-elements.netlify.com) for interactive examples and detailed prop definitions and usage instructions.

Here is the full list of components. Click any component to be directed to it's Storybook example.

- [WiredButton](https://react-wired-elements.netlify.com/?path=/story/wiredbutton--default)
- [WiredCalendar](https://react-wired-elements.netlify.com/?path=/story/wiredcalendar--default)
- [WiredCard](https://react-wired-elements.netlify.com/?path=/story/wiredcard--default)
- [WiredCheckbox](https://react-wired-elements.netlify.com/?path=/story/wiredcheckbox--default)
- [WiredCombo](https://react-wired-elements.netlify.com/?path=/story/wiredcombo--default)
- [WiredDialog](https://react-wired-elements.netlify.com/?path=/story/wireddialog--default)
- [WiredDivider](https://react-wired-elements.netlify.com/?path=/story/wireddivider--default)
- [WiredFab](https://react-wired-elements.netlify.com/?path=/story/wiredfab--default)
- [WiredIconButton](https://react-wired-elements.netlify.com/?path=/story/wirediconbutton--default)
- [WiredImage](https://react-wired-elements.netlify.com/?path=/story/wiredimage--default)
- [WiredInput](https://react-wired-elements.netlify.com/?path=/story/wiredinput--default)
- [WiredItem](https://react-wired-elements.netlify.com/?path=/story/wireditem--default)
- [WiredLink](https://react-wired-elements.netlify.com/?path=/story/wiredlink--default)
- [WiredListbox](https://react-wired-elements.netlify.com/?path=/story/wiredlistbox--default)
- [WiredProgress](https://react-wired-elements.netlify.com/?path=/story/wiredprogress--default)
- [WiredRadio](https://react-wired-elements.netlify.com/?path=/story/wiredradio--default)
- [WiredRadioGroup](https://react-wired-elements.netlify.com/?path=/story/wiredradiogroup--default)
- [WiredSearchInput](https://react-wired-elements.netlify.com/?path=/story/wiredsearchinput--default)
- [WiredSlider](https://react-wired-elements.netlify.com/?path=/story/wiredslider--default)
- [WiredSpinner](https://react-wired-elements.netlify.com/?path=/story/wiredspinner--default)
- [WiredTab](https://react-wired-elements.netlify.com/?path=/story/wiredtab--default)
- [WiredTabs](https://react-wired-elements.netlify.com/?path=/story/wiredtabs--default)
- [WiredTextarea](https://react-wired-elements.netlify.com/?path=/story/wiredtextarea--default)
- [WiredToggle](https://react-wired-elements.netlify.com/?path=/story/wiredtoggle--default)
- [WiredVideo](https://react-wired-elements.netlify.com/?path=/story/wiredvideo--default)

## Differences and Known Issues

There are some naming and functionality differences between Wired Elements and this library. This is due, in part, to differences in how React and web components work as well as an effort to follow common naming conventions/patterns in React. Since these are web components, they dispatch native events as opposed to React synthetic events.

- `WiredTabs` just not working :/
- `maxRows` prop on `WiredTextArea` component not working
- `firstDate` and `lastDate` not working on `WiredCalendar`
- `knobRadius` not working on `WiredSlider`
