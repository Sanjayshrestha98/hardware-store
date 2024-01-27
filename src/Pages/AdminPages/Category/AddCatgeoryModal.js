import axios from '../../../axios'
import { Field, Form, Formik } from 'formik'
import React from 'react'
import toast from 'react-hot-toast'
import Modal from 'react-modal'

function AddCatgeoryModal({ modalIsOpen, closeModal, getRoute }) {

    const addCategory = async (values, actions) => {
        try {
            let result = await axios.post('/category', values)

            if (result.data.success) {
                toast.success('Category Added Successfully')
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
            contentLabel="Add Category Modal"
            overlayClassName="Overlay"
            className="Modal rounded-md p-5 md:w-1/4 max-h-screen overflow-auto"
        >
            <h1 className="text-4xl font-bold tracking-tight text-gray-900">Add Category</h1>

            <div className='mt-4'>
                <Formik
                    initialValues={{
                        name: "",
                    }}
                    onSubmit={async (values, actions) => {
                        addCategory(values, actions);
                    }}
                >
                    {(props) => (
                        <Form>
                            <div>
                                <label
                                    id="name"
                                    className="block w-full text-sm font-medium leading-6 text-gray-900"
                                >
                                    Name
                                </label>
                                <Field
                                    required
                                    name="name"
                                    value={props.values.name}
                                    aria-labelledby="name"
                                    type="name"
                                    className="block mt-2 w-full rounded-md border-0 py-1.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                />
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

export default AddCatgeoryModal