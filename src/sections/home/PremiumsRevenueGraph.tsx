import { useEffect, useState } from 'react';
import { Card } from '../../components/card/Card';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { getMonthPremiumsRevenue } from '../../api/admin/dashboard';

export interface RevenueDataProps {
  year: number;
  month: number;
  premiumCount: number;
}

export default function PremiumsRevenueGraph() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();

  const [data, setData] = useState<RevenueDataProps[]>([]);

  useEffect(() => {
    const fetchPremiumsRevenue = async () => {
      try {
        const data = await getMonthPremiumsRevenue(year);
        setData(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchPremiumsRevenue();
  }, []);

  return (
    <Card title={`${year}년 월별 프리미엄 구독 가입자 수`} className="w-full">
      <ResponsiveContainer width={'100%'} height={300} className="mt-10">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={(value) => `${value}월`}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis tickFormatter={(value) => `${value.toLocaleString()}명`} />
          <Tooltip
            labelFormatter={(label) => `${label}월`}
            formatter={(value) => `${value.toLocaleString()}명`}
          />
          <Legend />
          <Line
            name="프리미엄 가입자 수"
            type="monotone"
            dataKey="premiumCount"
            stroke="#A37D64"
            activeDot={{ r: 8 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
