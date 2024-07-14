import React, { useState } from 'react';

function GeneralInfo({ inp_GeneralInfo, getGeneralInfoValue, sendGeneralData }) {
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




function RequisitesTT({ requisitesValue, getRequestValue, sendDataTT }) {
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

function CooperationConditions() {
  return <div>Cooperation Conditions Content</div>;
}

function Comments() {
  return <div>Comments Content</div>;
}

function Banks() {
  return <div>Banks Content</div>;
}

function AdditionalProducts() {
  return <div>Additional Products Content</div>;
}

function TabPage() {
  const [activeTab, setActiveTab] = useState('GeneralInfo');

  const renderTabContent = () => {
    // requisites TT tab uchun kerakli malumtlar
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

    // general info tab uchun kerakli malumtlar
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


    switch (activeTab) {
      case 'GeneralInfo':
        return <GeneralInfo inp_GeneralInfo={inp_GeneralInfo} getGeneralInfoValue={getGeneralInfoValue} sendGeneralData={sendGeneralData} />;
      case 'RequisitesTT':
        return <RequisitesTT requisitesValue={requisitesValue} getRequestValue={getRequestValue} sendDataTT={sendDataTT} />;
      case 'CooperationConditions':
        return <CooperationConditions />;
      case 'Comments':
        return <Comments />;
      case 'Banks':
        return <Banks />;
      case 'AdditionalProducts':
        return <AdditionalProducts />;
      default:
        return null;
    }
  };

  const btnData = [
    {
      text: "Общая информация",
      tab: "GeneralInfo"
    },
    {
      text: "Реквизиты Т",
      tab: "RequisitesTT"
    },
    {
      text: "Условия сотрудничества",
      tab: "CooperationConditions"
    },
    {
      text: "Комментарий по ТО",
      tab: "Comments"
    },
    {
      text: "Банки",
      tab: "Banks"
    },
    {
      text: "Доп. продукты",
      tab: "AdditionalProducts"
    },

  ]


  return (
    <div >
      <div className="tab-buttons">
        {
          btnData.map((btn, index) => {
            return (
              <button key={index} className={`${btn.tab === activeTab ? 'active' : ""}`} onClick={() => setActiveTab(btn.tab)}> {btn.text} </button>
            )
          })
        }
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default TabPage;
