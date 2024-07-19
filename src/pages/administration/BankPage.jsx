import InfoTable from '../../components/InfoTable/InfoTable.jsx'

const metadata = {
  '': [
    {
      'name': 'id',
      'title': 'Идентификатор'
    },
    {
      'name': 'name',
      'title': 'Наименование',
      'type': 'inputText'
    }, {
      'name': 'bic',
      'title': 'БИК',
      'type': 'inputText'
    }, {
      'name': 'kAccount',
      'title': 'К/С',
      'type': 'inputText'
    }
  ]
}

const InfoPage = () => {
  return (<>
    <InfoTable path={'bank'} metadata={metadata}/>
  </>)
}

export default InfoPage