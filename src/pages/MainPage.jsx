import React, { useState } from 'react';
function AdditionalProducts() {
  return <div>Additional Products Content</div>;
}

import RequisitesTT from '../components/MainPageComponent/RequestTT';
import DropDownTable from '../components/MainPageComponent/DropDownTable';
import ContactUvedomlena from '../components/MainPageComponent/ContactUvedomlena';
import All_Info from '../components/MainPageComponent/All_Info';
import Banks from '../components/MainPageComponent/Banks';
import Comments from '../components/MainPageComponent/Comments';
import Breadcrumbs from '../components/BreadCrumb/BreadCrumb';

function MainPage() {
  const [activeTab, setActiveTab] = useState('sales');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'generalInfo':
        return <All_Info />;
      case 'requisites':
        return <RequisitesTT />;
      case 'contract':
        return 'kelishuv';
      case 'notificationContacts':
        return <ContactUvedomlena />;
      case "sales":
        return <DropDownTable />;
      case 'comments':
        return <Comments />;
      case 'connectedBanks':
        return <Banks />;
      case 'cooperationTerms':
        return <AdditionalProducts />;
      default:
        return null;
    }
  };

  const btnData = [
    { text: "Продажи", tab: "sales" },
    { text: "Общая информация", tab: "generalInfo" },
    { text: "Договор", tab: "contract" },
    { text: "Реквизиты", tab: "requisites" },
    { text: "Условия сотрудничества", tab: "cooperationTerms" },
    { text: "Контакты для уведомления", tab: "notificationContacts" },
    { text: "Подключенные Банки", tab: "connectedBanks" },
    { text: "Комментарии", tab: "comments" }
  ];

  return (
    <div className='container' >
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

export default MainPage;