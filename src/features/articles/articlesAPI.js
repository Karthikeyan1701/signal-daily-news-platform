import axiosInstance from "../../services/axiosInstance";
import { DEFAULT_COUNTRY, PAGE_SIZE } from "../../utils/constants";

export const fetchTopHeadlines = async ({
    category = "general",
    country = DEFAULT_COUNTRY,
    page = 1,
}) => {
    const response = await axiosInstance.get("/top-headlines", {
        params: {
            apiKey: import.meta.env.VITE_NEWS_API.KEY,
            country,
            category,
            page,
            pageSize: PAGE_SIZE,
        },
    });

    return response.data;
};