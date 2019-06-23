import axios from  "axios";
import { message } from "antd";

export default function ajax(url,data = {} , method = "get"){
  let reqParams = data;

  method = method.toLowerCase();

  if( method === "get"){
    reqParams={
      params: data
    }
  }
  return axios[method](url, reqParams)
    .then((res)=> {
      const {data} = res;

      if(data.status===0){
        return data.data;
      } else {
        message.error(data.msg, 2);
        this.props.form.resetFields(["password"]);
      }
    })
    .catch((err)=>{
      message.error("网络出现异常，请刷新试试",2);
    })
}