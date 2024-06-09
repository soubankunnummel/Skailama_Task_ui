import { Axios } from "@/app/config/axios";

// ->> get widget
export const getWidgets = async () => {
  try {
    const response = await Axios.get("/widget");
    return response;
  } catch (error) {
    return error;
  }
};

/// -> create widget

export const createWidget = async (formData) => {
  try {
    const response = await Axios.post("/widget", formData,{
        headers:{
             'Content-Type': 'multipart/form-data'
        }
    });
    return response;
  } catch (error) {
    return error;
  }
};


/// add geral details 

export const addGenarel = async (data) => {
    try {
        const response = await Axios.post('/widget/details',data)
        return response
    } catch (error) {
        return error
    }
}