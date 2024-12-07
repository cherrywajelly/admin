import { Card } from '../components/card/Card';

export default function Top3Icon() {
  const topIcons = [
    {
      rank: 1,
      label: 'A아이콘',
      color: 'bg-gray-80 text-white text-subtitle4',
      height: 'h-[80px]',
    },
    { rank: 2, label: 'B아이콘', color: 'bg-gray-60 text-white text-body2', height: 'h-[55px]' },
    { rank: 3, label: 'C아이콘', color: 'bg-gray-10 text-black text-body4', height: 'h-[40px]' },
  ];

  return (
    <Card title="지금까지 가장 많이 판매된 아이콘 TOP3" className="max-w-[240px]">
      <div className="py-3 flex flex-col gap-2">
        {topIcons.map((icon) => (
          <div
            key={icon.rank}
            className={`flex items-center justify-between rounded-[10px] p-4 ${icon.color} ${icon.height}`}
          >
            <span>
              <b>{icon.rank}</b> 위
            </span>
            <span>{icon.label}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}
