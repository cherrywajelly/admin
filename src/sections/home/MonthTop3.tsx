import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import { getIconGroupTop3 } from '../../api/admin/dashboard';
import { IconGroupTop3Props } from './Top3Icon';

export const top3IconStyles = [
  {
    color: 'bg-secondary-main text-white text-subtitle4',
    height: 'h-[80px]',
  },
  {
    color: 'bg-primary-main text-white text-body2',
    height: 'h-[55px]',
  },
  {
    color: 'bg-warning-main text-black text-body4',
    height: 'h-[40px]',
  },
];

export default function MonthTop3() {
  const [topIcons, setTopIcons] = useState<IconGroupTop3Props[]>([]);

  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();
  const month = (currentDate.getMonth() + 1).toString();

  useEffect(() => {
    const fetchTopIcons = async () => {
      try {
        const data = await getIconGroupTop3(year, month);

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
    <Card title={`${year}년 ${month}월 가장 많이 판매된 아이콘 TOP3`} className="w-full">
      <div className="py-3 flex flex-col gap-2">
        {topIcons.length > 0 ? (
          topIcons.map((icon, index) => (
            <div
              key={index}
              className={`shadow-lg flex items-center justify-between rounded-[10px] p-4 ${top3IconStyles[index]?.color} ${top3IconStyles[index]?.height}`}
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
