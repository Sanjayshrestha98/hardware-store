import axios from '../../../axios'
import { Field, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Modal from 'react-modal'

function AddProduct({ modalIsOpen, closeModal, getRoute }) {

  const [categoryList, setCategoryList] = useState()

  console.log(categoryList)
  const addProduct = async (values, actions) => {
    try {
      let result = await axios.post('/product', values)

      if (result.data.success) {
        toast.success('Product Added Successfully')
        closeModal()
        getRoute()
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  const getAllCategory = async () => {
    try {
      let result = await axios.get('/category')

      if (result.data.success) {
        setCategoryList(result.data.data)
      } else toast.error('Failed')
    } catch (ERR) {
      console.log(ERR)
      toast.error(ERR.response.data.msg)
    }
  }

  useEffect(() => {
    getAllCategory()
  }, [])

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={closeModal}
      contentLabel="Add Product Modal"
      overlayClassName="Overlay"
      className="Modal rounded-md p-5 md:w-2/4 max-h-screen overflow-auto"
    >
      <h1 className="text-4xl font-bold tracking-tight text-gray-900">Add Product</h1>

      <div className='mt-4'>
        <Formik
          initialValues={{
            product_name: "",
            category: "",
            description: "",
            sku: "",
            stock: "",
            // variant_type: [{
            //   size: "",
            //   color: ""
            // }],
            price: ""
          }}
          onSubmit={async (values, actions) => {
            addProduct(values, actions);
          }}
        >
          {(props) => (
            <Form>
              <div className='grid grid-cols-2 gap-3'>
                <div>
                  <label
                    id="product_name"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Name
                  </label>
                  <Field
                    required
                    name="product_name"
                    value={props.values.product_name}
                    aria-labelledby="product_name"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div>
                  <label
                    id="sku"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    SKU
                  </label>
                  <Field
                    required
                    name="sku"
                    value={props.values.sku}
                    aria-labelledby="sku"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                {console.log(props.values)}
                <div>
                  <label
                    id="category"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Category
                  </label>
                  <Field
                    required
                    as="select"
                    name="category"
                    value={props.values.category}
                    aria-labelledby="category"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  >
                    <option>Select Category</option>
                    {
                      categoryList && categoryList.map((value, index) => (
                        <option className='' value={value._id} key={index}>{value.name}</option>
                      ))
                    }
                  </Field>
                </div>
                <div>
                  <label
                    id="price"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Price
                  </label>
                  <Field
                    required
                    name="price"
                    value={props.values.price}
                    aria-labelledby="price"
                    type="number"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className='col-span-full'>
                  <label
                    id="description"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Description
                  </label>
                  <Field
                    as="textarea"
                    required
                    name="description"
                    value={props.values.description}
                    aria-labelledby="description"
                    type="description"
                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

              </div>

              <div className="mt-8 flex gap-4">
                <button
                  type="submit"
                  role="button"
                  className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Add
                </button>
                <button
                  onClick={closeModal}
                  type="submit"
                  role="button"
                  className="flex w-full justify-center rounded-md bg-gray-200 px-3 py-1.5 text-sm font-semibold leading-6 text-gray-800 shadow-sm hover:bg-gray-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  Close
                </button>
              </div>
            </Form>
          )}
        </Formik>
      </div>

    </Modal>
  )
}

export default AddProduct