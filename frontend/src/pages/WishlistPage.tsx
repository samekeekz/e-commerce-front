import { Link } from 'react-router-dom';
import { useGetWishlistQuery } from '../store/wishlist/wishlist.api';

const WishlistPage = () => {
  const { data, isLoading } = useGetWishlistQuery();

  return (
    <div className="py-[116px]">
      {data?.length !== 0 ? (
        <div>
          <h1 className="font-Futura text-[34px] font-bold uppercase leading-10 text-[#000c2d]">
            Wishlist
          </h1>
          <p>Sign in or create an account to save your wishlist for later</p>
          <Link
            to="/signIn"
            className="block h-11 w-60 border-[2px] border-solid border-[#000c2d] bg-[#000c2d] px-7 py-2 "
          >
            <div className="flex items-center justify-center text-[15px] font-bold leading-6 text-white">
              Sign In / Register
            </div>
          </Link>
          <ul className="grid grid-cols-5 gap-x-2 gap-y-10">
            {data?.map(product => (
              <li key={product.id} className="">
                <Link to={`/${product.name}`} className="block">
                  <div className="">
                    <img className="w-full" src={product.images[0]} alt="image" />
                  </div>
                  <div className="mb-3 px-3">
                    <p>{product.name}</p>
                    <p>{product.price}</p>
                  </div>
                </Link>
                <div className="mx-2">
                  <button>Add to Bag</button>
                </div>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <div className="flex flex-col items-center justify-center px-8 py-[72px]">
          <div>
            <svg
              className="text-[20px]"
              data-testid="icon-utility-wishlist-svg"
              width="1em"
              height="1em"
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M10.4481 4.09582C10.2734 4.34393 10.1248 4.5927 10 4.8268C9.87523 4.5927 9.72666 4.34393 9.55193 4.09582C8.87862 3.1397 7.67786 2 5.78125 2C4.43273 2 3.2011 2.55821 2.31326 3.57178C1.46642 4.53865 1 5.83357 1 7.21798C1 8.72496 1.58475 10.1266 2.84025 11.6289C3.96234 12.9717 5.57661 14.3557 7.4459 15.9584C8.14245 16.5557 8.86277 17.1733 9.62963 17.8484C9.75208 17.9562 9.87604 18 10 18C10.124 18 10.2479 17.9562 10.3473 17.8687C11.1372 17.1733 11.8576 16.5557 12.5542 15.9584C14.4234 14.3558 16.0377 12.9717 17.1597 11.6289C18.4152 10.1266 19 8.72496 19 7.21798C19 5.83357 18.5336 4.53865 17.6867 3.57174C16.7989 2.55818 15.5673 2 14.2188 2C12.3221 2 11.1214 3.1397 10.4481 4.09582Z"
                stroke="#00174F"
                strokeWidth="1.2"
              ></path>
            </svg>
          </div>
          <h3>LOOKS LIKE YOUR WISHLIST IS EMPTY</h3>
          <p>Sign in to see your saved items</p>
          <Link
            to="/signIn"
            className="block h-11 w-60 border-[2px] border-solid border-[#000c2d] bg-[#000c2d] px-7 py-2 "
          >
            <div className="flex items-center justify-center text-[15px] font-bold leading-6 text-white">
              Sign In / Register
            </div>
          </Link>
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
