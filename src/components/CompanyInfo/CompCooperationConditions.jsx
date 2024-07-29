import { Input, Select } from 'antd';
import React, { useState } from 'react'

export default function CompCooperationConditions() {

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
    personal_link: ['']
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


  const addInput = (inputType) => {
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [inputType]: [...inp_GeneralInfo[inputType], ""],
    });
  };

  const handleInputChange = (e, index, inputType) => {
    const newPhones = inp_GeneralInfo[inputType].map((value, i) =>
      i === index ? e.target.value : value
    );
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [inputType]: newPhones,
    });
  };

  const deleteInput = (inputType, index) => {
    const newPhones = inp_GeneralInfo[inputType].filter((_, i) => i !== index);
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [inputType]: newPhones,
    });
  };

  return (
    <div>
      <form onSubmit={sendGeneralData} className='table_helf compCompany_table_box'>
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
            <tr>
              <td>
                <label> адрес персонал  ссылки  </label>
              </td>
              <td>
                <div className="flex">
                  <div>
                    {inp_GeneralInfo.personal_link.map((value, index) => (
                      <div className='flex' >
                        <Input className="input-control"
                          key={index}
                          style={{ width: "50%" }}
                          type="text"
                          value={value}
                          onChange={(e) => handleInputChange(e, index, 'personal_link')}
                        />
                        <button type="button" onClick={() => deleteInput('personal_link', index)}>delete</button>
                      </div>
                    ))}
                  </div>
                  <div  >
                    <button type="button" onClick={() => addInput('personal_link')}>Добавить</button>
                  </div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
        {/* <div className='btn-box'>
          <button className='sendBtn' type='submit'>send</button>
        </div> */}
      </form>
    </div>
  )
}
