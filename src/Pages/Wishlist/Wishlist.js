import React from 'react'

function Wishlist() {
    return (
        <section className="py-12 ">
            <div className="max-w-7xl px-4 mx-auto">
                <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-5">
                    <h1 class="text-4xl font-bold tracking-tight text-gray-900">Wishlist</h1>
                </div>

                <div className="flex md:flex-row flex-col gap-5 mt-5">
                    <div class="pointer-events-auto  w-full">
                        <div class="px-4 py-6 sm:pl-0">
                            <ul role="list" class="-my-6 divide-y divide-gray-200">
                                <li class="flex py-6">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-01.jpg" alt="Salmon orange fabric pouch with match zipper, gray zipper pull, and adjustable hip belt." class="h-full w-full object-cover object-center" />
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href="#">Throwback Hip Bag</a>
                                                </h3>
                                                <p class="ml-4">$90.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Salmon</p>
                                        </div>
                                        <div class="flex flex-1 items-center mt-2 justify-end text-sm">
                                            <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </li>
                                <li class="flex py-6">
                                    <div class="h-24 w-24 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                                        <img src="https://tailwindui.com/img/ecommerce-images/shopping-cart-page-04-product-02.jpg" alt="Front of satchel with blue canvas body, black straps and handle, drawstring top, and front zipper pouch." class="h-full w-full object-cover object-center" />
                                    </div>

                                    <div class="ml-4 flex flex-1 flex-col">
                                        <div>
                                            <div class="flex justify-between text-base font-medium text-gray-900">
                                                <h3>
                                                    <a href="#">Medium Stuff Satchel</a>
                                                </h3>
                                                <p class="ml-4">$32.00</p>
                                            </div>
                                            <p class="mt-1 text-sm text-gray-500">Blue</p>
                                        </div>
                                        <div class="flex flex-1 items-center mt-2 justify-end text-sm">
                                            <button type="button" class="font-medium text-red-600 hover:text-red-500">Remove</button>
                                        </div>
                                    </div>
                                </li>

                            </ul>
                        </div>
                    </div>


                </div>
            </div>
        </section >
    )
}

export default Wishlist