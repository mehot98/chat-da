declare global {
  namespace NodeJS {
    interface ProcessEnv {
      __DEV__: string;
    }
  }
}

export {};
