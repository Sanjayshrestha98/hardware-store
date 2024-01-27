import axios from '../../../axios'
import { Field, FieldArray, Form, Formik } from 'formik'
import React, { useEffect, useState } from 'react'
import toast from 'react-hot-toast'
import Modal from 'react-modal'
import { object } from 'yup'

function AddProduct({ modalIsOpen, closeModal, getRoute }) {

  const [categoryList, setCategoryList] = useState()

  console.log(categoryList)


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

  const imageData = new FormData

  const handleImages = (size, color, files) => {

    for (let i in files) {
      const file = files[i];
      if (file instanceof File) {
        imageData.append(`${size}-${color}`, file);
      }
    }

    // for (let i in files) {
    //   imageData.append(`${size}-${color}`, files[i])
    // }
  }

  const addProduct = async (values, actions) => {
    try {

      let formData = new FormData

      for (let value in values) {
        if (typeof values[value] === "object") {
          formData.append(value, JSON.stringify(values[value]))
        } else formData.append(value, values[value])
      }

      // Append fields from imageData to formData
      for (const [key, value] of imageData.entries()) {
        formData.append(key, value);
      }

      let result = await axios.post('/product', formData)

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
        {/* [{"sku": "lg-red","stock": 10,"variant_type": [{"size": "lg","color": "red"}],"price": 100}] */}
        <Formik
          initialValues={{
            product_name: "",
            category: "",
            description: "",
            variant: [{
              sku: "",
              stock: "",
              price: "",
              variant_type: [{
                size: "",
                color: ""
              }],
            }],
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

                <div className='col-span-full'>
                  <label
                    id="description"
                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                  >
                    Variants
                  </label>

                  <FieldArray
                    name="variant"
                    render={arrayHelpers => (
                      <div>
                        {props.values.variant && props.values.variant.length > 0 ? (
                          props.values.variant.map((value, index) => (
                            <div key={index} className='flex gap-2 mb-2 items-center'>
                              <div className='hidden'>
                                {console.log('value', value)}
                                <label
                                  id="sku"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  SKU
                                </label>
                                <Field
                                  value={`${props.values.variant[index].variant_type[0].size}-${value.variant_type[0].color}`}
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  name={`variant.${index}.sku`} />

                              </div>
                              <div>
                                <label
                                  id="stock"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  Stock
                                </label>
                                <Field
                                  type="number"
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  name={`variant.${index}.stock`} />

                              </div>
                              <div>
                                <label
                                  id="price"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  Price
                                </label>
                                <Field
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  name={`variant.${index}.price`} />

                              </div>
                              <div>
                                <label
                                  id="size"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  Size
                                </label>
                                <Field
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  name={`variant.${index}.variant_type[0].size`} />

                              </div>
                              <div>
                                <label
                                  id="color"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  Color
                                </label>
                                <Field
                                  onChange={(e) => {
                                    props.handleChange(e)
                                    props.setFieldValue(`variant.${index}.sku`, `${value.variant_type[0].size}-${e.target.value}`)
                                  }}
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  name={`variant.${index}.variant_type[0].color`} />
                              </div>
                              <div>
                                <label
                                  id="color"
                                  className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                  Images
                                </label>
                                <input
                                  onChange={(e) => {
                                    handleImages(value.variant_type[0].size, value.variant_type[0].color, e.target.files)
                                  }}
                                  accept="image/*"
                                  multiple
                                  type="file"
                                  className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
                              </div>

                              {
                                props.values.variant.length == 1 ? "" :

                                  <button
                                    className='bg-red-600 h-fit px-2 text-white rounded '

                                    type="button"
                                    onClick={() => arrayHelpers.remove(index)} // remove a friend from the list
                                  >
                                    -
                                  </button>
                              }
                              <button
                                className='bg-green-600 h-fit px-2 text-white rounded '
                                type="button"
                                onClick={() => arrayHelpers.insert(index + 1, {
                                  sku: "",
                                  stock: "",
                                  price: "",
                                  variant_type: [{
                                    size: "",
                                    color: ""
                                  }],
                                })} // insert an empty string at a position
                              >
                                +
                              </button>
                            </div>
                          ))
                        ) : (
                          <button type="button" onClick={() => arrayHelpers.push('')}>
                            {/* show this when user has removed all variant_type from the list */}
                            Add a friend
                          </button>
                        )}
                      </div>
                    )}
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