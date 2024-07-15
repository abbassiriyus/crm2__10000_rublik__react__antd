export default function RequisitesTT() {
  const data = [
    { label: "ОГРН", value: "11" },
    { label: "ИНН", value: "897" },
    { label: "КПП", value: "" },
    { label: "Р/С", value: "23" },
    { label: "К/С", value: "30101" },
    { label: "Банк", value: "ТОЧКА ПАО БАНКА 'ФК ОТКРЫТИЕ'" },
    { label: "БИК", value: "044525999" },
    { label: "ОКПО", value: "" },
    { label: "ОКАТО", value: "" },
    { label: "Размер КБ(%)", value: "0.0" },
    { label: "Дата изменения реквизитов", value: "" }
  ];

  return (
    <div className="form_box">
      <table border="1">
        <tbody>
          {data.map((row, index) => (
            <tr key={index}>
              <td>{row.label}</td>
              <td>{row.value}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>

  )
}