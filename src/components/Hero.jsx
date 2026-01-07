function Hero() {
  const handlePreRegister = () => {
    // TODO: 사전신청 로직 구현
    console.log('사전신청 클릭')
  }

  const handleSurvey = () => {
    window.open(
      'https://forms.gle/dGaycCpfJtddbvzX8',
      '_blank'
    )
  }

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-200 via-indigo-100 via-purple-100 via-white to-emerald-100 px-4 py-20 relative overflow-hidden">
      {/* Subtle pattern overlay for depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute right-0 bottom-0" style={{
          backgroundImage: 'radial-gradient(circle at 2px 2px, rgb(59, 130, 246) 1px, transparent 0)',
          backgroundSize: '40px 40px',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          left: '-1px'
        }}></div>
      </div>
      <div className="relative z-10 w-full max-w-4xl mx-auto text-center">
        {/* 헤드라인 */}
        <h1 className="font-bold mb-6 leading-tight text-center flex flex-col items-center">
          <span className="block text-5xl md:text-6xl lg:text-7xl lg:whitespace-nowrap text-center">
            <span className="text-blue-600">'여성 1인 가구'</span>
            <span className="text-gray-900">를 위한</span>
            <span className="text-blue-600"> IoT 안심 패키지</span>
          </span>
        </h1>

        {/* 서브카피 */}
        <p className="text-[25px] md:text-xl text-gray-700 mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          밤늦게 귀가할 때, 집을 비울 때도!
          <br />
          앱 하나로 확인·알림·대응까지 올인원으로 제공합니다.
        </p>

        {/* 배지 3개 */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-blue-200">
            <span className="text-gray-800 font-semibold text-[18px]">초기비용 0원</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-green-200">
            <span className="text-gray-800 font-semibold text-[18px]">30분 설치 가이드</span>
          </div>
          <div className="bg-white px-6 py-3 rounded-full shadow-md border-2 border-purple-200">
            <span className="text-gray-800 font-semibold text-[18px]">월 29,000원</span>
          </div>
        </div>

        {/* CTA 버튼 */}
        <div className="flex justify-center items-center mb-8">
          <button
            onClick={handleSurvey}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105 w-full sm:w-auto"
          >
            한달무료(비용0원)
          </button>
        </div>

        {/* 보조 문구 */}
        <p className="text-base text-gray-500">
          얼리버드 혜택 (한달 무료 체험. 단, 후기 참여 조건) <br />체험 종료 후 기기는 반납됩니다!
        </p>
      </div>
    </section>
  )
}

export default Hero

