import React, { useState } from 'react'
import { FaFilter } from 'react-icons/fa'
import { Link } from 'react-router-dom'

function AllProducts() {
    const products = [
        {
            id: 1,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 2,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 3,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 4,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        {
            id: 5,
            name: 'Basic Tee',
            href: '#',
            imageSrc: 'https://tailwindui.com/img/ecommerce-images/product-page-01-related-product-01.jpg',
            imageAlt: "Front of men's Basic Tee in black.",
            price: '$35',
            color: 'Black',
        },
        // More products...
    ]

    const [showFilter, setShowFilter] = useState()

    return (
        <div class="bg-white">
            <div>
                {
                    showFilter &&
                    <div class="relative z-40 lg:hidden" role="dialog" aria-modal="true">

                        <div class="fixed inset-0 bg-black bg-opacity-25"></div>

                        <div class="fixed inset-0 z-50 flex" style={{
                            zIndex: "99999"
                        }}>
                            <div class="relative p-5 ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-12 shadow-xl">
                                <div class="flex items-center justify-between mb-5">
                                    <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                    <button onClick={()=>{
                                        setShowFilter(false)
                                    }} type="button" class="-mr-2 flex h-10 w-10 items-center justify-center rounded-md bg-white p-2 text-gray-400">
                                        <span class="sr-only">Close menu</span>
                                        <svg class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                                        </svg>
                                    </button>
                                </div>

                                {/* <!-- Filters --> */}
                                <form class="lg:hidden block">
                                    <h3 class="sr-only">Categories</h3>
                                    <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                        <li>
                                            <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                                        </li>
                                        <li>
                                            <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                                        </li>
                                        <li>
                                            <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                                        </li>
                                        <li>
                                            <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                                        </li>
                                        <li>
                                            <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                                        </li>
                                    </ul>

                                    <div class="border-b border-gray-200 py-6">
                                        <h3 class="-my-3 flow-root">
                                            <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                                <span class="font-medium text-gray-900">Category</span>
                                                <span class="ml-6 flex items-center">
                                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                    </svg>
                                                    <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                        <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div class="pt-6" id="filter-section-1">
                                            <div class="space-y-4">
                                                <div class="flex items-center">
                                                    <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-0" class="ml-3 text-sm text-gray-600">New Arrivals</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Sale</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Travel</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Organization</label>
                                                </div>
                                                <div class="flex items-center">
                                                    <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                    <label for="filter-category-4" class="ml-3 text-sm text-gray-600">Accessories</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="border-b border-gray-200 py-6">
                                        <h3 class="-my-3 flow-root">
                                            {/* <!-- Expand/collapse section button --> */}
                                            <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                                <span class="font-medium text-gray-900">Price</span>

                                            </button>
                                        </h3>
                                        {/* <!-- Filter section, show/hide based on section state. --> */}
                                        <div class="pt-6" id="filter-section-2">
                                            <input type='range' step={1} />
                                        </div>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                }

                <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div class="flex items-baseline justify-between border-b border-gray-200 pb-6 pt-10">
                        <h1 class="text-4xl font-bold tracking-tight text-gray-900">Products</h1>
                        <button className='lg:hidden block' onClick={()=>{
                            setShowFilter(true)
                        }}><FaFilter /></button>

                    </div>

                    <section aria-labelledby="products-heading" class="pb-24 pt-6">
                        <h2 id="products-heading" class="sr-only">Products</h2>

                        <div class="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                            {/* <!-- Filters --> */}
                            <form class="hidden lg:block">
                                <h3 class="sr-only">Categories</h3>
                                <ul role="list" class="space-y-4 border-b border-gray-200 pb-6 text-sm font-medium text-gray-900">
                                    <li>
                                        <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-0">Most Popular</a>
                                    </li>
                                    <li>
                                        <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-1">Best Rating</a>
                                    </li>
                                    <li>
                                        <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-2">Newest</a>
                                    </li>
                                    <li>
                                        <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-3">Price: Low to High</a>
                                    </li>
                                    <li>
                                        <a href="#" class="" role="menuitem" tabindex="-1" id="menu-item-4">Price: High to Low</a>
                                    </li>
                                </ul>

                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-1" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Category</span>
                                            <span class="ml-6 flex items-center">
                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path d="M10.75 4.75a.75.75 0 00-1.5 0v4.5h-4.5a.75.75 0 000 1.5h4.5v4.5a.75.75 0 001.5 0v-4.5h4.5a.75.75 0 000-1.5h-4.5v-4.5z" />
                                                </svg>
                                                <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                                    <path fill-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" clip-rule="evenodd" />
                                                </svg>
                                            </span>
                                        </button>
                                    </h3>
                                    <div class="pt-6" id="filter-section-1">
                                        <div class="space-y-4">
                                            <div class="flex items-center">
                                                <input id="filter-category-0" name="category[]" value="new-arrivals" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-category-0" class="ml-3 text-sm text-gray-600">New Arrivals</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-category-1" name="category[]" value="sale" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-category-1" class="ml-3 text-sm text-gray-600">Sale</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-category-2" name="category[]" value="travel" type="checkbox" checked class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-category-2" class="ml-3 text-sm text-gray-600">Travel</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-category-3" name="category[]" value="organization" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-category-3" class="ml-3 text-sm text-gray-600">Organization</label>
                                            </div>
                                            <div class="flex items-center">
                                                <input id="filter-category-4" name="category[]" value="accessories" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                <label for="filter-category-4" class="ml-3 text-sm text-gray-600">Accessories</label>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="border-b border-gray-200 py-6">
                                    <h3 class="-my-3 flow-root">
                                        {/* <!-- Expand/collapse section button --> */}
                                        <button type="button" class="flex w-full items-center justify-between bg-white py-3 text-sm text-gray-400 hover:text-gray-500" aria-controls="filter-section-2" aria-expanded="false">
                                            <span class="font-medium text-gray-900">Price</span>

                                        </button>
                                    </h3>
                                    {/* <!-- Filter section, show/hide based on section state. --> */}
                                    <div class="pt-6" id="filter-section-2">
                                        <input type='range' step={1} />
                                    </div>
                                </div>
                            </form>

                            {/* <!-- Product grid --> */}
                            <div class="lg:col-span-3 border-l">
                                <div className="mx-auto max-w-2xl px-4 lg:max-w-7xl lg:px-8">
                                    <div className="mt-2 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                                        {products.map((product, index) => (
                                            <Link to={`/product/${product.id}`} key={index} className="group relative" role='button'>
                                                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                                                    <img
                                                        src={product.imageSrc}
                                                        alt={product.imageAlt}
                                                        className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                                                    />
                                                </div>
                                                <div className="mt-4 flex justify-between">
                                                    <div>
                                                        <h3 className="text-sm text-gray-700">
                                                            <a href={product.href}>
                                                                <span aria-hidden="true" className="absolute inset-0" />
                                                                {product.name}
                                                            </a>
                                                        </h3>
                                                        <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                                                    </div>
                                                    <p className="text-sm font-medium text-gray-900">{product.price}</p>
                                                </div>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </main>
            </div>
        </div>
    )
}

export default AllProducts