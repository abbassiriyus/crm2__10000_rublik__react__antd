import { Input, Select } from 'antd';
import React, { useState } from 'react';

function CompCommercialTerms() {
  return (
    <div>
      <br />
      <div className="document_table">
        <table border={1} >
          <tr>
            <th>Тип услуги</th>
            <th>
              <Input type="date" />
            </th>
          </tr>
        </table>
      </div>
      <br />
      <div className='document_table' >
        <table border={1} >
          <thead>
            <tr>
              <th colSpan={2}>
                Наименование услуги
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Сроки оплаты
              </td>
              <td>
                <Select
                  style={{
                    width: '100%',
                  }}
                  name="texnalogiya"
                  placeholder="Выберите технология"
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                    },
                    {
                      value: "",
                      label: "(пусто)",
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>
                Ставка годовых процентов
              </td>
              <td>
                <Select
                  style={{
                    width: '100%',
                  }}
                  placeholder="Выберите технология"
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                    },
                    {
                      value: "",
                      label: "(пусто)",
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>
                Ставка месячных процентов
              </td>
              <td>
                <Select
                  style={{
                    width: '100%',
                  }}
                  placeholder="Выберите технология"
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                    },
                    {
                      value: "",
                      label: "(пусто)",
                    },
                  ]}
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <div className="document_table">
        <table border={1} >
          <th colSpan={2}>
            Примечание
          </th>
          <tbody>
            <tr>
              <td>
                допустимие ставки по которым моено работать и до
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                размер (%)
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                разме  (руб )
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <br />
      <div className="document_table">
        <table border={1} >
          <th colSpan={2} >
            инкассация нашим курером  для онлине технологом
          </th>
          <tbody>
            <tr>
              <td>
                розавая  (руб )
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                розавая  (руб )
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                за счот  страховки  клиента
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                удаленный   (руб )
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
            <tr>
              <td>
                удаленный   (руб )
              </td>
              <td>
                <Input type="text" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <br />
      <div className="document_table">
        <table border={1} >
          <thead>
            <tr>
              <th>
                Наименование услуги
              </th>
              <th>
                Сроки оплаты
              </th>
              <th>
                Ставка годовых процентов
              </th>
              <th>
                Ставка месячных процентов
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No record found.</td>
            </tr>
          </tbody>
        </table>
      </div>

    </div>
  );
}

export default CompCommercialTerms;
