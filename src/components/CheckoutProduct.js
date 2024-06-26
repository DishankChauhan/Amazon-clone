import React from 'react'
import Image from 'next/image'
import { StarIcon } from '@heroicons/react/24/solid'
import Currency from "react-currency-formatter"
import { useDispatch } from 'react-redux'
import { addToBasket, removeFromBasket } from '../slices/basketSlice'

function CheckoutProduct({
    id, title, price, rating, description, category, image, hasPrime
}) {

    const dispatch = useDispatch()
    const addItemToBasket = () => {
        const product = {
            id, title, price, rating, description, category, image, hasPrime
        }


        dispatch(addToBasket(product))
    }

    const removeItemFromBasket = () => {
        dispatch(removeFromBasket({ id }))
    }


    return (

        <div className='grid grid-col-5'>
            <Image src={image} height={200} width={200} objectFit='contain'></Image>


            <div className='col-span-3 mx-5'>
                <p>{title}</p>
                <div className='flex'>
                    {Array(rating).fill().map((_, i) => (
                        <StarIcon key={i} className='h-5 text-yellow-500'></StarIcon>
                    ))}
                </div>

                <p className='text-xs my-2 line-clamp-3'>{description}</p>
                <Currency quantity={price}></Currency>
                {hasPrime && (
                    <div className='flex items-center space-x-2'>
                        <img
                            loading='lazy'
                            className='w-12'


                            src='https://images-na.ssl-images-amazon.com/images/G/01/dex/2022/Delivery_Choices/091222_DEX_PrimeAmazonDay_LP_Steps_1_Mobile_750x220.jpg' alt=''></img>
                        <p className='text-xs text-gray-500'>Free Next Day Delivery</p>
                    </div>
                )}

            </div>
            <div className='flex flex-col space-y-2 my-auto justify-self-end'>
                <button className='button ' onClick={addItemToBasket}>
                    Add to Basket
                </button>
                <button className='button' onClick={removeItemFromBasket}>
                    Remove from Basket
                </button>
            </div>



        </div>

    )
}

export default CheckoutProduct