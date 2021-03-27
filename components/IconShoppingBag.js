import React from 'react';

function IconShoppingBag(props) {
  const fill = props.fill || 'currentColor';
  const secondaryfill = props.secondaryfill || fill;
  const title = props.title || 'Your shopping cart contains items for ';

  return (
    <svg
      height='24'
      width='24'
      viewBox='0 0 24 24'
      xmlns='http://www.w3.org/2000/svg'
    >
      <title>{title}</title>
      <g fill={fill}>
        <path d='M0 0h24v24H0z' fill='none' />
        <path d='M6.5 2h11a1 1 0 0 1 .8.4L21 6v15a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V6l2.7-3.6a1 1 0 0 1 .8-.4zm12 4L17 4H7L5.5 6h13zM9 10H7v2a5 5 0 0 0 10 0v-2h-2v2a3 3 0 0 1-6 0v-2z' />
      </g>
    </svg>
  );
}

export default IconShoppingBag;
