import { useState } from 'react'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: '세입자인데 설치 가능한가요?',
      answer:
        '공사 없이 설치 가능한 구성을 우선으로 설계했습니다. 집 구조에 따라 가능 여부를 안내해 드립니다.',
    },
    {
      question: '설치가 어렵지 않나요?',
      answer:
        '5분 튜토리얼과 체크리스트를 제공합니다. 원하시면 출장 설치(옵션)도 가능합니다.',
    },
    {
      question: '카메라가 사생활 침해가 걱정돼요.',
      answer:
        '설치 위치/각도 가이드를 제공하고, 사용 환경에 맞춘 프라이버시 설정을 안내합니다.',
    },
    {
      question: '알림이 너무 자주 오거나 오작동하면요?',
      answer:
        '알림 민감도/모드(외출·취침 등) 설정을 안내하고, 반복 이슈는 점검으로 해결합니다.',
    },
    {
      question: '고장나면 어떻게 되나요?',
      answer:
        '카카오톡으로 문의 → 원격 점검 → 필요 시 교체로 대응합니다.',
    },
    {
      question: '해지하면 기기는 어떻게 하나요?',
      answer: '해지 시 기기는 회수합니다(정책/절차는 사전 안내).',
    },
    {
      question: '월 2.9만 원 외에 추가 비용이 있나요?',
      answer:
        '보증금(3만 원)과 설치비(출장 선택 시 1만 원)가 발생할 수 있습니다.',
    },
    {
      question: '112 자동연결이 가능한가요?',
      answer:
        '긴급 상황에서 빠른 연락을 돕는 옵션 기능을 준비 중이며, 적용 범위와 방식은 베타에서 검증 후 안내드립니다.',
    },
  ]

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <section className="py-20 px-4 bg-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12 text-balance">
          자주 묻는 질문
        </h2>

        <div className="space-y-4 mb-12">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-200"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center bg-white hover:bg-gray-50 transition-colors duration-200"
              >
                <span className="font-semibold text-gray-900 pr-4">{faq.question}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform duration-200 ${
                    openIndex === index ? 'transform rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-6 py-4 bg-gray-50 border-t border-gray-200">
                  <p className="text-gray-700 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default FAQ

