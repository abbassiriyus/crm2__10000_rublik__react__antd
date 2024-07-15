import { DatePicker, Select } from "antd";
import { useState } from "react";

export default function GeneralInfo() {
  const [inp_GeneralInfo, setInp_GeneralInfo] = useState({
    companyName: '',
    joylashgan: '',
    manzil: '',
    m_email: '',
    mPhone: '',
    texnalogiya: '',
    oxirgiTashrifSana: '',
    muammolar: '',
    supervayzer: '',
    ijrochiDerektor: '',
    agent: '',
    agent_2: '',
    menejer: '',
  });

  const getGeneralInfoValue = (e) => {
    const { name, value } = e.target;
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [name]: value
    });
  };

  const sendGeneralData = (e) => {
    e.preventDefault()
    console.log(inp_GeneralInfo /** inputdan olingan malumtolar api ga jo'natishga tayyor */);
  }

  /** ant design selectdan malumot olish uchun  */
  const getGeneralSelectValue = (value, option) => {
    const { name } = option;
    setInp_GeneralInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };
  return <div className='form_box'  >
    <form onSubmit={sendGeneralData}>
      <table border={1} >
        <tbody>
          <tr>
            <td>
              <label>наименование компании</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="companyName"
                value={inp_GeneralInfo.companyName}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "",
                    name: "companyName"
                  },
                  {
                    value: 'Brand1',
                    label: 'Brand1',
                    name: "companyName"
                  },
                  {
                    value: 'Brand2',
                    label: 'Brand2',
                    name: "companyName"
                  },
                  {
                    value: 'Brand3',
                    label: 'Brand3',
                    name: "companyName"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label> населенный пункит</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="texnalogiya"
                placeholder="Выберите технология"
                value={inp_GeneralInfo.texnalogiya}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "texnalogiya"
                  },
                  {
                    value: 'texnalogiya1',
                    label: 'texnalogiya1',
                    name: "texnalogiya"
                  },
                  {
                    value: 'texnalogiya2',
                    label: 'texnalogiya2',
                    name: "texnalogiya"
                  },
                  {
                    value: 'texnalogiya3',
                    label: 'texnalogiya3',
                    name: "texnalogiya"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>адрес </label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="manzil"
                placeholder="Выберите банк"
                value={inp_GeneralInfo.manzil}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "manzil"
                  },
                  {
                    value: 'address1',
                    label: 'address1',
                    name: "manzil"
                  },
                  {
                    value: 'address2',
                    label: 'address2',
                    name: "manzil"
                  },
                  {
                    value: 'address3',
                    label: 'address3',
                    name: "manzil"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>емайл руководителя</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="m_email"
                value={inp_GeneralInfo.m_email}
                onChange={getGeneralInfoValue}
                placeholder="емайл руководителя"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>телефон руководителя</label>
            </td>
            <td>
              <input
                className="input-control"
                type="text"
                name="mPhone"
                value={inp_GeneralInfo.mPhone}
                onChange={getGeneralInfoValue}
                placeholder="телефон руководителя"
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>технология</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="texnalogiya"
                placeholder="Выберите технология"
                value={inp_GeneralInfo.texnalogiya}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "texnalogiya"
                  },
                  {
                    value: 'Brand1',
                    label: 'Brand1',
                    name: "texnalogiya"
                  },
                  {
                    value: 'Brand2',
                    label: 'Brand2',
                    name: "texnalogiya"
                  },
                  {
                    value: 'Brand3',
                    label: 'Brand3',
                    name: "texnalogiya"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>дата последнего посещения</label>
            </td>
            <td>
              <DatePicker className="input-control" name="oxirgiTashrifSana" onChange={getGeneralInfoValue} placeholder="Выберите дату договора" picker="week" value={inp_GeneralInfo.oxirgiTashrifSana} />
            </td>
          </tr>
          <tr>
            <td>
              <label>проблемъ </label>
            </td>
            <td>
              <input type="text"
                className="input-control"
                name="muammolar"
                value={inp_GeneralInfo.muammolar}
                onChange={getGeneralInfoValue} />
            </td>
          </tr>
          <tr>
            <td>
              <label>курато</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="supervayzer"
                placeholder="Выберите банк"
                value={inp_GeneralInfo.supervayzer}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "supervayzer"
                  },
                  {
                    value: 'Kurato1',
                    label: 'Kurato1',
                    name: "supervayzer"
                  },
                  {
                    value: 'Kurato2',
                    label: 'Kurato2',
                    name: "supervayzer"
                  },
                  {
                    value: 'Kurato3',
                    label: 'Kurato3',
                    name: "supervayzer"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>впио</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="ijrochiDerektor"
                value={inp_GeneralInfo.ijrochiDerektor}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "ijrochiDerektor"
                  },
                  {
                    value: 'ijrochi1',
                    label: 'ijrochi1',
                    name: "ijrochiDerektor"
                  },
                  {
                    value: 'ijrochi2',
                    label: 'ijrochi2',
                    name: "ijrochiDerektor"
                  },
                  {
                    value: 'ijrochi3',
                    label: 'ijrochi3',
                    name: "ijrochiDerektor"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>агент</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="agent"
                value={inp_GeneralInfo.agent}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "agent"
                  },
                  {
                    value: 'agent1',
                    label: 'agent1',
                    name: "agent"
                  },
                  {
                    value: 'agent2',
                    label: 'agent2',
                    name: "agent"
                  },
                  {
                    value: 'agent3',
                    label: 'agent3',
                    name: "agent"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>агент</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="agent_2"
                value={inp_GeneralInfo.agent_2}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                    name: "agent_2"
                  },
                  {
                    value: 'agent1',
                    label: 'agent1',
                    name: "agent_2"
                  },
                  {
                    value: 'agent2',
                    label: 'agent2',
                    name: "agent_2"
                  },
                  {
                    value: 'agent3',
                    label: 'agent3',
                    name: "agent_2"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label>руководителя</label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                name="menejer"
                value={inp_GeneralInfo.menejer}
                onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: "",
                    label: "(пусто)",
                  },
                  {
                    value: 'meneger1',
                    label: 'meneger1',
                    name: "menejer"
                  },
                  {
                    value: 'meneger2',
                    label: 'meneger2',
                    name: "menejer"
                  },
                  {
                    value: 'meneger3',
                    label: 'meneger3',
                    name: "menejer"
                  },
                ]}
              />
            </td>
          </tr>
          <tr>
            <td>
              <label></label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
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
          </tr>
          <tr>
            <td>
              <label></label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
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
          </tr>
          <tr>
            <td>
              <label></label>
            </td>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
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
          </tr>
        </tbody>
      </table>
      <div className='btn-box'>
        <button className='sendBtn' type='submit'>send</button>
      </div>
    </form>
  </div>;
}