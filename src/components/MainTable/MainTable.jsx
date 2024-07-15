import React, { useState } from 'react'
import './main.css'
import { HiRefresh } from 'react-icons/hi';
import { AiOutlineClear } from 'react-icons/ai';
import { Pagination } from 'antd';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

export default function MainTable() {
  const { data } = useSelector((state) => state.MainTable)
  const navigate = useNavigate()
  const [filteredData, setFilteredData] = useState(data);

  const [inputValue, setInputValue] = useState({
    idTT: '',
    inn: '',
    yuridicheskoeLitso: '',
    brend: '',
    naselenniyPunkit: '',
    adres: '',
    dataPosledneyProdaji: '',
    kurator: '',
    segment: '',
    texnalogiya: '',
    dataPodklyucheniya: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setInputValue({
      ...inputValue,
      [name]: value
    });
    const filtered = data.filter(item => {
      return item[name].toLowerCase().includes(value.toLowerCase());
    });
    setFilteredData(filtered);
  };

  const clearValue = () => {
    setInputValue({
      idTT: '',
      inn: '',
      yuridicheskoeLitso: '',
      brend: '',
      naselenniyPunkit: '',
      adres: '',
      dataPosledneyProdaji: '',
      kurator: '',
      segment: '',
      texnalogiya: '',
      dataPodklyucheniya: '',
    });
    setFilteredData(data);
  }
  const [currentPage, setCurrentPage] = useState(1);
  const pageSize = 5;
  const paginatedData = filteredData.slice((currentPage - 1) * pageSize, currentPage * pageSize);
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className='container'>
      <div className='main-box' >
        <div className='flex gap-2' >
          <button className='refresh' > <HiRefresh /> yangilash </button>
          <button className='refresh' onClick={clearValue} > <AiOutlineClear />clear </button>
        </div>
        <table border={1} className='main-table' >
          <thead>
            <tr>
              <th>
                <span>ID TT</span>
                <input
                  name="idTT"
                  value={inputValue.idTT}
                  onChange={handleChange}
                  type="text"
                  className='input-control'
                  placeholder='ID...'
                />
              </th>
              <th>
                INN
                <input
                  name="inn"
                  value={inputValue.inn}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='INN...'
                />
              </th>
              <th>
                yuridicheskoe litso
                <input
                  name="yuridicheskoeLitso"
                  value={inputValue.yuridicheskoeLitso}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='text..'
                />
              </th>
              <th>
                brend
                <select
                  name="brend"
                  value={inputValue.brend}
                  onChange={handleChange}
                  className='input-control'
                >
                  <option value="option-1">option-1</option>
                  <option value="option-2">option-2</option>
                  <option value="option-3">option-3</option>
                  <option value="option-4">option-4</option>
                </select>
              </th>
              <th>
                Naselenniy punkit
                <input
                  name="naselenniyPunkit"
                  value={inputValue.naselenniyPunkit}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='text..'
                />
              </th>
              <th>
                Адрес
                <input
                  name="adres"
                  value={inputValue.adres}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='create date'
                />
              </th>
              <th>
                data posledney prodaji
                <input
                  name="dataPosledneyProdaji"
                  value={inputValue.dataPosledneyProdaji}
                  onChange={handleChange}
                  className='input-control'
                  type="date"
                />
              </th>
              <th>
                kurator
                <select
                  name="kurator"
                  value={inputValue.kurator}
                  onChange={handleChange}
                  className='input-control'
                >
                  <option hidden>vibrat filter</option>
                  <option value="option-1">option-1</option>
                  <option value="option-2">option-2</option>
                  <option value="option-3">option-3</option>
                  <option value="option-4">option-4</option>
                </select>
              </th>
              <th>
                segment
                <select
                  name="segment"
                  value={inputValue.segment}
                  onChange={handleChange}
                  className='input-control'
                >
                  <option hidden>vibrat filter</option>
                  <option value="option-1">option-1</option>
                  <option value="option-2">option-2</option>
                  <option value="option-3">option-3</option>
                  <option value="option-4">option-4</option>
                </select>
              </th>
              <th>
                texnalogiya
                <input
                  name="texnalogiya"
                  value={inputValue.texnalogiya}
                  onChange={handleChange}
                  className='input-control'
                  type="text"
                  placeholder='texnalogiya'
                />
              </th>
              <th>
                data podklyucheniya
                <input
                  name="dataPodklyucheniya"
                  value={inputValue.dataPodklyucheniya}
                  onChange={handleChange}
                  className='input-control'
                  type="date"
                  placeholder='create date'
                />
              </th>
              <th>actions</th>
            </tr>
          </thead>
          <tbody>
            {
              paginatedData.length > 0 ? (
                paginatedData.map((item, index) => (
                  <tr key={index} className='hoverTr'
                    onClick={() => navigate('/tables')}
                  >
                    <td>{item.idTT}</td>
                    <td>{item.inn}</td>
                    <td>{item.yuridicheskoeLitso}</td>
                    <td>{item.brend}</td>
                    <td>{item.naselenniyPunkit}</td>
                    <td>{item.adres}</td>
                    <td>{item.dataPosledneyProdaji}</td>
                    <td>{item.kurator}</td>
                    <td>{item.segment}</td>
                    <td>{item.texnalogiya}</td>
                    <td>{item.dataPodklyucheniya}</td>
                    <td>
                      <button className='infoBtn' onClick={(e) => {
                        e.stopPropagation()
                        navigate(`${item.idTT}`)
                      }} > info TT </button>
                      <button className='infoBtn' onClick={(e) => {
                        e.stopPropagation()
                        navigate('/company-info')
                      }}  > info Company </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <th colSpan={Object.keys(data[0]).length + 1} > no data... </th>
                </tr>
              )
            }
          </tbody>
        </table>
      </div>
      <div className='pagenation-box' >
        <Pagination defaultCurrent={1} total={filteredData.length} onChange={handlePageChange} pageSize={5} />
      </div>
    </div>
  )
}