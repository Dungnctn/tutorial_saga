import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Button, Table } from 'antd';
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';
import SearchValue from '../../components/Common/Search';
import { studentAction } from './studentSlice';

const StudentManager = () => {
  const dispatch = useDispatch();
  const students = useSelector((state) => state.student.value);

  useEffect(() => {
    dispatch(studentAction.getAllStudent());
    
  }, []);

  // console.log('student',students);
    
    const columns = [
        {
          title: '#',
          dataIndex: 'key',
          key: 'key',
        },
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
        {
          title: 'Email',
          dataIndex: 'email',
          key: 'email',
        },
        {
          title: 'Phone',
          dataIndex: 'phone',
          key: 'phone',
        },
        {
          title: 'Code',
          dataIndex: 'code',
          key: 'code',
        },
        {
          title: '',
          dataIndex: 'edit',
          key: 'edit',
        },
        {
          title: '',
          dataIndex: 'delete',
          key: 'delete'
        }
      ];
      const dataSource = students?.map((item, index) => {
        return {
          key: index + 1,
          name: item.name,
          age: item.age,
          address: item.address,
          email: item.email,
          phone: item.phone,
          code: item.code,
          edit: <NavLink className={'text-black'} to={`/admin/student/${item.id}/edit`}> <EditOutlined /> </NavLink> ,
          delete: <Button onClick={() => dispatch(studentAction.removeStudent(item.id))} icon={<DeleteOutlined />} />
        }
      }) ;
  return (
    <div>
      <SearchValue />
      <Button className='float-left'><NavLink to={'/admin/student/add'}>Add</NavLink></Button>
      <Table columns={columns} dataSource={dataSource} />
    </div>
  )
}

export default StudentManager