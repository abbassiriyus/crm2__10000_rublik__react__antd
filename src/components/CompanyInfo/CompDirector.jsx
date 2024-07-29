import React, { useState } from 'react';

function CompDirector() {
  const [inp_GeneralInfo, setInp_GeneralInfo] = useState({
    companyName: '',
    joylashgan: '',
    manzil: '',
    m_email: '',
    mPhone: '',
    texnalogiya: '',
    oxirgiTashrifSana: '',
    supervayzer: '',
    ijrochiDerektor: '',
    agent: '',
    agent_2: '',
    menejer: '',
    shaxsiy_havola_manzili: [''],
    personal_link: ['']
  });

  const sendGeneralData = (e) => {
    e.preventDefault();
    console.log(inp_GeneralInfo);
  };

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
    const newValues = inp_GeneralInfo[inputType].map((value, i) =>
      i === index ? e.target.value : value
    );
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [inputType]: newValues,
    });
  };

  const deleteInput = (inputType, index) => {
    const newValues = inp_GeneralInfo[inputType].filter((_, i) => i !== index);
    setInp_GeneralInfo({
      ...inp_GeneralInfo,
      [inputType]: newValues,
    });
  };

  return (
    <div>
      <form onSubmit={sendGeneralData} className='table_helf compCompany_table_box'  >
        <table border="1" >
          <thead>
            <tr>
              <th>Label</th>
              <th>Input</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {Object.entries(inp_GeneralInfo).map(([key, value]) => (
              <React.Fragment key={key}>
                {Array.isArray(value) ? (
                  value.map((v, index) => (
                    <tr key={index}>
                      <td>
                        <label>{key}</label>
                      </td>
                      <td>
                        <input
                          value={v}
                          className='input-control'
                          onChange={(e) => handleInputChange(e, index, key)}
                        />
                      </td>
                      <td className='flex_btn' >
                        {value.length > 1 ? <button
                          type="button"
                          onClick={() => deleteInput(key, index)}
                        >
                          Delete
                        </button> : null}
                        <button
                          type="button"
                          onClick={() => addInput(key)}
                        >
                          add
                        </button>
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td>
                      <label>{key}</label>
                    </td>
                    <td>
                      <input
                        className='input-control'
                        value={value}
                        onChange={(e) =>
                          setInp_GeneralInfo({
                            ...inp_GeneralInfo,
                            [key]: e.target.value,
                          })
                        }
                      />
                    </td>
                    <td></td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
        {/* <div className='btn-box'>
          <button className='sendBtn' type='submit'>send</button>
        </div> */}
      </form>
    </div>
  );
}

export default CompDirector;
