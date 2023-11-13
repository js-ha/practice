import axios, { AxiosResponse } from 'axios';
import BLOG_CONTENT from './url';

const getBlogContent = async (): Promise<AxiosResponse> => {
  return axios.get(BLOG_CONTENT);
};

export default getBlogContent;
