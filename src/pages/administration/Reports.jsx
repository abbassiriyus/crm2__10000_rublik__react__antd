import GetReportButton from '../../components/GetReportButton.jsx'

function Reports() {
    return (
        <>
            <GetReportButton label="Контакты ТО" path="ContactTO" showDate={false} />
            <GetReportButton label="Тест с датой" path="ContactTO" showDate={true} />
        </>
    )
}

export default Reports