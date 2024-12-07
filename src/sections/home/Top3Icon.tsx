import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { getIconGroupTop3 } from '../../api/admin/dashboard';

export interface IconGroupTop3Props {
  title: string;
  iconType: string;
  count: number;
}

export const dashboardIconStyles = [
  {
    color: 'bg-gray-80 text-white text-subtitle4',
    height: 'h-[80px]',
  },
  {
    color: 'bg-gray-60 text-white text-body2',
    height: 'h-[55px]',
  },
  {
    color: 'bg-gray-10 text-black text-body4',
    height: 'h-[40px]',
  },
];

export default function Top3Icon() {
  const [topIcons, setTopIcons] = useState<IconGroupTop3Props[]>([]);

  useEffect(() => {
    const fetchTopIcons = async () => {
      try {
        const data = await getIconGroupTop3();
        if (data && data.length > 0) {
          setTopIcons(data.slice(0, 3));
        }
      } catch (error) {
        console.error('Failed to fetch top icons:', error);
      }
    };

    fetchTopIcons();
  }, []);

  return (
    <Card title="지금까지 가장 많이 판매된 아이콘 TOP3" className="w-full">
      <div className="py-3 flex flex-col gap-2">
        {topIcons.length > 0 ? (
          topIcons.map((icon, index) => (
            <div
              key={index}
              className={`shadow-lg flex items-center justify-between rounded-[10px] p-4 ${dashboardIconStyles[index]?.color} ${dashboardIconStyles[index]?.height}`}
            >
              <span>
                <b>{index + 1}</b> 위
              </span>
              <span>
                {icon.title}({icon.iconType === 'JAM' ? '잼' : '토스트'})
              </span>
              <span className="text-navigation1">{icon.count}건</span>
            </div>
          ))
        ) : (
          <span>loading...</span>
        )}
      </div>
    </Card>
  );
}
