import React from 'react'
import { Input, Select } from 'antd'
import InfoTable from '../../components/InfoTable/InfoTable.jsx'

const { TextArea } = Input
const { Option } = Select

const metadata = {
    'Общая инфо': [
        {
            'name': 'creationDate',
            'type': 'datePicker',
            'title': 'Дата создания записи'
        },
        {
            'name': 'business',
            'type': 'inputText',
            'title': 'Юридическое лицо'
        },
        {
            'name': 'brand',
            'type': 'inputText',
            'title': 'Бренд'
        },
        {
            'name': 'city',
            'type': 'inputText',
            'title': 'Город'
        },
        {
            'name': 'address',
            'type': 'inputText',
            'title': 'Адрес'
        },
        {
            'name': 'website',
            'type': 'inputText',
            'title': 'Сайт'
        },
        {
            'name': 'segment',
            'type': 'inputText',
            'title': 'Сегмент'
        },
        {
            'name': 'salesChannel',
            'type': 'inputText',
            'title': 'Канал продаж'
        },
        {
            'name': 'referrer',
            'type': 'inputText',
            'title': 'Кто привлек'
        },
        {
            'name': 'rop',
            'type': 'inputText',
            'title': 'РОП'
        },
        {
            'name': 'tm',
            'type': 'inputText',
            'title': 'ТМ'
        }
    ],
    'Контактная информация': [
        {
            'name': 'segment',
            'type': 'select',
            'title': 'Сегмент',
            'optionsPath': 'segments'
        },
        {
            'name': 'rop',
            'type': 'inputText',
            'title': 'РОП'
        },
    ],
    'Статус': [
        {
            'name': 'segment',
            'type': 'select',
            'title': 'Сегмент',
            'optionsPath': 'segments'
        },
        {
            'name': 'rop',
            'type': 'inputText',
            'title': 'РОП'
        },
    ],
    'Доп инфо': [
        {
            'name': 'segment',
            'type': 'select',
            'title': 'Сегмент',
            'optionsPath': 'segments'
        },
        {
            'name': 'rop',
            'type': 'inputText',
            'title': 'РОП'
        },
    ],
};

const InfoPage = () => {
    return (
        <>
            <InfoTable path={'potential'} metadata={metadata}/>
        </>
    );
};

export default InfoPage;
