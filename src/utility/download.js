
import downloadjs from "downloadjs";  

export default (content, fileName, mimeType)  => {
  return downloadjs(
    "data:" + mimeType + ";charset=UTF-8," + encodeURIComponent(content),
    fileName,
    mimeType
  );
}