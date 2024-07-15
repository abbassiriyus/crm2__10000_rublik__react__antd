import { DatePicker, Space, Select } from "antd";
import { useState } from "react";

import React from 'react'

export default function InfoRequestTT() {
  const [requisitesValue, setRequisitesValue] = useState({
    OGRN: '',
    INN: '',
    KPP: '',
    RS: '',
    Bank: '',
    OKPO: '',
    OKATO: '',
    contractNumber: '',
    contractDate: '',
    kvSize: '',
    requisitesChangeDate: ''
  });

  const getRequestValue = (e) => {
    const { name, value } = e.target;
    setRequisitesValue({
      ...requisitesValue,
      [name]: value
    });
  };

  const sendDataTT = (e) => {
    e.preventDefault()
    console.log(requisitesValue /** inputdan olingan malumtolar api ga jo'natishga tayyor */);
  }

  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };

  /** ant design selectdan malumot olish uchun  */
  const getGeneralSelectValue = (value, option) => {
    const { name } = option;
    setInp_GeneralInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return (
    <div className='form_box' >
      <form onSubmit={sendDataTT} >
        <table border={1}>
          <tbody>
            <tr>
              <td>ОГРН</td>
              <td></td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td></td>
            </tr>
            <tr>
              <td>КПП</td>
              <td></td>
            </tr>
            <tr>
              <td>Р/С</td>
              <td>
                <input
                  type="text"
                  name="RS"
                  className="input-control"
                  placeholder="Введите Р/С"
                  value={requisitesValue.RS}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>Bank</td>
              <td>
                <Select
                  defaultValue="lucy"
                  style={{
                    width: '100%',
                  }}
                  name="Bank"
                  placeholder="Выберите банк"
                  value={requisitesValue.Bank}
                  onChange={(value, option) => getGeneralSelectValue(value, option)}
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                      name: "Bank"
                    },
                    {
                      value: 'Bank1',
                      label: 'Bank1',
                      name: "Bank"
                    },
                    {
                      value: 'Bank2',
                      label: 'Bank2',
                      name: "Bank"
                    },
                    {
                      value: 'Bank3',
                      label: 'Bank3',
                      name: "Bank"
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td></td>
            </tr>
            <tr>
              <td>OKATO</td>
              <td></td>
            </tr>
            <tr>
              <td>Номер договора сотрудничества</td>
              <td></td>
            </tr>
            <tr>
              <td>Дата договора</td>
              <td>
                <DatePicker disabled className="input-control" name="contractDate" onChange={getRequestValue} placeholder="Выберите дату договора" picker="week" value={requisitesValue.contractDate} />
              </td>
            </tr>
            <tr>
              <td>Размер КВ (%)</td>
              <td></td>
            </tr>
            <tr>
              <td>Дата изменения реквизитов</td>
              <td>
                <DatePicker disabled className="input-control" name="requisitesChangeDate" onChange={getRequestValue} placeholder="Выберите дату изменения реквизитов" picker="week" value={requisitesValue.requisitesChangeDate} />
              </td>
            </tr>
          </tbody>
        </table>
        <div className='btn-box' >
          <button className='sendBtn' type='submit' > send </button>
        </div>
      </form>
    </div>
  );
}
