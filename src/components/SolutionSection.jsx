function SolutionSection() {
  const solutions = [
    {
      name: '스마트 도어락',
      icon: '🔐',
      description: '출입 통제의 기본',
    },
    {
      name: '실내 카메라(CCTV)',
      icon: '📹',
      description: '집 안 상황을 바로 확인',
    },
    {
      name: '문/창문 센서 2개',
      icon: '🚪',
      description: '열림 감지로 침입/외출 불안 감소',
    },
    {
      name: 'SOS 버튼 + 사이렌',
      icon: '🚨',
      description: '위급 시 알림/경고',
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-blue-50 to-green-50">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-4 text-balance">
          <span className="text-blue-600">최소 구성</span>으로 당신의 <span className="text-blue-600">안전</span>을 지키세요.
        </h2>
        <p className="text-center text-gray-600 mb-12 text-[18px]">
          원룸/오피스텔에 맞춘 최소 구성부터 시작합니다.
        </p>

        <div className="grid grid-cols-2 gap-6 mb-12">
          {solutions.map((item, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 text-center"
            >
              <div className="text-5xl mb-4">{item.icon}</div>
              <h3 className="text-[25px] font-bold text-gray-900 mb-2">{item.name}</h3>
              <p className="text-gray-600 text-[18px]">{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default SolutionSection

