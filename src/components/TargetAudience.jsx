function TargetAudience() {
  const targetPoints = [
    {
      title: '복잡한 설치가 걱정될 때',
      description: '기기 선택부터 연동, 고장 대응까지 혼자 해결하기 어렵거나, 시간이 없어 망설이셨던 분들에게 추천합니다',
    },
    {
      title: '내 집이 아니라서',
      description: '세입자라 벽 타공이나 복잡한 배선 공사가 부담스러워 제대로된 보안 장치 설치를 미루셨던 분들에게 딱 맞습니다',
    },
    {
      title: '합리적인 비용과 관리',
      description: '월 30,000원 이하의 부담 없는 비용으로 설치부터 A/S 까지 올인원 서비스를 원하시는 분들을 위했습니다',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          <span className="text-blue-600">원룸 오피스텔 여성 1인 가구</span>
          <br />
          이런 분에게 가장 잘 맞습니다
        </h2>

        <div className="flex flex-col gap-6">
          {targetPoints.map((point, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-blue-50 to-indigo-50 rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-blue-100"
            >
              <h3 className="text-[22px] font-bold text-gray-900 mb-3">
                {point.title}
              </h3>
              <p className="text-[18px] text-gray-700 leading-relaxed">
                {point.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default TargetAudience

