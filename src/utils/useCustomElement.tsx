import * as React from 'react';
const { useState, useRef, useEffect } = React;

type Key = 'attributes' | 'methods' | 'css';

type Values = {
  [key in Key]?: {
    [key: string]: any;
  };
};

export function useCustomElement(values: Values) {
  const [attrs, setAttrs] = useState({});
  const registered = useRef(false);
  const ref = useRef<any>();

  useEffect(() => {
    if (!registered.current) {
      return;
    }

    const attributes = values['attributes'];
    const css = values['css'];
    css && setCSS(css);
    attributes && addAttributes(attributes);
  }, [values]);

  function setCSS(css: any) {
    Object.keys(css).forEach(key => {
      const value = css[key] as string;
      if (!value) return;
      if (key.startsWith('--')) {
        let root = document.documentElement;
        root.style.setProperty(key, value || '#333');
      } else {
        ref.current.style[key] = value;
      }
    });
  }

  // Only need to add the methods once
  useEffect(() => {
    if (!registered.current) {
      return;
    }
    const methods = values['methods'];
    methods && addMethods(methods);
  }, [values]);

  function register(option: any) {
    ref.current = option;
    registered.current = true;
  }

  // This hook fires on any change to ensure that things are repainted as necessary.
  useEffect(() => {
    // A hack, but it works for now.
    setTimeout(() => {
      if (ref.current.requestUpdate) {
        ref.current.requestUpdate();
      }
    }, 0);
  });

  function addAttributes(attrList: any) {
    Object.keys(attrList).forEach(key => {
      setAttrs(a => ({
        ...a,
        [key]: attrList[key],
      }));
    });
  }

  function addMethods(methodsList: any) {
    Object.keys(methodsList).forEach(key => {
      ref.current.addEventListener(key, methodsList[key]);
    });
  }

  // This is responsible for syncing up dom attributes when the prop
  // representation changes.
  useEffect(() => {
    Object.keys(attrs).forEach(key => {
      // @ts-ignore
      ref.current[key] = attrs[key];
    });
  }, [attrs]);

  // This event listener is for the WiredSearchInput so that it can
  // be detected when the user hits the clear button.
  useEffect(() => {
    ref.current.addEventListener('input', (e: any) => {
      setAttrs(a => ({
        ...a,
        value: e.target.value,
      }));
    });
  }, []);

  return register;
}
