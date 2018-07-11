/*
 * @Author: kuangxj 
 * @Email: frankxjkuang@gmail.com 
 * @Date: 2018-07-09 10:23:38 
 * @Last Modified by: kaungxj
 * @Last Modified time: 2018-07-09 11:35:53
 * @Description: File desctiption 
 */

import MoorHelloWorld from './moor-hello-world'

MoorHelloWorld.install = Vue => Vue.component(MoorHelloWorld.name, MoorHelloWorld);

if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(MoorHelloWorld);
}

export default MoorHelloWorld