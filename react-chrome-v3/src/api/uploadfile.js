import axios from 'axios';

export async function UploadFile(url, file, cancel) {
  return axios.put(url, file, {
    cancelToken: cancel && cancel.token,
    headers: {
      'Content-Type': file?.type,
    },
  });
}

export default UploadFile;
