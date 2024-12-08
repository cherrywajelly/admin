import { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ApprovalState } from '../../types/Enums';
import { IconGroupDetail2 } from '../../types/Types';
import { Select, MenuItem, SelectChangeEvent } from '@mui/material';
import Button from '../../components/Button';
import IconsSection from '../../sections/IconsSection';
import { getIconGroup, postIconGroup } from '../../api/admin/iconGroup';
import { IconGroupRequestBody } from '../../types/api/admin/API';

const IconDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [iconDetail, setIconDetail] = useState<IconGroupDetail2>();

  const handleSave = (approvalState: ApprovalState): void => {
    let iconState;
    let message;
    switch (approvalState) {
      case ApprovalState.APPROVED:
        iconState = 'REGISTERED';
        message = '아이콘이 승인되었습니다.';
        break;

      case ApprovalState.REJECTED:
        iconState = 'REJECTED';
        message = '아이콘이 반려되었습니다.';
        break;

      case ApprovalState.PENDING:
        iconState = 'WAITING';
        message = '아이콘이 보류되었습니다.';
        break;
    }

    const requestBody: IconGroupRequestBody = {
      iconGroupId: Number(id),
      iconState: iconState,
    };

    const uploadIconGroup = async () => {
      const res = await postIconGroup(requestBody);
      
      if (res.ok) {
        alert(message);
      }
    };

    uploadIconGroup();
  };

  useEffect((): void => {
    const fetchIconDetail = async () => {
      if (!id) return;
      
      const data = await getIconGroup(id);
      setIconDetail(data);
    };

    fetchIconDetail();
  }, [id]);

  return (
    iconDetail && (
      <div className="min-h-screen p-8 space-y-8">
        <div className="flex flex-row items-center justify-between">
          <div className="flex flex-row items-center space-x-4">
            <img src={iconDetail.headImage} alt="Profile" className="w-24 h-24" />
            <div className="flex flex-col space-y-1">
              <h1 className="text-2xl font-bold w-40">{iconDetail.title}</h1>
              <p className="text-gray-500">{iconDetail.creator}</p>
              <p>{iconDetail.description}</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Select
              value={iconDetail.approvalState}
              onChange={(e: SelectChangeEvent): void =>
                setIconDetail({
                  ...iconDetail,
                  approvalState: e.target.value as ApprovalState,
                })
              }
              className={`border-gray-300 !rounded-lg h-10`}
            >
              {Object.values(ApprovalState).map((state: ApprovalState) => (
                <MenuItem key={state} value={state}>
                  {state}
                </MenuItem>
              ))}
            </Select>
            <Button text="저장" onClick={() => handleSave(iconDetail.approvalState)} />
          </div>
        </div>
        <IconsSection iconImages={iconDetail.iconImages} />
      </div>
    )
  );
};

export default IconDetailPage;
