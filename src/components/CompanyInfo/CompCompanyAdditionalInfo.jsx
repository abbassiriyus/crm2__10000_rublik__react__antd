import React, { useState } from 'react';

const CompCompanyAdditionalInfo = () => {
  const [form, setForm] = useState({
    orgName: "",
    orgDate: "",
    orgAddress: "",
    okved: "",
    activityDescription: "",
    accountantName: "",
    accountantPhones: [""],
    lprName: "",
    lprPhones: [""],
    lprEmail: "",
    dPhones: [""],
    payment: "",
    vat: "",
    creditTerm: "",
  });


  const addPhone = (phoneType) => {
    setForm({
      ...form,
      [phoneType]: [...form[phoneType], ""],
    });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setForm({
      ...form,
      [name]: value,
    });
  };

  const handlePhoneChange = (e, index, phoneType) => {
    const newPhones = form[phoneType].map((phone, i) =>
      i === index ? e.target.value : phone
    );
    setForm({
      ...form,
      [phoneType]: newPhones,
    });
  };

  const deletePhone = (phoneType, index) => {
    const newPhones = form[phoneType].filter((_, i) => i !== index);
    setForm({
      ...form,
      [phoneType]: newPhones,
    });
  };

  return (
    <div className='compCompany_table_box' >
      <table border={1} >
        <thead>
          <tr>
            <th>
              <label htmlFor="orgName">Юридическое наименование Организации (в соответствии с учредительными документами)</label>
            </th>
            <th>
              <input className="input-control" type="text" id="orgName" name="orgName" value={form.orgName} onChange={handleInputChange} />
            </th>
          </tr>

          <tr >
            <th>
              <label htmlFor="orgDate">Дата присвоения ОГРН/ОГРНИП</label>
            </th>
            <th>
              <input className="input-control" type="date" id="orgDate" name="orgDate" value={form.orgDate} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="orgAddress">Фактический адрес Организации</label>
            </th>
            <th>
              <input className="input-control" type="text" id="orgAddress" name="orgAddress" value={form.orgAddress} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="okved">Основной ОКВЭД</label>
            </th>
            <th>
              <input className="input-control" type="text" id="okved" name="okved" value={form.okved} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="activityDescription">Подробное описание осуществляемых видов деятельности (основной указывается первым)</label>
            </th>
            <th>
              <input className="input-control" type="text" id="activityDescription" name="activityDescription" value={form.activityDescription} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="accountantName">ФИО (полностью) бухгалтера</label>
            </th>
            <th>
              <input className="input-control" type="text" id="accountantName" name="accountantName" value={form.accountantName} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="accountantPhones">Телефон Бухгалтера</label>
            </th>
            <th className='flex'>
              <div id="accountantPhones" >
                {form.accountantPhones.map((phone, index) => (
                  <div className='flex' >
                    <input className="input-control"
                      key={index}
                      type="text"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e, index, 'accountantPhones')}
                    />
                    <button type="button" onClick={() => deletePhone('accountantPhones', index)}>delete</button>
                  </div>
                ))}
              </div>
              <div>
                <button type="button" onClick={() => addPhone('accountantPhones')}>Добавить</button>
              </div>
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="lprName">ФИО ЛПР</label>
            </th>
            <th>
              <input className="input-control" type="text" id="lprName" name="lprName" value={form.lprName} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="lprPhones">Телефон ЛПР</label>
            </th>
            <th className='flex'>
              <div id="lprPhones" >
                {form.lprPhones.map((phone, index) => (
                  <div className='flex' >
                    <input className="input-control"
                      key={index}
                      type="text"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e, index, 'lprPhones')}
                    />
                    <button type="button" onClick={() => deletePhone('lprPhones', index)}>delete</button>
                  </div>
                ))}

              </div>
              <div>
                <button type="button" onClick={() => addPhone('lprPhones')}>Добавить</button>
              </div>
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="lprEmail">E-mail ЛПР</label>
            </th>
            <th>
              <input className="input-control" type="email" id="lprEmail" name="lprEmail" value={form.lprEmail} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="dPhones">Телефон д.</label>
            </th>
            <th className='flex'>
              <div id="dPhones" >
                {form.dPhones.map((phone, index) => (
                  <div className='flex' >
                    <input className="input-control"
                      key={index}
                      type="text"
                      value={phone}
                      onChange={(e) => handlePhoneChange(e, index, 'dPhones')}
                    />
                    <button type="button" onClick={() => deletePhone('dPhones', index)}>delete</button>
                  </div>
                ))}
              </div>
              <div>
                <button type="button" onClick={() => addPhone('dPhones')}>Добавить</button>
              </div>
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="payment">Плате.</label>
            </th>
            <th>
              <input className="input-control" type="text" id="payment" name="payment" value={form.payment} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="vat">Размер НДС в %, если есть</label>
            </th>
            <th>
              <input className="input-control" type="text" id="vat" name="vat" value={form.vat} onChange={handleInputChange} />
            </th>
          </tr>

          <tr>
            <th>
              <label htmlFor="creditTerm">Средний срок кредита</label>
            </th>
            <th>
              <input className="input-control" type="text" id="creditTerm" name="creditTerm" value={form.creditTerm} onChange={handleInputChange} />
            </th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default CompCompanyAdditionalInfo;
