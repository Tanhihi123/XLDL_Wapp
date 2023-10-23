import React, { useState } from "react";
import { useStorageUpload } from "@thirdweb-dev/react";
const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { mutateAsync: upload } = useStorageUpload();
  const uploadToIpfs = async () => {
    const uploadUrl = await upload({
      data : []
    })
  }
  return (
    <div>
      <input
        type="file"
        placeholder="Enter your content"
        className="w-[300px] border border-slate-200 rounded-lg py-3 px-5 outline-none  bg-transparent"
      />
      <button>upload</button>
    </div>
  );
};

export default UploadImage;
