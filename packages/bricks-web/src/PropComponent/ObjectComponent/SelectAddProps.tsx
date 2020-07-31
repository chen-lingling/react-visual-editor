import React, { useState } from 'react';
import { Input, Select, Tooltip } from 'antd';
import map from 'lodash/map';
import { TYPES_TO_COMPONENT } from '../../index';
import { addPropsConfig, PROPS_TYPES } from 'brickd-core';

const { Option } = Select;

interface SelectAddPropsType {
  fatherFieldLocation: string
}


function SelectAddProps(props: SelectAddPropsType) {
  const [newPropField, setNewPropField] = useState('');
  const [propType, setPropType] = useState(PROPS_TYPES.string);

  function addParam() {
    const {  fatherFieldLocation } = props;
    if (/^[0-9a-zA-Z$_][0-9a-zA-Z\d_]*$/.test(newPropField)) {
      addPropsConfig({
        newPropField,
        propType,
        fatherFieldLocation,
      })

      setNewPropField('');

    }
  };

  function renderAddonBefore() {
    return <Select
      defaultValue={propType}
      onChange={(v:any) => setPropType(v)}
    >
      {map(TYPES_TO_COMPONENT, (_, type) => (
        <Option value={type} key={type}>
          <Tooltip overlayStyle={{ zIndex: 1800 }} title={type}>
            {type}
          </Tooltip>
        </Option>
      ))}
    </Select>;
  }

  return (
    <Input.Search
      addonBefore={renderAddonBefore()}
      placeholder="新增字段名称"
      value={newPropField}
      onChange={e => setNewPropField(e.target.value)}
      onSearch={addParam}
      enterButton="Add"
    />
  );
}

export default SelectAddProps;
