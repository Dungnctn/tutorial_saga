import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'
import { studentAction } from './studentSlice'

const EditStudent = () => {
    const { id } = useParams();
    const { register, handleSubmit, reset } = useForm();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    useEffect(() => {
        const getStudent = async () => {
            const {data} = await axios.get("http://localhost:3001/students/"+id);
            reset(data);
        }
        getStudent()
    }, [])

    const submit = (data) => {
        dispatch(studentAction.editStudent(data));
        navigate('/admin/student');
    }

  return (
    <div>
        <form onSubmit={handleSubmit(submit)}>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Name</label>
                <input type="text" {...register("name")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Age</label>
                <input type="text" {...register("age")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Email</label>
                <input type="email" {...register("email")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Phone</label>
                <input type="number" {...register("phone")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Address</label>
                <input type="text" {...register("address")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <div className="mb-3">
                <label htmlFor="exampleInputEmail1" className="form-label">Code</label>
                <input type="text" {...register("code")} className="form-control" id="exampleInputEmail1" placeholder='Name...' aria-describedby="emailHelp" />
            </div>
            <button className="btn btn-primary">Submit</button>
        </form>
    </div>
  )
}

export default EditStudent