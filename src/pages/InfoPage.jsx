import InfoTable from '../components/InfoTable/InfoTable.jsx'

const metadata = {
  'tab1': [{
    'name': 'name',
    'type': 'inputText',
    'title': 'Первый компонент'
  }, {
    'name': 'name',
    'type': 'inputText',
    'title': 'Второй компонент'
  }],
  'tab2': [{
    'name': 'element3',
    'type': 'inputText',
    'title': 'Третий компонент'
  }, {
    'name': 'element4',
    'type': 'inputText',
    'title': 'Четвертый компонент'
  }]
}

const InfoPage = () => {
  return (
    <>
      {/*В path указывается путь API для получения данных. В метада описание табов и полей*/}
      <InfoTable path={'reference'} metadata={metadata} />
    </>
  )
}

export default InfoPage
