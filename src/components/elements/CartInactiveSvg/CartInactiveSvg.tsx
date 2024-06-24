import { useState } from 'react';

const CartInactiveSvg = () => {
  const [hiddenCart, setHiddenCart] = useState(true);

  return (
    <svg
      width="48"
      height="48"
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onMouseEnter={() => setHiddenCart(false)}
      onMouseLeave={() => setHiddenCart(true)}>
      <rect
        width="48"
        height="48"
        rx="24"
        style={{ fill: hiddenCart ? '#196C67' : 'black', transition: 'all 0.3s ease-out' }}
      />
      <mask id="mask0_683_869" maskUnits="userSpaceOnUse" x="12" y="12" width="24" height="24">
        <rect x="12" y="12" width="24" height="24" fill="#D9D9D9" />
      </mask>
      <g mask="url(#mask0_683_869)">
        <path
          d="M19 34C18.45 34 17.9792 33.8042 17.5875 33.4125C17.1958 33.0208 17 32.55 17 32C17 31.45 17.1958 30.9792 17.5875 30.5875C17.9792 30.1958 18.45 30 19 30C19.55 30 20.0208 30.1958 20.4125 30.5875C20.8042 30.9792 21 31.45 21 32C21 32.55 20.8042 33.0208 20.4125 33.4125C20.0208 33.8042 19.55 34 19 34ZM29 34C28.45 34 27.9792 33.8042 27.5875 33.4125C27.1958 33.0208 27 32.55 27 32C27 31.45 27.1958 30.9792 27.5875 30.5875C27.9792 30.1958 28.45 30 29 30C29.55 30 30.0208 30.1958 30.4125 30.5875C30.8042 30.9792 31 31.45 31 32C31 32.55 30.8042 33.0208 30.4125 33.4125C30.0208 33.8042 29.55 34 29 34ZM18.15 18L20.55 23H27.55L30.3 18H18.15ZM17.2 16H31.95C32.3333 16 32.625 16.1708 32.825 16.5125C33.025 16.8542 33.0333 17.2 32.85 17.55L29.3 23.95C29.1167 24.2833 28.8708 24.5417 28.5625 24.725C28.2542 24.9083 27.9167 25 27.55 25H20.1L19 27H31V29H19C18.25 29 17.6833 28.6708 17.3 28.0125C16.9167 27.3542 16.9 26.7 17.25 26.05L18.6 23.6L15 16H13V14H16.25L17.2 16Z"
          fill="white"
        />
      </g>
    </svg>
  );
};

export default CartInactiveSvg;