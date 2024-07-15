import React, { useState } from 'react'
import './main.css'
import { HiRefresh } from 'react-icons/hi';
import { AiOutlineClear } from 'react-icons/ai';
import { Pagination } from 'antd';

export default function MainTable() {



  const data = [
    {
      idTT: '1',
      inn: '123456789',
      yuridicheskoeLitso: 'Company A',
      brend: 'option-1',
      naselenniyPunkit: 'City A',
      adres: 'Address A',
      dataPosledneyProdaji: '2023-06-01',
      kurator: 'option-1',
      segment: 'option-1',
      texnalogiya: 'Technology A',
      dataPodklyucheniya: '2023-01-01',
    },
    {
      idTT: '2',
      inn: '987654321',
      yuridicheskoeLitso: 'Company B',
      brend: 'option-2',
      naselenniyPunkit: 'City B',
      adres: 'Address B',
      dataPosledneyProdaji: '2023-06-02',
      kurator: 'option-2',
      segment: 'option-2',
      texnalogiya: 'Technology B',
      dataPodklyucheniya: '2023-01-02',
    },
    {
      idTT: '3',
      inn: '123123123',
      yuridicheskoeLitso: 'Company C',
      brend: 'option-3',
      naselenniyPunkit: 'City C',
      adres: 'Address C',
      dataPosledneyProdaji: '2023-06-03',
      kurator: 'option-3',
      segment: 'option-3',
      texnalogiya: 'Technology C',
      dataPodklyucheniya: '2023-01-03',
    },
    {
      idTT: '4',
      inn: '654321987',
      yuridicheskoeLitso: 'Company D',
      brend: 'option-4',
      naselenniyPunkit: 'City D',
      adres: 'Address D',
      dataPosledneyProdaji: '2023-06-04',
      kurator: 'option-4',
      segment: 'option-4',
      texnalogiya: 'Technology D',
      dataPodklyucheniya: '2023-01-04',
    },
    {
      idTT: '5',
      inn: '321654987',
      yuridicheskoeLitso: 'Company E',
      brend: 'option-1',
      naselenniyPunkit: 'City E',
      adres: 'Address E',
      dataPosledneyProdaji: '2023-06-05',
      kurator: 'option-1',
      segment: 'option-1',
      texnalogiya: 'Technology E',
      dataPodklyucheniya: '2023-01-05',
    },
    {
      idTT: '6',
      inn: '789654123',
      yuridicheskoeLitso: 'Company F',
      brend: 'option-2',
      naselenniyPunkit: 'City F',
      adres: 'Address F',
      dataPosledneyProdaji: '2023-06-06',
      kurator: 'option-2',
      segment: 'option-2',
      texnalogiya: 'Technology F',
      dataPodklyucheniya: '2023-01-06',
    },
    {
      idTT: '7',
      inn: '456789321',
      yuridicheskoeLitso: 'Company G',
      brend: 'option-3',
      naselenniyPunkit: 'City G',
      adres: 'Address G',
      dataPosledneyProdaji: '2023-06-07',
      kurator: 'option-3',
      segment: 'option-3',
      texnalogiya: 'Technology G',
      dataPodklyucheniya: '2023-01-07',
    },
    {
      idTT: '8',
      inn: '321987654',
      yuridicheskoeLitso: 'Company H',
      brend: 'option-4',
      naselenniyPunkit: 'City H',
      adres: 'Address H',
      dataPosledneyProdaji: '2023-06-08',
      kurator: 'option-4',
      segment: 'option-4',
      texnalogiya: 'Technology H',
      dataPodklyucheniya: '2023-01-08',
    },
    {
      idTT: '9',
      inn: '789123456',
      yuridicheskoeLitso: 'Company I',
      brend: 'option-1',
      naselenniyPunkit: 'City I',
      adres: 'Address I',
      dataPosledneyProdaji: '2023-06-09',
      kurator: 'option-1',
      segment: 'option-1',
      texnalogiya: 'Technology I',
      dataPodklyucheniya: '2023-01-09',
    },
    {
      idTT: '10',
      inn: '654123789',
      yuridicheskoeLitso: 'Company J',
      brend: 'option-2',
      naselenniyPunkit: 'City J',
      adres: 'Address J',
      dataPosledneyProdaji: '2023-06-10',
      kurator: 'option-2',
      segment: 'option-2',
      texnalogiya: 'Technology J',
      dataPodklyucheniya: '2023-01-10',
    }
  ];
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
    <div className='container' >
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
                  <tr key={index}>
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
                      <button className='infoBtn' > info TT </button>
                      <button className='infoBtn' > info Company </button>
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