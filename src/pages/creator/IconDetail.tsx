import { ReactNode, useEffect, useState } from 'react';
import { IconGroupDetail } from '../../types/Types';
import Button from '../../components/Button';
import IconsSection from '../../sections/IconsSection';
import IconInfoSection from '../../sections/IconInfoSection';
import { useParams } from 'react-router-dom';
import { getIconGroup } from '../../api/creator/iconGroup';

const IconDetailPage = (): ReactNode => {
  const { id } = useParams();
  const [iconDetail, setIconDetail] = useState<IconGroupDetail>();

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
              <p className="flex-1">{iconDetail.description}</p>
            </div>
          </div>
          <div className="flex flex-row items-center space-x-4">
            <Button text={iconDetail.approvalState} />
          </div>
        </div>
        <IconInfoSection soldIconNumber={iconDetail.soldIconNumber} revenue={iconDetail.revenue} />
        <IconsSection iconImages={iconDetail.iconImages} />
      </div>
    )
  );
};

export default IconDetailPage;
