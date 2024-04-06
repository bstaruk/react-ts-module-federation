///<reference types="react" />

declare module 'micro1/CardAlpha' {
  interface CardAlphaProps {
    title: string;
  }

  const CardAlpha: React.ComponentType<CardAlphaProps>;
  export { CardAlphaProps, CardAlpha as default };
}
