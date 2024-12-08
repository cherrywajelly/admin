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
import { getMonthIconRevenue } from '../../api/admin/dashboard';

export interface RevenueIconDataProps {
  year: number;
  month: number;
  toastsRevenue: number;
  jamsRevenue: number;
}  

export default function IconRevenueGraph() {
  const currentDate = new Date();
  const year = currentDate.getFullYear().toString();

  const [data, setData] = useState<RevenueIconDataProps[]>([]);

  useEffect(() => {
    const fetchMonthIconRevenue = async () => {
      try {
        const data = await getMonthIconRevenue(year);
        setData(data);
      } catch (error) {
        console.error('Failed to fetch:', error);
      }
    };

    fetchMonthIconRevenue();
  }, []);

  return (
    <Card title={`${year}년 월별 아이콘 판매수익`} className="w-full">
      <ResponsiveContainer width={'100%'} height={300} className="mt-10">
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis
            dataKey="month"
            tickFormatter={(value) => `${value}월`}
            padding={{ left: 30, right: 30 }}
          />
          <YAxis
            tickFormatter={(value) => value.toLocaleString()}
          />
          <Tooltip
            labelFormatter={(label) => `${label}월`}
            formatter={(value) => `${value.toLocaleString()}원`}
          />
          <Legend />
          <Line
            name="토스트"
            type="monotone"
            dataKey="toastsRevenue"
            stroke="#A37D64"
            activeDot={{ r: 8 }}
          />
          <Line name="잼" type="monotone" dataKey="jamsRevenue" stroke="#FF6A6A" />
        </LineChart>
      </ResponsiveContainer>
    </Card>
  );
}
