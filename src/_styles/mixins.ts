// import { css } from 'styled-components';

export const RelativeSize = (value:number) => {

  const relativeSizeBase = 1024;
  const baseSize = 100;
  let setValue = (value / relativeSizeBase) * baseSize;

  return `${setValue}vw`;
}