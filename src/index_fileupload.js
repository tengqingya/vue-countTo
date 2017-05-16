import fileupload from './fileupload.vue';
export default fileupload;
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.component('fileupload', fileupload);
}
