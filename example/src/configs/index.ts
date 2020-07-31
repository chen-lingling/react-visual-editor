import { htmlContainers, htmlNonContainers } from './htmlCategory';
import { reactContainers, reactNonContainers } from './reactCategory';
import * as Ants from 'antd/es';
import AllComponentConfigs from './componentConfigs';
import { CategoryType, ConfigType } from 'brickd-core';
import { flattenDeepArray } from '../utils';
import { message } from 'antd';

/**
 * 容器组件分类
 */
export const CONTAINER_CATEGORY = { ...reactContainers, ...htmlContainers };
/**
 * 非容器组件分类
 * @type {{Input, InputNumber, Slider, Checkbox, Rate, Radio, Icon, Typography}}
 */
export const NON_CONTAINER_CATEGORY = { ...reactNonContainers, ...htmlNonContainers };

/**
 * 设计面板iframe 模板，如果集成到项目中，需要将拖拽组件所依赖的样式在模板中设置，
 * 否则设计面板渲染的页面将是无样式的效果
 */
const config: ConfigType = {
  OriginalComponents:{...Ants, InputField:Ants.Input},
  AllComponentConfigs,
  containers:flattenDeepArray(CONTAINER_CATEGORY),
  warn:(msg:string)=>{message.warning(msg)}
};

export default config;
