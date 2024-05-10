import { Banner } from "../types/movie.type";
import { ResponseApi } from "../types/util";
import api from "./apiUtil";

export const getBannerMovieApi = async () => {
  try {
    const response = await api.get<ResponseApi<Banner[]>>(
      "/QuanLyPhim/LayDanhSachBanner"
    );
    return response.data.content;
  } catch (error: any) {
    throw Error(error);
  }
};

// export const getListMovieApi = async () => {
//   try {
//   } catch (error) {}
// };
