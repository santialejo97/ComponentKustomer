import { action } from "@prismatic-io/spectral";
import { account, token } from "./inputs";
import axios from 'axios'



export const myAction = action({
  display: {
    label: "Lista De Plantilla",
    description: "Consultar la lista de plantillas de un account de kustomer",
  },
  perform: async (context, param) => {
    const url: string = `https://api.kustomerapp.com/v1/whatsapp/accounts/${param.account}/templates`;
    const response = await axios.get(url, {
      headers:{
        Authorization:`Bearer ${param.token}`
      }
    })

    const list = response.data.data.map((element: any) =>{
      return {
        components: element.attributes.components,
        name:element.attributes.name,
        status:element.attributes.status,
        language:element.attributes.language, 
        category:element.attributes.category
    }
    })
     const listTemplate={
      provider: "kustomer",
      list
     }

    return Promise.resolve({data: listTemplate})
  },
  inputs: {
    token,
    account
  },
});

export default { myAction };
