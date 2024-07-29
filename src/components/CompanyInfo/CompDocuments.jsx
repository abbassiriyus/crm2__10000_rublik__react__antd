import { PlusCircleFilled, PlusCircleOutlined, PlusCircleTwoTone } from '@ant-design/icons';
import React, { useState } from 'react'

export default function CompDocuments() {
  const [img, setImg] = useState({
    url: "",
    name: "",
    size: 0,
    date: ""
  })
  const getValue = (e) => {
    const { name, size, lastModifiedDate } = e.target.files[0]
    setImg({ ...img, url: URL.createObjectURL(e.target.files[0]), date: lastModifiedDate, name, size })
  }

  const formatDate = (dateString, getHour = true) => {
    if (dateString) {
      const date = new Date(dateString);
      const day = String(date.getDate()).padStart(2, "0");
      const month = String(date.getMonth() + 1).padStart(2, "0");
      const year = date.getFullYear();
      const hours = String(date.getHours()).padStart(2, "0");
      const minutes = String(date.getMinutes()).padStart(2, "0");

      return getHour
        ? `${day}.${month}.${year} ${hours}:${minutes}`
        : `${day}.${month}.${year}`;
    }
    return "";
  }

  return (
    <div className='form_box document_table'>
      <table border={1} >
        <thead>
          <tr>
            <th>Документы компании</th>
            <th  >
              <table border={1}  >
                <tr>
                  <th>
                    <label htmlFor="rasm" className='img_btn' > <PlusCircleOutlined /> Дата загрузки</label>
                    <input type="file" id='rasm' style={{ display: "none" }} onChange={getValue} />
                  </th>
                  <th>
                    <table>
                      <tr>
                        <th>
                          Описание файла
                        </th>
                        <th>
                          Размер файла
                        </th>
                        <th>
                          Роль файла
                        </th>
                      </tr>
                      <tr>
                        <td>{img.name}</td>
                        <td>{img.size} КБ</td>
                        <td>{formatDate(img.date)}</td>
                      </tr>
                    </table>
                  </th>
                </tr>
              </table>
            </th>
            <th>
              <button className='img_btn' > обрасец </button>
            </th>
          </tr>
        </thead>
      </table>

    </div>
  )
}
