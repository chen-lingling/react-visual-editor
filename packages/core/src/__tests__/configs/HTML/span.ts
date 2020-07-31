import { ComponentConfigTypes, NODE_PROPS_TYPES, PROPS_TYPES } from '../../../types';

const span: ComponentConfigTypes = {
  nodePropsConfig: {
    children: {
      type: NODE_PROPS_TYPES.reactNode,
      isRequired: true,
    },
    test: {
      type: NODE_PROPS_TYPES.reactNode,
      childNodesRule: ['a'],
    },
  },
  propsConfig: {
    children: {
      label: '文本内容',
      type: PROPS_TYPES.string,
    },
  },
};

export default span;
