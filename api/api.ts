import axios from "axios";

// real
axios.defaults.baseURL = "https://api.sayyo.mobileto.io/sayyo/v1";

// dev
// axios.defaults.baseURL = "https://dev.sayyo.mobileto.io/sayyo/v1/";

/** 포스트 상세화면 */
export const apiGetDetailJob = async (id: number) => {
  try {
    const res = await axios({
      method: "GET",
      url: `get-info-details-job?jobId=${id}`,
    });
    return res;
  } catch (error: any) {
    console.log(error);
    return error;
  }
};
