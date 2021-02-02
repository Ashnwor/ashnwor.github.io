import * as React from 'react';

function SvgDribbble(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 25 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g clipPath="url(#dribbble_svg__clip0)">
        <path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M12.87 0c-6.624 0-12 5.375-12 12s5.376 12 12 12c6.613 0 12-5.375 12-12s-5.387-12-12-12zm7.927 5.531a10.202 10.202 0 012.317 6.378c-.339-.065-3.723-.755-7.133-.325-.078-.17-.143-.352-.22-.534a30.4 30.4 0 00-.678-1.484c3.775-1.536 5.493-3.748 5.714-4.035zm-7.926-3.76c2.603 0 4.985.975 6.794 2.576-.182.26-1.731 2.33-5.375 3.696-1.68-3.084-3.54-5.61-3.827-6a10.424 10.424 0 012.408-.273zm-4.36.962c.273.365 2.095 2.903 3.8 5.922-4.79 1.276-9.02 1.25-9.475 1.25.664-3.176 2.811-5.818 5.675-7.172zm-5.896 9.28v-.312c.442.013 5.414.078 10.53-1.458.299.573.572 1.158.832 1.744-.13.039-.273.078-.403.117-5.284 1.705-8.096 6.365-8.33 6.755a10.226 10.226 0 01-2.63-6.846zM12.87 22.256c-2.369 0-4.555-.807-6.286-2.16.182-.378 2.264-4.387 8.043-6.404.026-.013.039-.013.065-.026 1.445 3.735 2.03 6.872 2.187 7.77-1.237.534-2.59.82-4.01.82zm5.713-1.757c-.104-.625-.65-3.618-1.99-7.302 3.214-.507 6.025.326 6.377.443-.443 2.85-2.083 5.31-4.387 6.859z"
          fill="#fff"
        />
      </g>
      <defs>
        <clipPath id="dribbble_svg__clip0">
          <path fill="#fff" transform="translate(.87)" d="M0 0h24v24H0z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export default SvgDribbble;
