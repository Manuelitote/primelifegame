import { FC } from "react";

const Dashboard: FC = () => {
  const size = 320;
  const center = size / 2;
  const radius = 110;

  const labels = [
    "Salud Física",
    "Vida Social",
    "Salud Mental",
    "Finanzas",
    "Vida Profesional",
    "Conocimiento",
  ];

  const data: number[] = [70, 55, 65, 40, 60, 80];

  const angleStep = (2 * Math.PI) / labels.length;

  const getPoint = (value: number, index: number) => {
    const angle = angleStep * index - Math.PI / 2;
    const r = (value / 100) * radius;
    return {
      x: center + r * Math.cos(angle),
      y: center + r * Math.sin(angle),
    };
  };

  const polygonPoints = data
    .map((value, i) => {
      const point = getPoint(value, i);
      return `${point.x},${point.y}`;
    })
    .join(" ");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-black to-gray-900 text-white p-10">
      <h1 className="text-3xl font-bold mb-10">
        Dashboard <span className="text-blue-500">PrimeLife</span>
      </h1>

      <div className="bg-gray-800 bg-opacity-50 backdrop-blur-lg border border-gray-700 rounded-2xl p-10 shadow-2xl flex justify-center">
        <svg width={size} height={size}>
          {/* GRID */}
          {[20, 40, 60, 80, 100].map((level) => {
            const points = labels
              .map((_, i) => {
                const angle = angleStep * i - Math.PI / 2;
                const r = (level / 100) * radius;
                return `${center + r * Math.cos(angle)},${center + r * Math.sin(angle)}`;
              })
              .join(" ");

            return (
              <polygon
                key={level}
                points={points}
                fill="none"
                stroke="#374151"
                strokeWidth={1}
              />
            );
          })}

          {/* AXES */}
          {labels.map((_, i) => {
            const angle = angleStep * i - Math.PI / 2;
            return (
              <line
                key={i}
                x1={center}
                y1={center}
                x2={center + radius * Math.cos(angle)}
                y2={center + radius * Math.sin(angle)}
                stroke="#374151"
                strokeWidth={1}
              />
            );
          })}

          {/* DATA */}
          <polygon
            points={polygonPoints}
            fill="rgba(59,130,246,0.25)"
            stroke="#3B82F6"
            strokeWidth={2}
          />

          {/* LABELS */}
          {labels.map((label, i) => {
            const angle = angleStep * i - Math.PI / 2;
            const labelRadius = radius + 28;
            return (
              <text
                key={label}
                x={center + labelRadius * Math.cos(angle)}
                y={center + labelRadius * Math.sin(angle)}
                fill="#D1D5DB"
                fontSize={12}
                textAnchor="middle"
                dominantBaseline="middle"
              >
                {label}
              </text>
            );
          })}
        </svg>
      </div>
    </div>
  );
};

export default Dashboard;
