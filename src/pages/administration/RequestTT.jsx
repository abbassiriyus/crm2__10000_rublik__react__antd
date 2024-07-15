import { useState } from "react";

export default function RequisitesTT() {
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

  return (
    <div className='form_box' >
      <form onSubmit={sendDataTT} >
        <table border={1}>
          <tbody>
            <tr>
              <td>ОГРН</td>
              <td>
                <input
                  type="text"
                  name="OGRN"
                  className="input-control"
                  placeholder="Введите ОГРН"
                  value={requisitesValue.OGRN}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>ИНН</td>
              <td>
                <input
                  type="text"
                  name="INN"
                  className="input-control"
                  placeholder="Введите ИНН"
                  value={requisitesValue.INN}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>КПП</td>
              <td>
                <input
                  type="text"
                  name="KPP"
                  className="input-control"
                  placeholder="Введите КПП"
                  value={requisitesValue.KPP}
                  onChange={getRequestValue}
                />
              </td>
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
                <select
                  name="Bank"
                  className="input-control"
                  placeholder="Выберите банк"
                  value={requisitesValue.Bank}
                  onChange={getRequestValue}
                >
                  <option value="">(пусто)</option>
                  <option value="Bank1">Bank1</option>
                  <option value="Bank2">Bank2</option>
                </select>
              </td>
            </tr>
            <tr>
              <td>ОКПО</td>
              <td>
                <input
                  type="text"
                  name="OKPO"
                  className="input-control"
                  placeholder="Введите ОКПО"
                  value={requisitesValue.OKPO}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>OKATO</td>
              <td>
                <input
                  type="text"
                  name="OKATO"
                  className="input-control"
                  placeholder="Введите OKATO"
                  value={requisitesValue.OKATO}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>Номер договора сотрудничества</td>
              <td>
                <input
                  type="text"
                  name="contractNumber"
                  className="input-control"
                  placeholder="Введите номер договора"
                  value={requisitesValue.contractNumber}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>Дата договора</td>
              <td>
                <input
                  type="date"
                  name="contractDate"
                  className="input-control"
                  placeholder="Выберите дату договора"
                  value={requisitesValue.contractDate}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>Размер КВ (%)</td>
              <td>
                <input
                  type="text"
                  name="kvSize"
                  className="input-control"
                  placeholder="Введите размер КВ (%)"
                  value={requisitesValue.kvSize}
                  onChange={getRequestValue}
                />
              </td>
            </tr>
            <tr>
              <td>Дата изменения реквизитов</td>
              <td>
                <input
                  type="date"
                  name="requisitesChangeDate"
                  className="input-control"
                  placeholder="Выберите дату изменения реквизитов"
                  value={requisitesValue.requisitesChangeDate}
                  onChange={getRequestValue}
                />
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