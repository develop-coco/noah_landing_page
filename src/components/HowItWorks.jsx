function HowItWorks() {
  const steps = [
    {
      number: '1',
      title: '주문/신청',
      description: '당일 또는 익일 배송',
      icon: '📦',
    },
    {
      number: '2',
      title: '설치',
      description: '셀프 설치(가이드 제공, 설치비 0원) 또는 출장 설치(옵션)',
      icon: '🔧',
    },
    {
      number: '3',
      title: '앱 연동',
      description: '알림 설정 완료',
      icon: '📱',
    },
    {
      number: '4',
      title: '케어',
      description: '문제 발생 시 카톡 문의 → 원격 점검 → 필요 시 교체',
      icon: '💬',
    },
  ]

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          설치는 <span className="text-blue-600">간편하게</span>, 문제 해결은 <span className="text-blue-600">빠르게</span>!
        </h2>

        <div className="relative">
          {/* 연결선 (데스크톱에서만 표시) */}
          <div className="hidden md:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-200 via-green-200 to-blue-200"></div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative items-stretch">
            {steps.map((step, index) => (
              <div key={index} className="relative flex">
                <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-200 border border-gray-100 text-center flex flex-col w-full">
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-blue-500 to-green-500 text-white rounded-full text-2xl font-bold mb-4 mx-auto">
                    {step.number}
                  </div>
                  <div className="text-4xl mb-3">{step.icon}</div>
                  <h3 className="text-[25px] font-bold text-gray-900 mb-2">{step.title}</h3>
                  <p className="text-[18px] text-gray-600 leading-relaxed flex-grow">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-12 text-center">
          <p className="text-[25px] font-bold text-blue-600">
            혼자 설치해야한다는 스트레스에서 벗어나세요.
          </p>
          <p className="text-gray-600 mt-2 text-[18px]">
            30분 설치를 목표로 합니다
          </p>
        </div>
      </div>
    </section>
  )
}

export default HowItWorks

