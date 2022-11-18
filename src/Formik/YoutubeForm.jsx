import React from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'

const YoutubeForm = () => {
    const formik=useFormik({
        initialValues:{
            name:'',
            email:'',
            channel:''
        },
        onSubmit:values=>{
            console.log(values)
        },
        validate:values=>{
            let errors={}
            if(!values.name){
                errors.name='Required'
            }
            if(!values.email){
                errors.email='Required'
            }
            if(!values.channel){
                errors.channel='Required'
            }
            return errors
        }
    })

    console.log(formik.errors)


  return (
    <div>
      <form action="" onSubmit={formik.handleSubmit}>
        <label htmlFor="name">Name</label>
        <input type="text" id="name" name="name" onChange={formik.handleChange} value={formik.values.name}
        onBlur={formik.handleBlur}/>
        {formik.touched.name && formik.errors.name? <div>please enter name</div> : null}

        <label htmlFor="email">Email</label>
        <input type="email" id="email" name="email" onChange={formik.handleChange} value={formik.values.email} onBlur={formik.handleBlur}/>
        {formik.touched.email && formik.errors.email? <div>please enter email</div> : null}

        <label htmlFor="channel">Channel</label>
        <input type="text" id="channel" name="channel" onChange={formik.handleChange} value={formik.values.channel} onBlur={formik.handleBlur}/>
        {formik.touched.channel && formik.errors.channel? <div>please enter channel</div> : null}

        <button>Submit</button>
      </form>
    </div>
  )
}

export default YoutubeForm
