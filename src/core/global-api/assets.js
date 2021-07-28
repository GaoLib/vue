/* @flow */

import { ASSET_TYPES } from 'shared/constants'
import { isPlainObject, validateComponentName } from '../util/index'

export function initAssetRegisters (Vue: GlobalAPI) {
  /**
   * Create asset registration methods.
   */
  // * ASSET_TYPES: ['component','directive','filter']
  ASSET_TYPES.forEach(type => {
    // * 使用方式：Vue.component('name', {})
    Vue[type] = function (
      id: string,
      definition: Function | Object
    ): Function | Object | void {
      if (!definition) {
        return this.options[type + 's'][id]
      } else {
        /* istanbul ignore if */
        if (process.env.NODE_ENV !== 'production' && type === 'component') {
          validateComponentName(id)
        }
        if (type === 'component' && isPlainObject(definition)) {
          // * 设置name直接使用，否则以id为name
          definition.name = definition.name || id
          // ! this.options._base = Vue
          // ! Vue.extend() => 接收组件配置，返回组件构造函数
          definition = this.options._base.extend(definition)
        }
        if (type === 'directive' && typeof definition === 'function') {
          definition = { bind: definition, update: definition }
        }
        // ! 全局注册组件，是在全局默认选项中加入该组件注册信息
        // ! 初始化合并全局默认选项和用户配置选项
        // ! 以后每个组件都会有该组件的注册，实现全局可用
        this.options[type + 's'][id] = definition
        return definition
      }
    }
  })
}
