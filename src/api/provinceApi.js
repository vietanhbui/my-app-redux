import axiosClient from "./axiosClient";

const baseUrl = "/address/provinces";

const provinceApi = {
  getProvinceList: () => {
    return axiosClient.get(baseUrl);
  }
};

export default provinceApi;
