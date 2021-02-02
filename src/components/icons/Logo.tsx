import * as React from 'react';

function SvgLogo(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      width="1em"
      height="1em"
      viewBox="0 0 22 22"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path fill="#fff" d="M0 0h21.621v22H0z" />
      <path
        d="M1.177 17.9h3.161V7.97H1.177v9.93zM9.15 18.069c1.384 0 2.34-.537 2.884-1.552h.078l.026 4.535 2.948-2.983V11.15c0-2.101-1.869-3.31-4.397-3.31-2.67 0-4.178 1.448-4.43 3.258h2.91c.137-.633.66-1.021 1.494-1.021.776 0 1.268.375 1.268 1.04v.033c0 .608-.66.737-2.354.886-2.01.168-3.692.911-3.692 3.11 0 1.965 1.364 2.922 3.265 2.922zm.977-2.07c-.731 0-1.248-.348-1.248-1.008 0-.64.494-1.18 1.403-1.163.908.017 1.287 0 1.668 0v.543c0 .97-.815 1.629-1.823 1.629zM18.797 18.088c.886 0 1.668-.75 1.68-1.68a1.708 1.708 0 00-1.68-1.662c-.931 0-1.694.743-1.681 1.661-.013.931.75 1.681 1.68 1.681zM1.177 3.603v3.21h3.161v-3.21H1.177z"
        fill="currentColor"
      />
    </svg>
  );
}

export default SvgLogo;
