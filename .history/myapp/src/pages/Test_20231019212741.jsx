import { useState } from "react";
import { useStorageUpload } from "@thirdweb-dev/react";
const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { mutateAsync: upload } = useStorageUpload();
  const uploadToIpfs = async () => {
    const response = await axios({
      method: "post",
      url: "https://api.imgbb.com/1/upload?key=1354c230dd40a7043dbe4307c3df1bc3",
      data: bodyFormData,
      headers: {
        "content-Type": "multipart/form-data",
      },
    });
    console.log("Upload URL", uploadUrl);
  };
  return (
    <div>
      <input
        type="file"
        placeholder="Enter your content"
        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
        onChange={(e) => {
          if (e.target.files) {
            setFile(e.target.files[0]);
          }
        }}
      />
      <button onClick={uploadToIpfs} className="h-auto px-4 py-2 rounded-xl bg-slate-200">upload</button>
    </div>
  );
};

export default UploadImage;
