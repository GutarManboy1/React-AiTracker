import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { useState } from "react";
import { on } from "events";

interface FileUploaderProps {
  onFileUpload?: (file: File | null) => void;
}

const FileUploader = ({ onFileUpload }: FileUploaderProps) => {
  const onDrop = useCallback(
    (acceptedFiles: File[]) => {
      setFile(acceptedFiles[0]);
      onFileUpload?.(acceptedFiles[0] || null);
    },
    [onFileUpload]
  );
  const { getRootProps, getInputProps, isDragActive, acceptedFiles } =
    useDropzone({
      onDrop,
      multiple: false,
      maxSize: 20 * 1024 * 1024,
      accept: { "application/pdf": [".pdf"] },
    });

  const file = acceptedFiles[0] || null;
  return (
    <div className="w-full gradient-border">
      <div {...getRootProps()}>
        <input {...getInputProps()} />
        <div className="space-y-4 cursor-pointer">
          <div className="mx-auto w-16 h-16 flex items-center justify-center">
            <img src="/icons/info.svg" alt="upload" className="size-20" />
          </div>
          {file ? (
            
            <div className="text-center flex justify-center space-x-3">
              <img src="/icons/pdf.png" alt="pdf" className="size-10" />
              <div>
                <p className="text-sm font-medium text-gray-700 truncate max-w-xs">
                  {file.name}
                </p>
                <p className="text-sm text-gray-400">
                  {Math.round(file.size / 1024)} KB
                </p>
              </div>
            </div>
          ) : (
            <div>
              <p className="text-lg text-gray-500">
                <span className="font-semibold">Click to Upload</span> or drag
                and drop
              </p>
              <p className="text-lg text-gray-500">PDF only (max. 25MB)</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default FileUploader;
