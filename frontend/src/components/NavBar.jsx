import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
  // const { lastVisitedPage } = useContext(LastVisitedPageContext);
  // console.log(lastVisitedPage);
  const [lastVisitedPage, setLastVisitedPage] = useState('');

  return (
    <div className="flex items-center col-auto">
      <NavLink to={`/${lastVisitedPage}`} className="mr-5">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 192.756 192.756"
        >
          <g fillRule="evenodd" clipRule="evenodd">
            <path fill="#fff" d="M0 0h192.756v192.756H0V0z" />
            <path fill="#001c4e" d="M189.906 157.691v-30.343H2.834v30.343h187.072z" />
            <path
              fill="#fff"
              d="M26.927 148.998h-.991v-6.043h-8.512v6.043h-.991V136.24h.991v5.893h8.512v-5.893h.991v12.758zM43.67 148.998h-.991V136.24h.991v12.758zM60.395 148.174h6.304v.824h-7.296V136.24h.992v11.934zM87.539 137.062h-5.575v4.846h5.033v.822h-5.033v6.268h-.991V136.24h6.566v.822zM102.973 148.998h-.993V136.24h.993v12.758zM129.387 138.279c-1.553-.879-2.994-1.291-4.527-1.291-3.236 0-5.631 2.395-5.631 5.631 0 2.861 1.889 5.631 5.91 5.631 1.479 0 2.49-.281 3.5-.785v-3.443h-2.695v-.822h3.686v4.883c-1.516.729-3.049 1.084-4.527 1.084-3.965 0-6.939-2.805-6.939-6.584 0-3.742 2.9-6.51 6.848-6.51 1.439 0 2.58.279 4.377 1.084v1.122h-.002zM151.947 137.062h-5.967v5.108h5.817v.822h-5.817v5.182h6.118v.824h-7.11V136.24h6.959v.822zM167.941 137.062h2.076c2.34 0 3.367 1.049 3.367 2.488 0 1.535-1.084 2.508-3.33 2.508h-2.113v-4.996zm-.99-.822v12.758h.99v-6.117h1.721c1.535 0 2.021.205 3.555 2.619l2.227 3.498h1.16l-2.881-4.414c-.6-.898-1.105-1.629-1.703-1.945 1.627-.6 2.432-1.629 2.432-3.105 0-1.703-1.104-3.293-4.227-3.293h-3.274v-.001zM2.96 65.408v61.94h92.98v-61.94H2.96z"
            />
            <path fill="#b81d37" d="M95.94 127.348h93.966v5.888h.016V65.408H95.94v61.94z" />
            <path fill="#001c4e" d="M189.922 65.408V35.065H2.849v30.343h187.073z" />
            <path
              fill="#fff"
              d="M26.856 45.345h-4.789V57.28h-.992V45.345h-4.789v-.824h10.57v.824zM62.868 50.9c0 3.18-2.469 5.631-5.668 5.631-3.199 0-5.706-2.451-5.706-5.631S54 45.27 57.2 45.27c3.198 0 5.668 2.45 5.668 5.63zm1.066 0c0-3.667-2.975-6.547-6.771-6.547-3.779 0-6.735 2.881-6.735 6.547s2.956 6.547 6.735 6.547c3.796.001 6.771-2.88 6.771-6.547zM100.975 44.521h.992V57.28h-.992V45.961h-.037l-4.827 5.968-4.826-5.968h-.038V57.28h-.992V44.521h.992l4.864 5.931 4.864-5.931zM139.529 44.521h.992V57.28h-.992V45.961h-.037l-4.826 5.968-4.826-5.968h-.037V57.28h-.992V44.521h.992l4.863 5.931 4.863-5.931zM171.875 50.433v6.847h-.992v-6.847l-4.957-5.912h1.197l4.266 5.051 4.246-5.051h1.197l-4.957 5.912z"
            />
          </g>
        </svg>
      </NavLink>
      <nav>
        <ul className="flex items-center justify-start gap-x-5">
          <li>
            <NavLink
              to="/women"
              onClick={() => setLastVisitedPage('women')}
              className="font-bold text-[13px] text-[#000c2d]"
            >
              WOMEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/men"
              onClick={() => setLastVisitedPage('men')}
              className="font-bold text-[13px] text-[#000c2d]"
            >
              MEN
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/kids"
              onClick={() => setLastVisitedPage('kids')}
              className="font-bold text-[13px] text-[#000c2d]"
            >
              KIDS
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
