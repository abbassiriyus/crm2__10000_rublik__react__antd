import React, { useState } from 'react'
import { AiOutlineClear } from 'react-icons/ai';

export default function Banks() {
  const data = [
    {
      id: 1,
      name: 'SberBank',
      login: '44525999',
      kodTT: '40817810000000000000',
      name_2: 'ФК ',
      comment: 'Банк России',
    },
    {
      id: 2,
      name: 'Alpha',
      login: '44525999',
      kodTT: '40817810000000000000',
      name_2: '',
      comment: 'Банк России',
    },
  ]
  const [filteredData, setFilteredData] = useState(data);
  const [inputValue, setInputValue] = useState({
    name: '',
    login: '',
    kodTT: '',
    name_2: '',
    comment: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
    const filtered = data.filter(item => {
      return item[name]?.toLowerCase()?.includes(value?.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const clearValue = () => {
    setInputValue({
      name: '',
      login: '',
      kodTT: '',
      name_2: '',
      comment: '',
    });
    setFilteredData(data);
  }
  return (
    <div className='container'>
      <div className='main-box banks_box' >
        <div>
          <button className='refresh' onClick={clearValue} > <AiOutlineClear />clear </button>
        </div>
        <table border={1} className='main-table banks_table' >
          <thead>
            <tr>
              <th>
                <span>наименование </span>
                <input
                  name="name"
                  value={inputValue.name}
                  onChange={handleChange}
                  type="text"
                  className='input-control'
                  placeholder='наименование'
                />
              </th>
              <th>
                <span>INN</span>
                <input
                  name="login"
                  value={inputValue.login}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='логин '
                />
              </th>
              <th>
                <span>код тт</span>
                <input
                  name="kodTT"
                  value={inputValue.kodTT}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='код тт'
                />
              </th>
              <th>
                <span>наименование</span>
                <input
                  name="name_2"
                  value={inputValue.name_2}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='наименование'
                />
              </th>
              <th>
                комментарий
                <input
                  name="comment"
                  value={inputValue.comment}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='text..'
                />
              </th>
            </tr>
          </thead>
          <tbody>
            {
              filteredData.length > 0 ? (
                filteredData.map((item, index) => (
                  <tr key={index} className='hoverTr'
                    onClick={() => navigate('/tables')}
                  >
                    <td>{item.name}</td>
                    <td>{item.login}</td>
                    <td>{item.kodTT}</td>
                    <td>{item.name_2}</td>
                    <td>{item.comment}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th colSpan={Object.keys(data?.[0])?.length || 0 + 1} > no data... </th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
