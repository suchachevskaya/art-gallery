// для обычных svg как url
declare module '*.svg' {
  const src: string;
  export default src;
}

// для svg, импортированных как React-компоненты через ?react
declare module '*.svg?react' {
  import * as React from 'react';
  const ReactComponent: React.FC<React.SVGProps<SVGSVGElement>>;
  export { ReactComponent };
}
