import InfoTable from '../../components/InfoTable/InfoTable.jsx'

const metadata = {
  '': [
    {
      'name': 'id',
      'title': 'Идентификатор'
    },
    {
      'name': 'name',
      'type': 'inputText',
      'title': 'Наименование'
    }, {
      'name': 'group_id',
      'title': 'Группа',
      'type': 'select',
      'selectPath': 'referencegroup/list'
    }
  ]
}

const InfoPage = () => {
  return (<>
    <InfoTable path={'reference'} metadata={metadata}/>
  </>)
}

export default InfoPage
