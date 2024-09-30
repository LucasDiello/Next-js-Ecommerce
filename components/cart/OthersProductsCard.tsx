import { OthersProductsProps } from '@/types';
import Link from 'next/link';
import React from 'react'

const OthersProductsCard = ({ imageUrl, altText, name, description, originalPrice, discountedPrice } : OthersProductsProps) => {
    return (
        <div className="space-y-6 overflow-hidden rounded-lg border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-700 dark:bg-gray-800">
          <a href="#" className="overflow-hidden rounded">
            <img
              src={imageUrl}
              alt={altText}
            />
          </a>
          <div>
            <a
              href="#"
              className="text-lg font-semibold leading-tight text-gray-900 hover:underline dark:text-white"
            >
              {name}
            </a>
            <p className="mt-2 text-base font-normal text-gray-500 dark:text-gray-400">
              {description}
            </p>
          </div>
          <div>
            <p className="text-lg font-bold text-gray-900 dark:text-white">
              <span className="line-through">{originalPrice}</span>
            </p>
            <p className="text-lg font-bold leading-tight text-red-600 dark:text-red-500">
              {discountedPrice}
            </p>
          </div>
          <div className="mt-6 flex items-center gap-2.5">
            <button
              data-tooltip-target="favourites-tooltip"
              type="button"
              className="inline-flex items-center justify-center gap-2 rounded-lg border border-gray-200 bg-white p-2.5 text-sm font-medium text-gray-900 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:outline-none focus:ring-4 focus:ring-gray-100 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white dark:focus:ring-gray-700"
            >
              <svg
                className="h-5 w-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M12 6C6.5 1 1 8 5.8 13l6.2 7 6.2-7C23 8 17.5 1 12 6Z"
                ></path>
              </svg>
            </button>
            <Link
              type="button"
              className="inline-flex w-full items-center justify-center rounded-lg bg-primary-700 px-5 py-2.5 text-sm font-medium  text-white hover:bg-primary-800 focus:outline-none focus:ring-4 focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800"
              href="/"
            >
              See More -{">"}
            </Link>
          </div>
        </div>
      );
}

export default OthersProductsCard
