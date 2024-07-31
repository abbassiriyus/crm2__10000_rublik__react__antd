import InfoTable from '../components/InfoTable/InfoTable.jsx'
import Breadcrumbs from '../components/BreadCrumb/BreadCrumb.jsx'

const metadata = {
  'GeneralInfo': [{
    'name': 'name',
    'type': 'GeneralInfo',
    'title': 'Первый компонент'
  }],
  'RequisitesTT': [{
    'name': 'element3',
    'type': 'RequisitesTT',
    'title': 'Третий компонент'
  }],
  'Usloviya': [{
    'name': 'element3',
    'type': 'Usloviya',
    'title': 'Третий компонент'
  }],
  'Comments': [{
    'name': 'element3',
    'type': 'Comments',
    'title': 'Третий компонент'
  }],
  'Banks': [{
    'name': 'element3',
    'type': 'Banks',
    'title': 'Третий компонент'
  }],
  'AdditionalProducts': [{
    'name': 'element3',
    'type': 'AdditionalProducts',
    'title': 'Третий компонент'
  }],
  'InputTextRow': [{
    'name': 'element3',
    'type': 'InputTextRow',
    'title': 'Третий компонент'
  }],
  'InputTextRowList': [{
    'name': 'element3',
    'type': 'InputTextRowList',
    'title': 'Третий компонент'
  }],
  'InputSelectRow': [{
    'name': 'element3',
    'type': 'InputSelectRow',
    'title': 'Третий компонент'
  }],
}

const InfoPage = () => {
  return (
    <>
      {/*В path указывается путь API для получения данных. В метада описание табов и полей*/}
      <div className="container">
        <Breadcrumbs />
        <InfoTable path={'reference'} metadata={metadata} />
      </div>
    </>
  )
}

export default InfoPage