import { Select } from 'antd'
import React from 'react'

export default function ExtraProduct() {
  return (
    <div className='form_box' >
      <table border={1}>
        <tbody>
          <tr>
            <th>
              подключения
            </th>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                placeholder="(пусто)"
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
            <th>
              подключения
            </th>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                placeholder="(пусто)"
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
            <th>
              подключения
            </th>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                placeholder="(пусто)"
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
            <th>
              подключения
            </th>
            <td>
              <Select
                style={{
                  width: '100%',
                }}
                placeholder="(пусто)"
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
    </div>
  )
}
