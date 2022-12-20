import * as React from 'react';

const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
    <svg
        width={18}
        height={18}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <path
            d="M8.825 15.566a6.742 6.742 0 1 0 0-13.483 6.742 6.742 0 0 0 0 13.483ZM13.514 13.864l2.643 2.636"
            stroke="#008ECC"
            strokeWidth={1.5}
            strokeLinecap="round"
            strokeLinejoin="round"
        />
    </svg>
);

export default SearchIcon;
