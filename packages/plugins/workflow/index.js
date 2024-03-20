/**
 * Copyright (c) 2023 - present TinyEngine Authors.
 * Copyright (c) 2023 - present Huawei Cloud Computing Technologies Co., Ltd.
 *
 * Use of this source code is governed by an MIT-style license.
 *
 * THE OPEN SOURCE SOFTWARE IN THIS PRODUCT IS DISTRIBUTED IN THE HOPE THAT IT WILL BE USEFUL,
 * BUT WITHOUT ANY WARRANTY, WITHOUT EVEN THE IMPLIED WARRANTY OF MERCHANTABILITY OR FITNESS FOR
 * A PARTICULAR PURPOSE. SEE THE APPLICABLE LICENSES FOR MORE DETAILS.
 *
 */

import Icon from './src/Icon.vue'
import component from './src/Main.vue'
import useWorkflow from './src/useWorkflow.js'
import useWorkflowVariable from './src/useWorkflowVariable.js'
import useWorkflowMethod from './src/useWorkflowMethod.js'
import constants from './src/constants'

export default {
  id: 'workflow',
  title: '工作流',
  icon: Icon,
  align: 'top',
  component,
  useWorkflow,
  useWorkflowVariable,
  useWorkflowMethod,
  constants
}
