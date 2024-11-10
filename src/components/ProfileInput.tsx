import { ReactNode } from 'react';
import FileUploadIcon from '@mui/icons-material/FileUpload';

type ProfileInputProps = {
  profilePicture: File | null;
  setProfilePicture: (file: File | null) => void;
  styles: string;
};

const ProfileInput = (props: ProfileInputProps): ReactNode => {
  const { profilePicture, setProfilePicture, styles } = props;

  return (
    <div className={`relative w-full flex flex-col items-center ${styles}`}>
      <div className="w-32 h-32 rounded-full overflow-hidden border border-gray-300 flex items-center justify-center">
        {profilePicture ? (
          <img
            src={URL.createObjectURL(profilePicture)}
            alt="Profile Preview"
            className="w-full h-full object-cover"
          />
        ) : (
          <img
            src="/images/empty.png"
            alt="Profile Preview"
            className="w-3/4 h-3/4 object-cover"
          />
        )}
        <label className="absolute top-1/2 left-1/2 transform translate-x-full translate-y-full w-8 h-8 rounded-full bg-white border border-gray-300 flex items-center justify-center cursor-pointer">
          <input
            type="file"
            onChange={(e): void => {
              if (e.target.files) {
                setProfilePicture(e.target.files[0]);
              }
            }}
            className="hidden"
            required
          />
          <FileUploadIcon className="w-4 h-4 text-gray-500" />
        </label>
      </div>
    </div>
  );
};

export default ProfileInput;
