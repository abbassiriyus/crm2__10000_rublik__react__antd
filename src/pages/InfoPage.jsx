import { useState } from "react";
import GeneralInfo from "../components/InfoPage/GeneralInfo";
import InfoRequestTT from "../components/InfoPage/InfoRequestTT";
import Usloviya from "../components/InfoPage/Usloviya";
import Comments from "../components/InfoPage/Comments";
import ExtraProduct from "../components/InfoPage/ExtraProduct";
import Breadcrumbs from "../components/BreadCrumb/BreadCrumb";

function InfoPage() {
  const [activeTab, setActiveTab] = useState('GeneralInfo');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'GeneralInfo':
        return <GeneralInfo />;
      case 'RequisitesTT':
        return <InfoRequestTT />;
      case 'Usloviya':
        return <Usloviya />;
      case 'Comments':
        return <Comments />;
      case 'Banks':
        return 'Banks';
      case 'AdditionalProducts':
        return <ExtraProduct />
      default:
        return null;
    }
  };

  const btnData = [
    {
      text: "Общая информация",
      tab: "GeneralInfo"
    },
    {
      text: "Реквизиты Т",
      tab: "RequisitesTT"
    },
    {
      text: "Условия сотруднишества ",
      tab: "Usloviya"
    },
    {
      text: "Комментарий по ТО",
      tab: "Comments"
    },
    {
      text: "Банки",
      tab: "Banks"
    },
    {
      text: "Доп. продукты",
      tab: "AdditionalProducts"
    },


  ]
  return (
    <div className="container" >
      <Breadcrumbs />
      <div className="tab-buttons">
        {
          btnData.map((btn, index) => {
            return (
              <button key={index} className={`${btn.tab === activeTab ? 'active' : ""} tabBtn `} onClick={() => setActiveTab(btn.tab)}> {btn.text} </button>
            )
          })
        }
      </div>
      <div className="tab-content">
        {renderTabContent()}
      </div>
    </div>
  );
}

export default InfoPage;