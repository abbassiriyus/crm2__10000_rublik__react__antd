import { DatePicker, Select } from 'antd'
import React from 'react'

export default function CompContract() {
  return (
    <div className='form_box compContract'>
      <table border={1} >
        <tbody>
          <tr>
            <th>
              статус договора
            </th>
            <th>
              <Select
                style={{
                  width: '100%',
                }}
                name="contract"
                // value={inputValue.contract}
                // onChange={(value, option) => getGeneralSelectValue(value, option)}
                options={[
                  {
                    value: '',
                    label: '(пусто)',
                    name: "contract"
                  },
                  {
                    value: '',
                    label: 'select 1',
                    name: "contract"
                  },
                  {
                    value: '',
                    label: 'select 2',
                    name: "contract"
                  },
                  {
                    value: '',
                    label: 'select 3',
                    name: "contract"
                  },
                ]}
              />
            </th>
          </tr>
          <tr>
            <th>
              дата   изменения статуса
            </th>
            <th>
              <DatePicker disabled className="input-control" name="contractDate" placeholder="Выберите дату договора" picker="week" />
            </th>
          </tr>
          <tr>
            <th>
              номер договора сотруднечества
            </th>
            <th>
              <input type="text" className='input-control' />
            </th>
          </tr>
          <tr>
            <th>
              дата договора
            </th>
            <th>
              <DatePicker className="input-control" name="contractDate" placeholder="Выберите дату договора" picker="week" />
            </th>
          </tr>
          <tr>
            <th>
              номер папки
            </th>
            <th>
              <input type="text" className='input-control' />
            </th>
          </tr>
          <tr>
            <th>
              дата расторжения
            </th>
            <th>
              <DatePicker className="input-control" name="contractDate" placeholder="Выберите дату договора" picker="week" />
            </th>
          </tr>
        </tbody>

      </table>
    </div>
  )
}
