"use client";
import { cn } from "@/lib/utils";
import { CldImage, CldUploadButton } from "next-cloudinary";
import { useState } from "react";
import { buttonVariants } from "./ui/button";

interface Props {
  imageURL: string | undefined;
  setImageURL: React.Dispatch<React.SetStateAction<string | undefined>>;
}

const hostname = process.env.NEXT_PUBLIC_URL || "http://localhost:3000";

const ImageUploader = ({ imageURL, setImageURL }: Props) => {
  const [image, setImage] = useState(imageURL);

  const handleUpload = (result: any) => {
    setImage(result.info.public_id);
    setImageURL(result.info.secure_url);
  };

  return (
    <div>
      <CldUploadButton
        className={cn(
          buttonVariants(),
          "bg-destructive hover:bg-destructive/75"
        )}
        signatureEndpoint={`${hostname}/api/sign-cloudinary-params`}
        onUpload={(result: any) => handleUpload(result)}
        uploadPreset="kynoydoq"
        options={{ sources: ["local"] }}
      />
      {image && (
        <CldImage
          width="960"
          height="600"
          src={image || ""}
          sizes="100vw"
          alt="Description of my image"
        />
      )}
    </div>
  );
};

export default ImageUploader;
