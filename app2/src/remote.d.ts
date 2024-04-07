///<reference types="react" />

declare module 'micro1/CardAlpha' {
  interface CardAlphaProps {
    children?: ReactNode;
    title: string;
  }

  const CardAlpha: React.ComponentType<CardAlphaProps>;
  export { CardAlphaProps, CardAlpha as default };
}

declare module 'micro2/ModalAlpha' {
  interface ModalAlphaProps {
    children?: ReactNode;
    closeLabel?: string;
    isOpen?: boolean;
    maxWidth?: string | number;
    onClose: () => void;
    title?: string;
  }

  const ModalAlpha: React.ComponentType<ModalAlphaProps>;
  export { ModalAlphaProps, ModalAlpha as default };
}
