import { useState } from "react";
import { useStorageUpload } from "@thirdweb-dev/react";
const UploadImage = () => {
  const [file, setFile] = useState(null);
  const { mutateAsync: upload } = useStorageUpload();
  const uploadToIpfs = async () => {
    const uploadUrl = await upload({
      data: [file],
      options: {
        uploadWithGatewayUrl: true,
        uploadWithoutDirectory: true,
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
      <button onClick={uploadToIpfs} className="h-auto px-4 py-2 rounded-xl bg-slate">upload</button>
    </div>
  );
};

export default UploadImage;
