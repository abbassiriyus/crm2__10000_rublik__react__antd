import { DatePicker, Select } from 'antd';
import React from 'react'

export default function Comments() {

  const tableData = [
    {
      login: 'user1',
      kod: '001',
      status: '',
      polzovatel: 'Иван Иванов',
      dataSmeneStatusa: '2024-07-15',
      kommentariy: 'Комментарий 1'
    },
    {
      login: 'user2',
      kod: '002',
      status: '',
      polzovatel: 'Анна Петрова',
      dataSmeneStatusa: '2024-07-14',
      kommentariy: 'Комментарий 2'
    },
    {
      login: 'user3',
      kod: '003',
      status: '',
      polzovatel: 'Сергей Сидоров',
      dataSmeneStatusa: '2024-07-13',
      kommentariy: 'Комментарий 3'
    }
  ];


  const handleGetValue = (e) => {
    e.preventDefault()
    console.log(inp_GeneralInfo /** inputdan olingan malumtolar api ga jo'natishga tayyor */);
  }

  return (
    <div className='commentTable'>
      <table border={1} >
        <tbody>
          <tr>
            <th style={{ textTransform: "capitalize" }} >
              примечание
            </th>
            <td>
              <textarea className='input-control' style={{ width: "100%", resize: 'none' }} ></textarea>
            </td>
          </tr>
        </tbody>
      </table>
      <div className='commentBox form_box' >
        <table border={1}>
          <thead>
            <tr>
              <th>
                наименование
              </th>
              <th>
                логин
              </th>
              <th>
                код
              </th>
              <th>
                статус
              </th>
              <th>
                пользователь
              </th>
              <th>
                дата смены статуса
              </th>
              <th>
                комментарий
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <th rowSpan={4} >
                кредит европа банк
              </th>
            </tr>
            {
              tableData.map((item, index) => (
                <tr key={index}>
                  {/* <td>{item.naimenovanie}</td> */}
                  <td>
                    <input type="text" className='input-control' />
                  </td>
                  <td>
                    <input type="text" className='input-control' />
                  </td>
                  <td>
                    <Select
                      style={{
                        width: '100px',
                      }}
                      placeholder="выберите статус"
                      value={item.status}
                      options={[
                        {
                          value: "",
                          label: "(пусто)",
                        },
                        {
                          value: 'select1',
                          label: 'select1',
                        },
                        {
                          value: 'select2',
                          label: 'select2',
                        },
                        {
                          value: 'select3',
                          label: 'select3',
                        },
                      ]}
                    />
                  </td>
                  <td><input type="text" className='input-control' /></td>
                  <td>
                    <DatePicker className="input-control" name="oxirgiTashrifSana" onChange={handleGetValue} placeholder="Выберите дату договора" picker="week" />
                  </td>
                  <td><input type="text" className='input-control' /></td>
                </tr>
              ))
            }
          </tbody>
        </table>
      </div>
    </div>
  )
}
