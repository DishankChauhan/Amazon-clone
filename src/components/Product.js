import React from 'react';
import Image from 'next/image';
import { StarIcon } from '@heroicons/react/16/solid';
import Currency from 'react-currency-formatter';
import { useDispatch } from 'react-redux';
import { addToBasket } from '../slices/basketSlice';

const MAX_RATING = 5;
const MIN_RATING = 1;

function Product({ id, title, price, description, category, image }) {
    const dispatch = useDispatch()
    const rating = Math.floor(Math.random() * (MAX_RATING - MIN_RATING + 1) + MIN_RATING);
    const hasPrime = Math.random() < 0.5;
    const addItemToBasket = () => {
        const product = {
            id, title, price, description, category, image, hasPrime, rating,

        }
        dispatch(addToBasket(product))

    }

    return (
        <div className='relative flex flex-col m-5 bg-white z-30 p-10'>
            <p className='absolute top-2 right-2 text-xs italic text-gray-400'>{category}</p>
            <div className='w-48 h-48 relative'>
                <Image src={image} layout="fill" objectFit="contain" alt={title} ></Image>
            </div>
            <h4 className='my-3'>{title}</h4>
            <div className='flex'>
                {Array(rating).fill().map((_, index) => (
                    <StarIcon key={index} className='h-5 text-yellow-500' />
                ))}
            </div>
            <p className='text-xs my-2 line-clamp-2'>{description}</p>
            <div className='mb-5'>
                <Currency quantity={price} currency="USD" />
            </div>
            {hasPrime && (
                <div className='flex items-center space-x-2 -mt-5'>
                    <img className='w-24' src='https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg' alt='Prime' />
                    <p className='text-xs text-gray-500'>Free Next-Day-Delivery</p>
                </div>
            )}
            <button onClick={addItemToBasket} className='mt-auto button'>Add to Basket</button>
        </div>
    );
}

export default Product;
