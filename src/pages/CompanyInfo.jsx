import React, { useState } from 'react'
import CompGeneralInfo from '../components/CompanyInfo/CompGeneralInfo';
import CompRequest from '../components/CompanyInfo/CompRequest';
import Breadcrumbs from '../components/BreadCrumb/BreadCrumb';
import CompContract from '../components/CompanyInfo/CompContract';
import CompCompanyAdditionalInfo from '../components/CompanyInfo/CompCompanyAdditionalInfo';
import CompCooperationConditions from '../components/CompanyInfo/CompCooperationConditions';
import CompComments from '../components/CompanyInfo/CompComments';
import CompAdditionalProducts from '../components/CompanyInfo/CompAdditionalProducts';
import CompDocuments from '../components/CompanyInfo/CompDocuments';
import CompAutoDS from '../components/CompanyInfo/CompAutoDS';
import CompLK from '../components/CompanyInfo/CompLK';
import CompCommercialTerms from '../components/CompanyInfo/CompCommercialTerms';
import CompDirector from '../components/CompanyInfo/CompDirector';
import CompTradingPoints from '../components/CompanyInfo/CompTradingPoints';

export default function CompanyInfo() {
  const [activeTab, setActiveTab] = useState('GeneralInfo');
  const renderTabContent = () => {
    switch (activeTab) {
      case 'GeneralInfo':
        return <CompGeneralInfo />;
      case 'Requisites':
        return <CompRequest />;
      case 'Contract':
        return <CompContract />;
      case 'CompanyAdditionalInfo':
        return <CompCompanyAdditionalInfo />;
      case 'CooperationConditions':
        return <CompCooperationConditions />;
      case 'Comments':
        return <CompComments />;
      case 'AdditionalProducts':
        return <CompAdditionalProducts />;
      case 'Documents':
        return <CompDocuments />;
      case 'AutoDS':
        return <CompAutoDS />;
      case 'LK':
        return <CompLK />;
      case 'CommercialTerms':
        return <CompCommercialTerms />;
      case 'Director':
        return <CompDirector />;
      case 'TradingPoints':
        return <CompTradingPoints />;
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
      text: "Реквизиты",
      tab: "Requisites"
    },
    {
      text: "Договор",
      tab: "Contract"
    },
    {
      text: "Доп инфо по Компании",
      tab: "CompanyAdditionalInfo"
    },
    {
      text: "Условия Сотрудничества",
      tab: "CooperationConditions"
    },
    {
      text: "Коммерческие Условия",
      tab: "CommercialTerms"
    },
    {
      text: "Директор",
      tab: "Director"
    },
    {
      text: "Торговые точки",
      tab: "TradingPoints"
    },
    {
      text: "Комментарии",
      tab: "Comments"
    },
    {
      text: "Доп. продукты",
      tab: "AdditionalProducts"
    },
    {
      text: "Документы",
      tab: "Documents"
    },
    {
      text: "АвтоДС",
      tab: "AutoDS"
    },
    {
      text: "ЛК",
      tab: "LK"
    }
  ];
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
