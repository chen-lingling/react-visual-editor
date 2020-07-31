import { ComponentConfigTypes, NODE_PROPS_TYPES, PROPS_TYPES } from 'brickd-core';

const InputField: ComponentConfigTypes = {
  propsConfig: {
    label: {
      label: '名称',
      type: PROPS_TYPES.string,
      rules: [
        { required: true, message: '名称必输！' },
      ]
    },
    name: {
      label: 'name',
      type: PROPS_TYPES.string,
      rules: [
        { required: true, message: 'name必输！' },
      ]
    },
    fieldProps: {
      label: 'fieldProps',
      type: PROPS_TYPES.object,
    },
    inputProps: {
      label: 'inputProps',
      type: PROPS_TYPES.object,
    }
  },
};
/*
              name="relation"
              key="relation"
              formItemProps={{ label: '与申请人关系' }}
              fieldProps={{
                rules: [
                  { required: true, message: '请选择与申请人关系！' },
                ],
              }}
              inputProps={{
                placeholder: '请选择与申请人关系',
                options: this.relation,
              }}
*/
export default InputField
