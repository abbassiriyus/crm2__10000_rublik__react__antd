import React, { useLayoutEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Tabs } from 'antd'
import { any, array, bool, func, object, string } from 'prop-types'
import { useCreateRowMutation, useDeleteRowMutation } from '../../store/api/mainApi'

const InnerTabs = ({
    record,
    listName,//Ключ списка откуда брать значения.
    label,//Название вкладок
    components,//Компоненты для отображения контента во вкладках, например <InputText> или вы можете указать свой компонент где будут перечислены различные компоненты
    isEditMode,
    handleSave,
    isLoading,
    isNew,
    setStatus,
    path,//Путь на endpoint для сохранения или удаления вкладки
    entityId,//Название поля ID в сущности, которая находится в списке, например: listName: [{entityId: ID}]
    additionalParamsForAdd//Дополнительные параметры для сохранения вкладки, нарпимер: { 'agentIdFieldName': 'agentfl_id', 'tableName': agentConditionTable }
}) => {
    const [data, setData] = useState(record[listName])
    const [deleteRow] = useDeleteRowMutation()
    const [addRow] = useCreateRowMutation()
    const initialItems = getRenderElements()
    const [activeKey, setActiveKey] = useState(initialItems?.[0]?.key)
    const [items, setItems] = useState(initialItems)
    const [isAdded, setIsAdded] = useState(false)
    const [isDeleted, setIsDeleted] = useState(false)
    const { id } = useParams()

    useLayoutEffect(() => {
        setData(record[listName])
        setItems(getRenderElements())
        setIsAdded(false)
        setIsDeleted(false)
    }, [isEditMode, data, record, isAdded, isDeleted, activeKey])

    function getRenderElements() {
        return data?.map((item, itemIndex) => {
            const fullLabel = `${label + (itemIndex + 1)}`
            return {
                label: fullLabel,
                children: components?.map((elem, elemIndex) => {
                    return (
                        // элементы для вкладки
                        <div key={`${fullLabel + '-' + elemIndex}`}>
                            {React.cloneElement(elem, {
                                isEditMode,
                                record: item,
                                handleSave,
                                isLoading,
                                isNew,
                                tabIndex: `${itemIndex + '-' + elemIndex}`
                            })}
                        </div>
                    )
                }),
                key: fullLabel,
                closable: isEditMode
            }
        })
    }

    const onChange = newActiveKey => {
        setActiveKey(newActiveKey)
    }

    const add = () => {
        setStatus(2)
        try {
            addRow({ 'path': path, 'relationId': id, ...additionalParamsForAdd })
            setStatus(1)
            setIsAdded(true)
        } catch (exception) {
            setStatus(-1)
            setIsAdded(false)
        }
    }
    const remove = targetKey => {
        setStatus(2)
        let newActiveKey = activeKey
        let lastIndex = -1
        items.forEach((item, i) => {
            if (item.key === targetKey) {
                lastIndex = i - 1
                const id = data[i]?.[entityId]
                if (id) {
                    try {
                        deleteRow({ 'path': path, 'id': id })
                        setStatus(1)
                    } catch (err) {
                        setStatus(-1)
                    }
                } else {
                    setStatus(-1)
                }
            }
        })
        const newPanes = items.filter(item => item.key !== targetKey)
        if (newPanes.length && newActiveKey === targetKey) {
            if (lastIndex >= 0) {
                newActiveKey = newPanes[lastIndex].key
            } else {
                newActiveKey = newPanes[0].key
            }
        }
        setItems(newPanes)
        setActiveKey(newActiveKey)
    }
    const onEdit = (targetKey, action) => {
        if (action === 'add') {
            add()
        } else {
            remove(targetKey)
        }
    }

    return (
        <>
            <Tabs
                type="editable-card"
                onChange={onChange}
                activeKey={activeKey}
                onEdit={onEdit}
                items={items}
                hideAdd={!isEditMode}
            />
        </>
    )
}

InnerTabs.propTypes = {
    record: object,
    listName: string,
    label: string,
    keyField: string,
    components: array,
    isEditMode: bool,
    handleSave: func,
    setStatus: func,
    formRef: any,
    isLoading: bool,
    isNew: bool,
    path: string,
    entityId: string,
    tableName: string,
    dbFieldName: string,
    additionalParamsForAdd: object
}

export default InnerTabs