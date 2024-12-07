import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import IconRevenueGraph from '../../sections/home/IconRevenueGraph';
import MonthTop3 from '../../sections/home/MonthTop3';
import PremiumsRevenueGraph from '../../sections/home/PremiumsRevenueGraph';
import Top3Icon from '../../sections/home/Top3Icon';
import { getMembersCount } from '../../api/admin/dashboard';

export default function AdminHome() {
  const [membersCnt, setMembersCnt] = useState({
    totalUserCount: 0,
    totalCreatorCount: 0,
  });

  useEffect(() => {
    const fetchMembersData = async () => {
      try {
        const data = await getMembersCount();
        if (data) {
          setMembersCnt({
            totalUserCount: data.totalUserCount || 0,
            totalCreatorCount: data.totalCreatorCount || 0,
          });
        }
      } catch (error) {
        console.error('Failed!', error);
      }
    };

    fetchMembersData();
  }, []);

  return (
    <div className="p-6">
      <span className="text-h2 font-bold">Dashboard</span>

      <div className="flex gap-6 w-full mt-2">
        <div className="w-full max-w-[300px] flex flex-col gap-6">
          {/* 총 가입자 수 */}
          <Card className="w-full">
            <div className="w-fit flex items-center gap-6">
              <span className="bg-gray-10 text-navigation1 rounded-[20px] py-2 px-4">
                서비스 누적 가입자 수
              </span>
              <span className="flex items-center gap-1">
                <span className="text-h1 text-gray-80">{membersCnt.totalUserCount}</span>명
              </span>
            </div>
            <div className="w-fit flex items-center gap-6">
              <span className="bg-gray-10 text-navigation1 rounded-[20px] py-2 px-4">
                아이콘 제작자 수
              </span>
              <span className="flex items-center gap-1">
                <span className="text-h1 text-secondary-main">{membersCnt.totalCreatorCount}</span>
                명
              </span>
            </div>
          </Card>

          <Top3Icon />
          <MonthTop3 />
        </div>

        <div className="w-full flex flex-col gap-6">
          {/* graph */}
          <IconRevenueGraph />
          <PremiumsRevenueGraph />
        </div>
      </div>
    </div>
  );
}
