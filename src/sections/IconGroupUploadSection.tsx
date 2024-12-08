import { ReactNode } from 'react';
import { Divider } from '@mui/material';

const IconGroupUploadSection = ({
  iconImages,
  setIconFiles,
}: {
  iconImages: string[];
  setIconFiles: (files: File[]) => void;
}): ReactNode => {

  return (
    <div>
      <h2 className="text-xl font-bold">ICONS</h2>
      <Divider sx={{ width: '100%', height: '2px', backgroundColor: '#E9E6E4', marginBottom: '8px' }} />
      <div className="grid grid-cols-4 gap-4 w-full justify-items-center">
        {iconImages.map((image: string, index: number) => (
          <div key={index} className="flex flex-col items-center w-fit relative group">
            <img src={image} alt={`Icon ${index + 1}`} className="w-32 h-32 rounded-lg shadow-md" />
            {/* <button
              onClick={(): void => {
                const newImages = [...iconImages];
                newImages.splice(index, 1);
                setIconImages(newImages);
              }}
              className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 opacity-0 group-hover:opacity-100 transition-opacity"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button> */}
          </div>
        ))}
        <div
          onClick={(): void => {
            document.getElementById('icon-upload')?.click();
          }}
          className="flex items-center justify-center w-32 h-32 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100 transition-colors shadow-md"
        >
          <input
            id="icon-upload"
            type="file"
            className="hidden"
            accept="image/*"
            multiple
            onChange={(e): void => {
              if (e.target.files) {
                setIconFiles(Array.from(e.target.files));
              }
            }}
          />
          <svg
            className="w-8 h-8 text-gray-400"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IconGroupUploadSection;
