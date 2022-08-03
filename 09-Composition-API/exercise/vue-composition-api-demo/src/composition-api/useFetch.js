import axios from 'axios';
import { ref, reactive } from 'vue';
export const Fetchs = (API_URL='') => {
  const isLoad = ref(false),
        FetchData = reactive({data:[]}),
        errorMsg = ref('');
  axios.get(API_URL)
  .then(function(res){
    isLoad.value = true;
    FetchData.data = res.data;
    console.log(res.data);
  }).catch(function(error){
    errorMsg.value = error.request.statusText;
    console.dir(error);
    console.log(error.message);
  });
  return { isLoad, FetchData, errorMsg }
}