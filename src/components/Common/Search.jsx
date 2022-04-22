import { AudioOutlined } from '@ant-design/icons';
import { Input, Space } from 'antd';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { studentAction } from '../../features/studentManager/studentSlice';

const SearchValue = () => {
    const [name, setName] = useState("");
    console.log(name);
    const dispatch = useDispatch();
    const { Search } = Input;

    const onSearch = (value) => setName(value);
    
    useEffect(() => {
        dispatch(studentAction.setSearchStudent(name));

    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [name])

    const suffix = (
        <AudioOutlined
          style={{
            fontSize: 16,
            color: '#1890ff',
          }}
        />
      );

  return (
    <div>
        <form onSubmit={e => e.preventDefault() }>
            {/* <input type="text" placeholder='search' onChange={(e) => setName(e.target.value)} className='border-2 border-rose-600 hover:border-indigo-300' />
            <button type='submit' className='bg-blue-400 w=10 '>Search</button> */}
            <Space direction="vertical">
                
                <Search
                    placeholder="input search text"
                    enterButton="Search"
                    size="large"
                    suffix={suffix}
                    onSearch={onSearch}
                />
            </Space>
        </form>
    </div>
  )
}

export default SearchValue