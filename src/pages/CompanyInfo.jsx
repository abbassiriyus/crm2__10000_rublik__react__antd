import React, { useState } from 'react'
import CompGeneralInfo from '../components/CompanyInfo/CompGeneralInfo';
import CompRequest from '../components/CompanyInfo/CompRequest';

export default function CompanyInfo() {
  const [activeTab, setActiveTab] = useState('GeneralInfo');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'GeneralInfo':
        return <CompGeneralInfo />;
      case 'RequisitesTT':
        return <CompRequest />;
      case 'dogovor':
        return "'dogovor':";
      case 'Comments':
        return "comments";
      case 'Banks':
        return 'Banks';
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
      tab: "dogovor"
    },
    {
      text: "доп инфо компаний ",
      tab: "Comments"
    },
    {
      text: "условие сотрочества ",
      tab: "Banks"
    },
    {
      text: "сотрудничества",
      tab: "AdditionalProducts"
    },


  ]
  return (
    <div className="container" >
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
