function PricingSection() {
  const handleSurvey = () => {
    window.open(
      'https://forms.gle/dGaycCpfJtddbvzX8',
      '_blank'
    )
  }

  const includedItems = [
    '기기 렌탈(도어락/카메라/센서/SOS)',
    '실시간 확인 + 이벤트 알림',
    '설치 가이드 + 사용 지원',
    'A/S(문제 시 점검 및 교체 프로세스)',
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-gray-50 to-blue-50">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          월 29,000원으로 <span className="text-blue-600">안심</span>을 구독하세요.
        </h2>

        <div className="bg-white rounded-2xl shadow-xl p-8 md:p-12 border border-gray-200">
          {/* 가격 */}
          <div className="text-center mb-8">
            <div className="text-5xl md:text-6xl font-bold text-blue-600 mb-2">
              월 29,000원
            </div>
            <p className="text-gray-600">(12개월 약정)</p>
          </div>

          {/* 포함 항목 */}
          <div className="mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-4" style={{ fontSize: '20px' }}>포함 항목</h3>
            <ul className="space-y-3">
              {includedItems.map((item, index) => (
                <li key={index} className="flex items-start">
                  <svg
                    className="w-6 h-6 text-green-500 mr-3 flex-shrink-0 mt-0.5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span className="text-gray-700">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* 조건 */}
          <div className="bg-gray-50 rounded-lg p-6 mb-8">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">조건</h3>
            <ul className="space-y-2 text-sm text-gray-700">
              <li>• 초기비용 0원 (보증금 30,000원)</li>
              <li>• 설치비: 셀프 0원 / 출장 10,000원(선택)</li>
            </ul>
          </div>

          {/* 보조 문구 */}
          <p className="text-xs text-gray-500 text-center mb-6">
            베타 기간에는 운영 정책이 일부 조정될 수 있습니다(사전 안내).
          </p>

          {/* CTA 버튼 */}
          <button
            onClick={handleSurvey}
            className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 rounded-lg text-lg shadow-lg transition-all duration-200 transform hover:scale-105"
          >
            한달무료(비용0원)
          </button>

          {/* 보조 문구 */}
          <p className="text-base text-gray-500 text-center mt-6">
            얼리버드 혜택 (한달 무료 체험. 단, 후기 참여 조건) <br />체험 종료 후 기기는 반납됩니다!
          </p>
        </div>
      </div>
    </section>
  )
}

export default PricingSection

