import React, { useState } from 'react';
import GeneralInfo from './GeneralInfo'

function Comments() {
  return <div>Comments Content</div>;
}

function Banks() {
  return <div>Banks Content</div>;
}

function AdditionalProducts() {
  return <div>Additional Products Content</div>;
}

import RequisitesTT from './RequestTT';
import DropDownTable from './DropDownTable';
import ContactUvedomlena from './ContactUvedomlena';

function TabPage() {
  const [activeTab, setActiveTab] = useState('GeneralInfo');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'GeneralInfo':
        return <GeneralInfo />;
      case 'RequisitesTT':
        return <RequisitesTT />;
      case 'ContactUvedomlena':
        return <ContactUvedomlena />;
      case "dropDownTable":
        return <DropDownTable />;
      case 'Comments':
        return <Comments />;
      case 'Banks':
        return <Banks />;
      case 'AdditionalProducts':
        return <AdditionalProducts />;
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
      text: "контакт для увадосмления",
      tab: "ContactUvedomlena"
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
    {
      text: "продажа",
      tab: "dropDownTable"
    },

  ]
  return (
    <div >
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

export default TabPage;