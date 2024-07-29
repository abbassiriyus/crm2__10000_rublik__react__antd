import { DatePicker, Select } from 'antd';
import React, { useState } from 'react'

export default function Usloviya() {
  const [inputs, setInputs] = useState([{ value: '' }]);

  const [inp_GeneralInfo, setInp_GeneralInfo] = useState({
    companyName: '',
    joylashgan: '',
    manzil: '',
    m_email: '',
    mPhone: '',
    texnalogiya: '',
    oxirgiTashrifSana: '',
    shaxsiy_havola_manzili: [],
    supervayzer: '',
    ijrochiDerektor: '',
    agent: '',
    agent_2: '',
    menejer: '',
  });

  const sendGeneralData = (e) => {
    e.preventDefault()
    console.log(inp_GeneralInfo);
  }

  const getGeneralSelectValue = (value, option) => {
    const { name } = option;
    setInp_GeneralInfo(prevState => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleInputChange = (index, event) => {
    const values = [...inputs];
    values[index].value = event.target.value;
    setInputs(values);

    const shaxsiy_havola_manzili = values.map(input => input.value);
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      shaxsiy_havola_manzili,
    });
  };

  const handleAddInput = () => {
    setInputs([...inputs, { value: '' }]);
  };
  return (
    <div className='container' >
      <form onSubmit={sendGeneralData} className='form_box'>
        <table border={1} >
          <tbody>
            <tr>
              <td colSpan={2} >
                <label> <b>техналоида аформиления</b> </label>
              </td>
            </tr>
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
                      value: '0',
                      label: 'Yo`q',
                      name: "companyName"
                    },
                    {
                      value: '1',
                      label: 'Ha',
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
                <Select
                  style={{
                    width: '100%',
                  }}
                  name="m_email"
                  placeholder="Выберите технология"
                  value={inp_GeneralInfo.m_email}
                  onChange={(value, option) => getGeneralSelectValue(value, option)}
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                      name: "m_email"
                    },
                    {
                      value: 'Brand1',
                      label: 'Brand1',
                      name: "m_email"
                    },
                    {
                      value: 'Brand2',
                      label: 'Brand2',
                      name: "m_email"
                    },
                    {
                      value: 'Brand3',
                      label: 'Brand3',
                      name: "m_email"
                    },
                  ]}
                />
              </td>
            </tr>
            <tr>
              <td>
                <label>телефон руководителя</label>
              </td>
              <td>
                <Select
                  style={{
                    width: '100%',
                  }}
                  name="mPhone"
                  placeholder="Выберите технология"
                  value={inp_GeneralInfo.mPhone}
                  onChange={(value, option) => getGeneralSelectValue(value, option)}
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                      name: "mPhone"
                    },
                    {
                      value: 'Brand1',
                      label: 'Brand1',
                      name: "mPhone"
                    },
                    {
                      value: 'Brand2',
                      label: 'Brand2',
                      name: "mPhone"
                    },
                    {
                      value: 'Brand3',
                      label: 'Brand3',
                      name: "mPhone"
                    },
                  ]}
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
                <label>аддресс персональный ссылки  </label>
              </td>
              <td>
                {inputs.map((input, index) => (
                  <div key={index}>
                    <input
                      type="text"
                      className='input-control'
                      value={input.value}
                      onChange={event => handleInputChange(index, event)}
                    />
                  </div>
                ))}
                <button type="button" onClick={handleAddInput}
                  className='addInput'
                >
                  дабавить
                </button>
              </td>
            </tr>
            <tr>
              <td colSpan={2}>
                <label>
                  <b> условия </b>
                </label>
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
                  name="meneger"
                  value={inp_GeneralInfo.menejer}
                  onChange={(value, option) => getGeneralSelectValue(value, option)}
                  options={[
                    {
                      value: "",
                      label: "(пусто)",
                      name: "meneger"
                    },
                    {
                      value: 'meneger1',
                      label: 'meneger1',
                      name: "meneger"
                    },
                    {
                      value: 'meneger2',
                      label: 'meneger2',
                      name: "meneger"
                    },
                    {
                      value: 'meneger3',
                      label: 'meneger3',
                      name: "meneger"
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
    </div>
  )
}
