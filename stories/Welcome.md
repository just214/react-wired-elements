# react-wired-elements

[Wired Elements](https://wiredjs.com/) as React components.

<img style="width: 80%;" src="https://res.cloudinary.com/gojutin/image/upload/v1585680913/react-wired-elements/react-wired-elements-image.png" />

- Great for quick prototyping
- TypeScript types included 👍

[Wired Elements](https://wiredjs.com/) is a really cool library that provides web components with a wireframe look using SVGs. This library wraps each of the wired elements in a React component and exposes the available attributes, methods, and styling options as props (as best as possible).

## Installation

**Step 1.** Install this library with using `yarn` or `npm`.

```
yarn add react-wired-elements
```

**Step 2.** Include the Material Icons packages in the head of your main HTML file.

```html
<head>
  <link
    href="https://fonts.googleapis.com/css?family=Material+Icons&display=block"
    rel="stylesheet"
  />
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

## Differences and Known Issues

There are some naming and functionality differences between Wired Elements and this library. This is due, in part, to differences in how React and web components work as well as an effort to follow common naming conventions/patterns in React. Since these are web components, they dispatch native events as opposed to React synthetic events.

- `WiredTabs` just not working :/
- `maxRows` prop on `WiredTextArea` component not working
- `firstDate` and `lastDate` not working on `WiredCalendar`
- `knobRadius` not working on `WiredSlider`
