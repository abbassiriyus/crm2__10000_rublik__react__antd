import React from 'react'

export default function CompLK() {
  return (
    <div>
      <div className='flex_login' >
        <h1> главный логин </h1>
        <input type="text" />
        <input type="checkbox" />
        <button className='img_btn' >изменет</button>
      </div>
      <div className='document_table' >
        <table>
          <thead>
            <tr>
              <th>
                сотрудник
              </th>
              <th>
                логин сотрудника
              </th>
              <th>
                логин адрес тт
              </th>
              <th>
                активность логина
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>no date...</td>
              {/* <td>
                первый сотрудник
              </td>
              <td>
                first_user
              </td>
              <td>
                first_tt
              </td>
              <td>
                активен
              </td> */}
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}
