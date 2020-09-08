declare type Image = 'image';

declare module '*.png' {
  const value: Image;
  export default value;
}
