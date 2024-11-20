// LegalChatbotLanding.tsx
import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import AOS CSS
import { 
    MessageSquare, Scale, Shield, 
    BookOpen, Gavel, FileText, Network,
    ArrowRight, Clock, CheckCircle, Zap, TrendingUp,
    Quote, HelpCircle // Added new icons
  } from 'lucide-react';
import { FeatureCard } from '../components/landing/FeatureCard';
import { useNavigate } from 'react-router-dom';
// import { BenefitCard } from '../components/landing/BenefitCardProps';

interface NavItem {
  href: string;
  label: string;
}


const LegalChatbotLanding: React.FC = () => {
const navigate = useNavigate();

const [isScrolled, setIsScrolled] = useState(false);

  const handleStartClick = (): void => {
    // 시작하기 버튼 클릭 핸들러
    navigate("/login");
  };

  const handleTryFreeClick = (): void => {
    // 무료 체험 버튼 클릭 핸들러
    navigate("/login");
  };

  const renderStarRating = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span 
        key={index} 
        className={`text-2xl ${index < rating ? 'text-yellow-500' : 'text-gray-300'}`}
      >
        ★
      </span>
    ));
  };

  const handleNavClick = (event: React.MouseEvent, href: string) => {
    event.preventDefault();
    const targetElement = document.querySelector(href);
    
    if (targetElement) {
      targetElement.scrollIntoView({ 
        behavior: 'smooth',
        block: 'start'
      });
    }
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    
    AOS.init({
        duration: 1000, // Animation duration
        once: false, // Whether animation should happen only once
        offset: 100, // Offset (in px) from the original trigger point
      });

    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setIsScrolled(scrollTop > 100);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Header Section */}
      <header 
        className={`
          fixed 
          top-0 
          left-0 
          w-full 
          z-50 
          transition-all 
          duration-300 
          ${isScrolled 
            ? 'bg-white shadow-md py-4' 
            : 'bg-transparent py-6'}
        `}
      >
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-blue-900">LegalAI</div>
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className="text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                </a>
              ))}
            </div>
            <button
              onClick={handleStartClick}
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              시작하기
            </button>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-24" data-aos="fade-up" data-aos-delay="200">
        <div className="container mx-auto px-6 py-16 text-center md:py-24">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            AI 법률 상담으로<br />
            <span className="text-blue-600">똑똑한 법률 결정</span>을 내리세요
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            24시간 즉시 답변, 정확한 법률 정보 제공, 
            판례 탐색까지 한 번에 해결하세요.
          </p>
          <div className="flex flex-col md:flex-row justify-center gap-4">
            <button
              onClick={handleTryFreeClick}
              className="bg-blue-600 text-white px-8 py-4 rounded-lg text-lg hover:bg-blue-700 flex items-center justify-center"
            >
              무료 체험하기
              <ArrowRight className="ml-2 h-5 w-5" />
            </button>
            {/* <button
              onClick={handleLearnMoreClick}
              className="bg-white text-blue-600 px-8 py-4 rounded-lg text-lg border-2 border-blue-600 hover:bg-blue-50"
            >
              서비스 알아보기
            </button> */}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="feature" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="fade-up">주요 기능</h2>
          <div className="grid md:grid-cols-3 gap-8">
          <div data-aos="fade-right" data-aos-delay="200">
              <FeatureCard
                icon={<MessageSquare className="h-12 w-12 text-blue-600" />}
                title="24/7 실시간 상담"
                description="언제 어디서나 즉시 법률 상담을 받아보세요"
              />
            </div>
            <div data-aos="fade-up" data-aos-delay="400">
              <FeatureCard
                icon={<Scale className="h-12 w-12 text-blue-600" />}
                title="정확한 법률 정보"
                description="최신 판례와 법령을 기반으로 한 정확한 답변"
              />
            </div>
            <div data-aos="fade-left" data-aos-delay="600">
              <FeatureCard
                icon={<Shield className="h-12 w-12 text-blue-600" />}
                title="안전한 개인정보"
                description="철저한 보안으로 상담 내용을 안전하게 보호"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section id="benefit" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="zoom-in">
          서비스 장점
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefitItems.map((benefit, index) => (
            <div 
              key={index} 
              data-aos="flip-left"
              data-aos-delay={`${index * 200}`}
              className={`
                ${benefit.color} 
                p-6 
                rounded-xl 
                shadow-sm 
                hover:shadow-md 
                transition-all 
                duration-300 
                transform 
                hover:-translate-y-2
                flex 
                flex-col 
                items-start
              `}
            >
              <div className="mb-4">
                {benefit.icon}
              </div>
              <h3 className="text-xl font-semibold text-gray-800 mb-3">
                {benefit.title}
              </h3>
              <p className="text-gray-600 flex-grow">
                {benefit.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>

      {/* 법률 분야별 전문 가이드 */}
      <section id='guide' className="py-20 bg-gray-100">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="zoom-in">
            전문 법률 분야 가이드
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
          {practiceAreas.map((area, index) => (
            <div 
            key={index} 
            data-aos="fade-up" 
            data-aos-delay={`${index * 200}`}
            >
                <FeatureCard
                    icon={area.icon}
                    title={area.title}
                    description={area.description}
                />
            </div>
      ))}
          </div>
        </div>
      </section>

      {/* 최신 법률/판례 업데이트 */}
      <section id='info' className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="zoom-in">
            최신 법률 및 판례 정보
          </h2>
          <div className="max-w-4xl mx-auto space-y-6">
            {legalUpdates.map((update, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={`${index * 200}`}
              >
                <div className="flex items-center mb-3">
                  <span className="text-sm text-gray-500 mr-4">{update.date}</span>
                  <BookOpen className="h-5 w-5 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {update.title}
                </h3>
                <p className="text-gray-600">
                  {update.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

       {/* 고객 후기 */}
       <section id='review' className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16" data-aos="zoom-in">
            고객 후기
          </h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {customerReviews.map((review, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                data-aos="zoom-in"
                data-aos-delay="100"
              >
                <Quote className="h-8 w-8 text-blue-600 mb-4" />
                <p className="text-gray-600 mb-4 italic">"{review.review}"</p>
                <div className="flex items-center">
                  <div>
                    <h4 className="font-semibold text-gray-800">{review.name}</h4>
                    <p className="text-sm text-gray-500">{review.profession}</p>
                  </div>
                  <div className="ml-auto">
                    {renderStarRating(review.rating)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 자주 묻는 질문 */}
      <section id='faq' className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-16"  data-aos="zoom-in">
            자주 묻는 질문
          </h2>
          <div className="max-w-2xl mx-auto space-y-6">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className="bg-white p-6 rounded-xl shadow-sm hover:shadow-md transition-shadow border border-gray-100"
                data-aos="fade-up"
                data-aos-delay={`${index * 50}`}
              >
                <div className="flex items-center mb-3">
                  <HelpCircle className="h-6 w-6 text-blue-600 mr-3" />
                  <h3 className="text-xl font-semibold text-gray-800">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-blue-600 text-white">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold mb-6" data-aos="fade-in">
          지금 바로 법률 고민을 해결하세요
        </h2>
        <p className="text-xl text-blue-100 mb-10 max-w-2xl mx-auto" data-aos="fade-in" data-aos-delay='100'>
          전문 AI 법률 상담으로 빠르고 정확한 답변을 받으세요. 
          첫 상담은 무료입니다.
        </p>
        <button
          onClick={handleTryFreeClick}
          className="bg-white text-blue-600 px-10 py-4 rounded-lg text-lg font-semibold hover:bg-blue-50 flex items-center justify-center mx-auto"
          data-aos='zoom-in'
          data-aos-delay='150'
        >
          무료 체험 시작하기
          <ArrowRight className="ml-2 h-5 w-5" />
        </button>
      </div>
    </section>
    </div>
  );
};

export default LegalChatbotLanding;

const navItems: NavItem[] = [
    { href: '#feature', label: '기능' },
    { href: '#benefit', label: '장점' },
    { href: '#guide', label: '법률 분야' },
    { href: '#info', label: '정보' },
    { href: '#review', label: '후기' },
    { href: '#faq', label: 'FAQ' },
  ];
  
  const benefitItems = [
      {
        icon: <Clock className="h-10 w-10 text-blue-600" />,
        title: "시간 절약",
        description: "복잡한 법률 문제도 AI가 빠르게 분석하고 해결 방안을 제시합니다",
        color: "bg-blue-50"
      },
      {
        icon: <CheckCircle className="h-10 w-10 text-green-600" />,
        title: "비용 절감",
        description: "변호사 상담 전 사전 검토로 불필요한 비용을 줄일 수 있습니다",
        color: "bg-green-50"
      },
      {
        icon: <Zap className="h-10 w-10 text-yellow-600" />,
        title: "신속한 대응",
        description: "24시간 즉각적인 법률 조언으로 빠른 의사결정을 지원합니다",
        color: "bg-yellow-50"
      },
      {
        icon: <TrendingUp className="h-10 w-10 text-purple-600" />,
        title: "맞춤형 분석",
        description: "개인과 기업의 특수한 상황에 맞는 정확한 법률 가이드를 제공합니다",
        color: "bg-purple-50"
      }
    ];
  
  const practiceAreas = [
      {
        icon: <Gavel className="h-12 w-12 text-blue-600" />,
        title: "민사 법률",
        description: "손해배상, 계약, 부동산 등 민사 분야 전문 상담"
      },
      {
        icon: <Shield className="h-12 w-12 text-blue-600" />,
        title: "형사 법률",
        description: "형사 사건 대응 및 법적 조언, 인권 보호"
      },
      {
        icon: <Network className="h-12 w-12 text-blue-600" />,
        title: "노동 법률",
        description: "근로 계약, 임금, 부당해고 등 노동 관련 법률 지원"
      },
      {
        icon: <FileText className="h-12 w-12 text-blue-600" />,
        title: "가사 법률",
        description: "이혼, 양육권, 상속 등 가정 법률 문제 해결"
      }
    ];
    
    const legalUpdates = [
      {
        date: "2024.02.15",
        title: "노동법 개정안 주요 내용",
        summary: "근로시간 단축 및 최저임금 인상 관련 법률 변경"
      },
      {
        date: "2024.01.22",
        title: "최근 대법원 판결 분석",
        summary: "디지털 증거의 법적 증거능력에 대한 중요 판례"
      },
      {
        date: "2024.03.10",
        title: "부동산 임대차보호법 핵심 포인트",
        summary: "전세금 보호 및 임대차 계약 관련 새로운 규정"
      }
    ];
  
    const customerReviews = [
      {
        name: "김성민",
        profession: "중소기업 대표",
        review: "복잡한 노동법 문제를 LegalAI로 빠르게 해결했습니다. 변호사 상담 비용을 크게 절감했어요.",
        rating: 5
      },
      {
        name: "이지원",
        profession: "프리랜서",
        review: "계약서 검토부터 법률 자문까지 정말 믿을 만한 서비스입니다. 학습 된 AI라 그런지 24시간 상담이 정말 편리해요.",
        rating: 4
      }
    ];
  
    const faqs = [
      {
        question: "AI 법률 상담의 정확성은 어떻게 보장되나요?",
        answer: "최신 판례와 법령 데이터베이스를 기반으로 정확한 정보를 제공합니다. 복잡한 사안은 전문 변호사 상담을 추천드립니다."
      },
      {
        question: "개인정보는 안전하게 보호되나요?",
        answer: "최고 수준의 보안 프로토콜을 적용하여 모든 상담 내용을 암호화하고 안전하게 관리합니다."
      },
      {
        question: "어떤 법률 분야를 상담할 수 있나요?",
        answer: "민사, 형사, 노동, 가사 법률 등 다양한 분야의 기본적인 법률 자문이 가능합니다."
      }
    ];