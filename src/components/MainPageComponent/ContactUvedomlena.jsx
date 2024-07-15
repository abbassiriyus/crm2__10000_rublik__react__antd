import React from 'react'

export default function ContactUvedomlena() {

  const data = {
    direktor: [
      {
        title: 'Имя',
        text: "Иван"
      },
      {
        title: 'Фамилия',
        text: "Иванов"
      },
      {
        title: 'Отчество',
        text: "Иванович"
      },
      {
        title: 'Дата рождения',
        text: "01.01.1980"
      }
    ],
    kontaktTT: [
      {
        title: "telefon",
        text: "+998931234567"
      },
      {
        title: "e-mail",
        text: "example@gmail.com"
      }
    ]
  }

  return (
    <div className='form_box' >
      <table border={1}>
        <tbody>
          <td rowSpan={5}>
            директор
          </td>
          {data.direktor.map((item, index) => (
            <tr key={index}>
              <td>{item.title}</td>
              <td>{item.text}</td>
            </tr>
          ))}
        </tbody>
      </table>
      <table border={1} >
        <tbody>
          <td rowSpan={5}>
            контакты ТТ
          </td>
          {data.kontaktTT.map((item, index) => (
            <tr key={index}>
              <td>
                <b>{item.title}</b>
                <div className='borderTop' >
                  {item.text}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}