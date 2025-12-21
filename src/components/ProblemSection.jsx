function ProblemSection() {
  const problems = [
    {
      title: '귀가',
      icon: '🌙',
      problem: '밤늦게 귀가할 때면 늘 불안해요.',
      solution: '→ 앱으로 먼저 확인하고 이상 감지 시 알림',
      image: '/images/귀가.png',
    },
    {
      title: '외출',
      icon: '🚪',
      problem: '집을 비운 사이 홀로 있는 반려동물이 걱정돼요.',
      solution: '→ 열림 감지 시 즉시 푸시 알림',
      image: '/images/외출.png',
    },
    {
      title: '긴급',
      icon: '🚨',
      problem: '불안한 상황에 누구에게 도움을 구해야 할지 막막해요.',
      solution: '→ SOS 버튼으로 지정 연락처에 빠르게 알림(옵션)',
      image: '/images/긴급.png',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          <span className="text-blue-600">불안한 상황</span>은 <span className="text-blue-600">예고 없이</span> 찾아옵니다.
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {problems.map((item, index) => (
            <div
              key={index}
              className="relative p-6 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-200 border border-gray-100 text-center overflow-hidden bg-cover bg-center bg-no-repeat"
              style={{
                backgroundImage: `url(${item.image})`,
              }}
            >
              {/* Dark overlay for text readability */}
              <div 
                className="absolute inset-0 bg-black/50 rounded-xl"
                style={{
                  backgroundColor: index === 0 ? 'rgba(0, 0, 0, 0.5)' : index === 1 ? 'rgba(0, 0, 0, 0)' : undefined,
                  left: index === 2 ? '-1px' : undefined,
                }}
              ></div>
              <div className="relative z-10 text-white">
                <div className="text-4xl mb-4 mt-10">{item.icon}</div>
                <h3 className="text-[25px] font-bold mb-3 text-white">{item.title}</h3>
                <p 
                  className="mb-4 leading-relaxed text-[18px] text-white"
                  style={index === 0 ? { background: 'unset', backgroundColor: 'unset' } : undefined}
                >{item.problem}</p>
                <p className="font-semibold text-base text-blue-300">{item.solution}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ProblemSection

