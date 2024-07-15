import React from 'react'

export default function All_Info() {
  const data = {
    saleVolume: "Объем продаж",
    date: "03.06.2021",
    curator: "Куратор",
    phones: ["+7111111", "+722222222"],
    email: "l@gmail.com",
    gsto: "ГСТО",
    segments: "Образование online",
    issues: "Проблемы ТТ"
  };

  return (
    <div className='form_box' >
      <table border="1" cellPadding="10">
        <tbody>
          <tr>
            <td>{data.saleVolume}</td>
            <td></td>
          </tr>
          <tr>
            <td>Дата заведения</td>
            <td>{data.date}</td>
          </tr>
          <tr>
            <td>{data.curator}</td>
            <td></td>
          </tr>
          <tr>
            <td>Телефон ТТ</td>
            <td  >
              <div className="borderTop">
                {data.phones.map((phone, index) => (
                  <div key={index}>{phone}</div>
                ))}
              </div>
            </td>
          </tr>
          <tr>
            <td>E-mail ТТ</td>
            <td>
              <div className="borderTop textR ">
                {data.email}
              </div>
            </td>
          </tr>
          <tr>
            <td>{data.gsto}</td>
            <td></td>
          </tr>
          <tr>
            <td>Сегменты</td>
            <td>
              <div className="borderTop">
                <b> {data.segments.split(' ')} </b>
                {...data.segments.split(' ').slice(1)}
              </div>
            </td>
          </tr>
          <tr>
            <td>{data.issues}</td>
            <td></td>
          </tr>
        </tbody>
      </table>
    </div >
  );
}
