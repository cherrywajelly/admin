import { Card } from '../../components/card/Card';
import MonthTop3 from '../../sections/MonthTop3';
import Top3Icon from '../../sections/Top3Icon';

export default function AdminHome() {
  return (
    <div className="p-6 flex flex-col gap-4">
      <span className="text-h2 font-bold">Dashboard</span>
      {/* 총 가입자 수 */}
      <Card className="w-full max-w-[240px]">
        <div className="w-fit flex items-center gap-2">
          <span className="bg-gray-10 text-navigation1 rounded-[20px] py-2 px-4">총 가입자 수</span>
          <span className="flex items-center gap-1">
            <span className="text-h1 text-gray-80">130</span>명
          </span>
        </div>
      </Card>

      <Top3Icon />
      <MonthTop3 />

      {/* graph */}
    </div>
  );
}
