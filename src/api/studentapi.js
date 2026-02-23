import axios from "axios";
import { SERVERBASEURL } from "./constants";

export const searchStudent = (data) => {
  return axios.post(
    `${SERVERBASEURL}/student/search_by_name`,
    data
  );
};
export const uploadImage = async (file, scholarNo) => {
  const formData = new FormData();
  formData.append("file", file);
  formData.append("scholarNo", scholarNo);

  return axios.post(
    `${SERVERBASEURL}/student/upload-profile`,
    formData,
    {
      headers: { "Content-Type": "multipart/form-data" }
    }
  );
};

