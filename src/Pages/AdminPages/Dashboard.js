import axios from '../../axios'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import { FaBoxes, FaShoppingBag, FaShoppingCart, FaUser } from 'react-icons/fa'

function Dashboard() {
  const [totalOrderCount, setTotalOrderCount] = useState(0)
  const [totalUserCount, setTotalUserCount] = useState(0)
  const [totalCategoryCount, setTotalCategoryCount] = useState(0)
  const [totalProductCount, setTotalProductCount] = useState(0)

  const getAllProduct = async () => {
    try {
      let result = await axios.get('/product', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalProductCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  const getAllCategory = async (values, actions) => {
    try {
      let result = await axios.get('/category', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalCategoryCount(result?.data?.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  const getAllUser = async () => {
    try {
      let result = await axios.get('/user/all', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalUserCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }
  const getAllOrders = async () => {
    try {
      let result = await axios.get('cart/admin/order', {
        params: {
          search: "",
          page: 1,
          size: 10
        }
      })

      if (result.data.success) {
        setTotalOrderCount(result.data.totalCount)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  useEffect(() => {
    getAllCategory()
    getAllOrders()
    getAllProduct()
    getAllUser()
  }, [])



  return (
    <div className='mx-auto max-w-7xl px-4'>

      <h1 className='text-4xl font-semibold'>Admin Dashboard</h1>

      <div className='grid md:grid-cols-2 gap-4 mt-10'>

        <div className='shadow p-3 py-10 bg-blue-100 flex flex-col items-center'>
          <label className='font-semibold text-xl flex items-center gap-3'><FaUser /> Total Users</label>
          <label className='text-4xl mt-3 text-gray-500'>{totalUserCount}</label>
        </div>
        <div className='shadow p-3 py-10 flex bg-yellow-200 flex-col items-center'>
          <label className='font-semibold text-xl flex items-center gap-3'><FaShoppingBag /> Total Products</label>
          <label className='text-4xl mt-3 text-gray-500'>{totalProductCount}</label>
        </div>
        <div className='shadow p-3 py-10 flex bg-green-200 flex-col items-center'>
          <label className='font-semibold text-xl flex items-center gap-3'><FaBoxes /> Total Category</label>
          <label className='text-4xl mt-3 text-gray-500'>{totalCategoryCount}</label>
        </div>
        <div className='shadow p-3 py-10 bg-orange-200 flex flex-col items-center'>
          <label className='font-semibold text-xl flex items-center gap-3'><FaShoppingCart /> Total Orders</label>
          <label className='text-4xl mt-3 text-gray-500'>{totalOrderCount}</label>
        </div>
      </div>
    </div>
  )
}

export default Dashboard