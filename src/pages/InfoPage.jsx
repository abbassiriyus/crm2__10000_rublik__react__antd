<<<<<<< HEAD
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
=======
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
>>>>>>> 9456746e065c2a67869e6d4b87da5193b7626138
