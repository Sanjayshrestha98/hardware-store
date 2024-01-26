import React, { useEffect, useState } from 'react'
import axios from '../../../axios'
import toast from 'react-hot-toast'
import AddProduct from './AddProduct'


function Product() {

  const [isAddModalOpen, setIsAddModalOpen] = useState(false)
  const [productData, setProductData] = useState([])
  const [totalProductCount, setTotalProductCount] = useState(0)
  const [currentProductPage, setCurrentProductPage] = useState(1)
  const [totalProductPage, setTotalProductPage] = useState(1)

  const closeAddModal = () => {
    setIsAddModalOpen(false)
  }
  const openAddModal = () => {
    setIsAddModalOpen(true)
  }

  const getAllProduct = async (values, actions) => {
    try {
      let result = await axios.get('/product', {
        params: {
          search: "",
          page: 1,
          limit: 10
        }
      })

      if (result.data.success) {
        setProductData(result.data.data)
        
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  console.log(productData)

  useEffect(() => {
    getAllProduct()
  }, [])



  return (
    <div className='mx-auto max-w-7xl px-4'>

      {
        isAddModalOpen &&

        <AddProduct closeModal={closeAddModal} modalIsOpen={isAddModalOpen}
          getRoute={getAllProduct}
        />

      }

      <div className="flex items-baseline justify-between  pb-6 pt-5">
        <h1 className="text-4xl font-bold tracking-tight text-gray-900">Product</h1>
        <button onClick={() => {
          openAddModal()
        }} className='bg-blue-800 p-3 rounded-md text-white font-semibold px-4'>Add Product</button>
      </div>

      <div className='w-full my-5  bg-white'>
        <table className="table-auto w-full text-left ">
          <thead className='font-semibold border-b bg-gray-100'>
            <tr className='opacity-75'>
              <th className='p-3'>Name</th>
              <th className='p-3'>Created Date</th>
              <th className='p-3'>Actions</th>
            </tr>
          </thead>
          <tbody>
            {
              productData &&
              (productData.length === 0 ?
                <p className='p-5 font-semibold text-red-800'>No Data</p> :
                productData.map((value, index) => (
                  <tr key={index} className='border-b'>
                    <td className='p-3'>{value?.name}</td>
                    <td className='p-3'>{value?.name}</td>
                    <td className='p-3 flex gap-2 flex-wrap max-w-fit'>
                      <button className=''>Delete</button>
                      <button className=''>Edit</button>
                    </td>
                  </tr>
                )))
            }

          </tbody>
        </table>
        <div class="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
          <div class="flex flex-1 justify-between sm:hidden">
            <a href="#" class="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Previous</a>
            <a href="#" class="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50">Next</a>
          </div>
          <div class="hidden sm:flex sm:flex-1 sm:items-center sm:justify-between">
            <div className='text-sm text-gray-700'>
              <p class="">
                {totalProductCount} Total Results
              </p>
            </div>
            <div>
              <nav class="isolate inline-flex -space-x-px rounded-md shadow-sm" aria-label="Pagination">
                <a href="#" class="relative inline-flex items-center rounded-l-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Previous</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M12.79 5.23a.75.75 0 01-.02 1.06L8.832 10l3.938 3.71a.75.75 0 11-1.04 1.08l-4.5-4.25a.75.75 0 010-1.08l4.5-4.25a.75.75 0 011.06.02z" clip-rule="evenodd" />
                  </svg>
                </a>

                <a class="relative inline-flex items-center px-4 py-2 text-sm font-semibold text-gray-900 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  Page {currentProductPage} of {totalProductPage}
                </a>

                <a href="#" class="relative inline-flex items-center rounded-r-md px-2 py-2 text-gray-400 ring-1 ring-inset ring-gray-300 hover:bg-gray-50 focus:z-20 focus:outline-offset-0">
                  <span class="sr-only">Next</span>
                  <svg class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                    <path fill-rule="evenodd" d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z" clip-rule="evenodd" />
                  </svg>
                </a>
              </nav>
            </div>
          </div>
        </div>

      </div>

    </div>
  )
}

export default Product