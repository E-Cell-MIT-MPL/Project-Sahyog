import * as React from "react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

export interface FileUploadProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  onFileChange?: (file: File | null) => void;
  buttonLabel?: string;
  buttonClassName?: string;
  acceptedFileTypes?: string;
}

const FileUpload = React.forwardRef<HTMLInputElement, FileUploadProps>(
  (
    {
      className,
      onFileChange,
      buttonLabel = "Upload File",
      buttonClassName,
      acceptedFileTypes = ".pdf,.doc,.docx,.ppt,.pptx",
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = React.useState<string>("");
    const fileInputRef = React.useRef<HTMLInputElement>(null);

    const handleButtonClick = () => {
      fileInputRef.current?.click();
    };

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const file = e.target.files?.[0] || null;
      setFileName(file?.name || "");
      if (onFileChange) {
        onFileChange(file);
      }
    };

    // Forward the ref to the input element
    React.useImperativeHandle(ref, () => fileInputRef.current as HTMLInputElement);

    return (
      <div className="flex flex-col space-y-2">
        <input
          type="file"
          className="hidden"
          ref={fileInputRef}
          onChange={handleFileChange}
          accept={acceptedFileTypes}
          {...props}
        />
        <div className="flex items-center gap-3">
          <Button
            type="button"
            onClick={handleButtonClick}
            className={cn(
              "upload-btn bg-cream bg-opacity-70 text-navy hover:bg-[#E9D5B8] hover:text-[#141D4E]",
              buttonClassName
            )}
            variant="outline"
          >
            {buttonLabel}
          </Button>
          {fileName && (
            <span className="text-sm italic">{fileName}</span>
          )}
        </div>
      </div>
    );
  }
);

FileUpload.displayName = "FileUpload";

export { FileUpload };
