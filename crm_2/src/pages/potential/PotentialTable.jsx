import React from 'react'
import MainTable from '../../components/MainTable/MainTable.jsx'

import BrandColumn from '../../components/Columns/BrandColumn.jsx'
import { useGetSelectsQuery } from '../../store/api/mainApi.js'
import CreationDateColumn from '../../components/Columns/CreationDateColumn.jsx'
import LegalEntityColumn from '../../components/Columns/LegalEntityColumn.jsx'
import SegmentColumn from '../../components/Columns/SegmentColumn.jsx'
import ROPColumn from '../../components/Columns/ROPColumn.jsx'
import TrademarkColumn from '../../components/Columns/TrademarkColumn.jsx'
import SettlementColumn from '../../components/Columns/SettlementColumn.jsx'
import AddressColumn from '../../components/Columns/AddressColumn.jsx'
import ReferrerColumn from '../../components/Columns/ReferrerColumn.jsx'
import StatusChangeDateColumn from '../../components/Columns/StatusChangeDateColumn.jsx'

const PotentialTable = () => {
    const { data: selectData = [], isLoading } = useGetSelectsQuery({ path: 'options/path' });

    const handleSave = (row) => {
        console.log("Save row:", row);
    };

    const columns = [
        CreationDateColumn,
        BrandColumn({
            editable: true,
            handleSave: (row) => console.log("Save row:", row),
            options: selectData,
            isLoading
        }),
        LegalEntityColumn({ editable: true, handleSave }),
        SegmentColumn({ editable: true, handleSave }),
        ROPColumn({ editable: true, handleSave }),
        TrademarkColumn({editable: true, handleSave}),
        SettlementColumn({editable: true, handleSave}),
        AddressColumn(),
        ReferrerColumn({editable: true, handleSave}),
        StatusChangeDateColumn({editable: true, handleSave}),
        StatusChangeDateColumn({editable: true, handleSave}),
    ];

    return (
        <>
            <MainTable
                columns={columns}
                path={'potential'}
            />
        </>
    );
}

export default PotentialTable;
