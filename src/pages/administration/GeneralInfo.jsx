import { useState } from "react";

export default function GeneralInfo() {
  const [inp_GeneralInfo, setinp_GeneralInfo] = useState({
    ID_E: '',
    ID_legal_entity: '',
    legal_form: '',
    legal_entity_name: '',
    legal_address: '',
    brand: '',
    website: '',
    attracted_by: '',
    ku: '',
    agent: '',
    segments: '',
    connection_date: '',
    external_status: '',
    internal_status: '',
    termination_date: '',
    suspect: '',
    sort: ''
  });

  const getGeneralInfoValue = (e) => {
    const { name, value } = e.target;
    setinp_GeneralInfo({
      ...inp_GeneralInfo,
      [name]: value
    });
  };

  const sendGeneralData = (e) => {
    e.preventDefault()
    console.log(inp_GeneralInfo /** inputdan olingan malumtolar api ga jo'natishga tayyor */);
  }
  return <div className='form_box'  >
    <form onSubmit={sendGeneralData}>
      <table border={1} >
        <tbody>
          <tr>
            <td>
              <label>ID E</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="ID_E"
                onChange={getGeneralInfoValue}
                placeholder="Введите ID E"
                value={inp_GeneralInfo.ID_E}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>ID Юр. лица</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="ID_legal_entity"
                value={inp_GeneralInfo.ID_legal_entity}
                onChange={getGeneralInfoValue}
                placeholder="Введите ID Юр. лица"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Организационно-правовая форма</label>
            </td>
            <td>
              <select
                className="input-control"
                name="legal_form"
                value={inp_GeneralInfo.legal_form}
                onChange={getGeneralInfoValue}
                placeholder="Выберите форму">
                <option value="">(пусто)</option>
                <option value="form1">Form 1</option>
                <option value="form2">Form 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Наименование юр лица</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="legal_entity_name"
                value={inp_GeneralInfo.legal_entity_name}
                onChange={getGeneralInfoValue}
                placeholder="Введите наименование юр лица"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Юридический адрес</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="legal_address"
                value={inp_GeneralInfo.legal_address}
                onChange={getGeneralInfoValue}
                placeholder="Введите юридический адрес"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Бренд</label>
            </td>
            <td>
              <select
                className="input-control"
                name="brand"
                value={inp_GeneralInfo.brand}
                onChange={getGeneralInfoValue}
                placeholder="Выберите бренд">
                <option value="">(пусто)</option>
                <option value="brand1">Brand 1</option>
                <option value="brand2">Brand 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Сайт</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="website"
                value={inp_GeneralInfo.website}
                onChange={getGeneralInfoValue}
                placeholder="Введите сайт"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Кто привлек</label>
            </td>
            <td>
              <select
                className="input-control"
                name="attracted_by"
                value={inp_GeneralInfo.attracted_by}
                onChange={getGeneralInfoValue}
                placeholder="Выберите кто привлек">
                <option value="">(пусто)</option>
                <option value="person1">Person 1</option>
                <option value="person2">Person 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Ку</label>
            </td>
            <td>
              <select
                className="input-control"
                name="ku"
                value={inp_GeneralInfo.ku}
                onChange={getGeneralInfoValue}
                placeholder="Выберите Ку">
                <option value="">(пусто)</option>
                <option value="ku1">KU 1</option>
                <option value="ku2">KU 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Агент</label>
            </td>
            <td>
              <select
                className="input-control"
                name="agent"
                value={inp_GeneralInfo.agent}
                onChange={getGeneralInfoValue}
                placeholder="Выберите агента">
                <option value="">(пусто)</option>
                <option value="agent1">Agent 1</option>
                <option value="agent2">Agent 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Сегменты</label>
            </td>
            <td>
              <select
                className="input-control"
                name="segments"
                value={inp_GeneralInfo.segments}
                onChange={getGeneralInfoValue}
                placeholder="Выберите сегменты">
                <option value="segments">Segments</option>
                <option value="segment1">Segment 1</option>
                <option value="segment2">Segment 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Дата подключения</label>
            </td>
            <td>
              <input
                className="input-control"
                type="date"
                name="connection_date"
                value={inp_GeneralInfo.connection_date}
                onChange={getGeneralInfoValue}
                placeholder="Выберите дату подключения"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Статус внешний</label>
            </td>
            <td>
              <select
                className="input-control"
                name="external_status"
                value={inp_GeneralInfo.external_status}
                onChange={getGeneralInfoValue}
                placeholder="Выберите внешний статус">
                <option value="">(пусто)</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Статус внутренний</label>
            </td>
            <td>
              <select
                className="input-control"
                name="internal_status"
                value={inp_GeneralInfo.internal_status}
                onChange={getGeneralInfoValue}
                placeholder="Выберите внутренний статус">
                <option value="">(пусто)</option>
                <option value="status1">Status 1</option>
                <option value="status2">Status 2</option>
              </select>
            </td>
          </tr>
          <tr>
            <td>
              <label>Дата прекращения</label>
            </td>
            <td>
              <input
                className="input-control"
                type="date"
                name="termination_date"
                value={inp_GeneralInfo.termination_date}
                onChange={getGeneralInfoValue}
                placeholder="Выберите дату прекращения"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Подоз</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="suspect"
                value={inp_GeneralInfo.suspect}
                onChange={getGeneralInfoValue}
                placeholder="Введите подозрение"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>Сорт</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="sort"
                value={inp_GeneralInfo.sort}
                onChange={getGeneralInfoValue}
                placeholder="Введите сорт"
              />
            </td>
          </tr>
        </tbody>
      </table>
      <div className='btn-box'>
        <button className='sendBtn' type='submit'>send</button>
      </div>
    </form>
  </div>;
}