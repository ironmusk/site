import { useState, useEffect } from 'react';

function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setMobileMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-900 text-white font-sans">
      {/* Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? 'bg-gray-900/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-20">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl">
                ТТ
              </div>
              <div className="hidden sm:block">
                <p className="text-sm font-bold">ООО "ТТ"</p>
                <p className="text-xs text-gray-400">Эвакуатор Красноярск</p>
              </div>
            </div>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              <button onClick={() => scrollToSection('advantages')} className="text-sm hover:text-red-400 transition-colors">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('services')} className="text-sm hover:text-red-400 transition-colors">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="text-sm hover:text-red-400 transition-colors">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="text-sm hover:text-red-400 transition-colors">
                Контакты
              </button>
            </nav>

            {/* Phone + CTA */}
            <div className="hidden md:flex items-center gap-4">
              <a href="tel:+79082120202" className="text-sm font-semibold hover:text-red-400 transition-colors">
                +7 (908) 212-02-02
              </a>
              <a
                href="tel:+79082120202"
                className="bg-red-600 hover:bg-red-700 text-white px-5 py-2 rounded-lg text-sm font-semibold transition-colors"
              >
                Заказать
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                {mobileMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-gray-900/95 backdrop-blur-md border-t border-gray-800">
            <div className="px-4 py-4 space-y-3">
              <button onClick={() => scrollToSection('advantages')} className="block w-full text-left py-2 hover:text-red-400">
                Преимущества
              </button>
              <button onClick={() => scrollToSection('services')} className="block w-full text-left py-2 hover:text-red-400">
                Услуги
              </button>
              <button onClick={() => scrollToSection('pricing')} className="block w-full text-left py-2 hover:text-red-400">
                Тарифы
              </button>
              <button onClick={() => scrollToSection('contacts')} className="block w-full text-left py-2 hover:text-red-400">
                Контакты
              </button>
              <a href="tel:+79082120202" className="block w-full bg-red-600 text-center py-3 rounded-lg font-semibold mt-4">
                Заказать эвакуатор
              </a>
            </div>
          </div>
        )}
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background */}
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900"></div>
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 opacity-5" style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '50px 50px'
        }}></div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center py-32">
          <div className="inline-flex items-center gap-2 bg-red-600/20 border border-red-600/30 rounded-full px-4 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
            <span className="text-sm text-red-300">Работаем круглосуточно без выходных</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold mb-6 leading-tight">
            Эвакуатор в{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">
              Красноярске
            </span>
          </h1>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-3xl mx-auto">
            Рядом с вами! Приходим на помощь с 2010 года
          </p>

          <p className="text-lg text-gray-400 mb-10 max-w-2xl mx-auto">
            Быстрая подача за 15–30 минут. Эвакуация легковых, грузовых автомобилей и спецтехники по городу, пригороду и межгороду.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
            <a
              href="tel:+79082120202"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl text-lg font-bold transition-all hover:scale-105 shadow-lg shadow-red-600/30 flex items-center justify-center gap-3"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              Заказать эвакуатор
            </a>
            <a
              href="tel:+79082120202"
              className="w-full sm:w-auto border-2 border-gray-600 hover:border-red-500 text-white px-8 py-4 rounded-xl text-lg font-semibold transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <span>+7 (908) 212-02-02</span>
            </a>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto">
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-red-400">15+</p>
              <p className="text-sm text-gray-400">лет опыта</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-red-400">15-30</p>
              <p className="text-sm text-gray-400">минут подача</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-red-400">24/7</p>
              <p className="text-sm text-gray-400">без выходных</p>
            </div>
            <div className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-4">
              <p className="text-3xl font-bold text-red-400">4</p>
              <p className="text-sm text-gray-400">точки в городе</p>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </section>

      {/* Advantages Section */}
      <section id="advantages" className="py-20 md:py-32 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Почему выбирают <span className="text-red-500">ООО "ТТ"</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Нас выбирают те, кто ценит безопасность и качество. Мы оперативно выезжаем по звонку и гарантируем надежность на каждом этапе.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Быстрая подача</h3>
              <p className="text-gray-400">
                Подача эвакуатора за 15–30 минут. Время может зависеть от района и дорожной ситуации.
              </p>
            </div>

            {/* Card 2 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Безопасность</h3>
              <p className="text-gray-400">
                Профессиональный подход к каждой детали. Аккуратная погрузка и бережная транспортировка вашего авто.
              </p>
            </div>

            {/* Card 3 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Честные цены</h3>
              <p className="text-gray-400">
                Помощь на дороге по честной цене. Прозрачные тарифы без скрытых наценок и доплат.
              </p>
            </div>

            {/* Card 4 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Любые расстояния</h3>
              <p className="text-gray-400">
                Работаем по городу, пригороду и межгороду. Транспортировка на любые расстояния.
              </p>
            </div>

            {/* Card 5 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.687-.726a1.995 1.995 0 00-.984-.072l-2.736 1.152a1.995 1.995 0 01-1.548 0l-2.736-1.152a1.995 1.995 0 00-.984.072l-2.687.726a2 2 0 00-1.022.547M12 2v1m0 0a2 2 0 100 4m0-4a2 2 0 010 4m6-4v1m0 0a2 2 0 100 4m0-4a2 2 0 010 4m-6 4v1m0 0a2 2 0 100 4m0-4a2 2 0 010 4" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">Любой транспорт</h3>
              <p className="text-gray-400">
                Эвакуация легковых, грузовых автомобилей и спецтехники. Подберём эвакуатор для вашей ситуации.
              </p>
            </div>

            {/* Card 6 */}
            <div className="group bg-gray-800/80 border border-gray-700 rounded-2xl p-8 hover:border-red-600/50 transition-all duration-300 hover:-translate-y-2">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mb-6 group-hover:bg-red-600/30 transition-colors">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-bold mb-3">С 2010 года</h3>
              <p className="text-gray-400">
                Более 15 лет помогаем водителям Красноярска. Опыт и надёжность в каждой поездке.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Наши <span className="text-red-500">услуги</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Полный спектр услуг по эвакуации и технической помощи на дороге
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Service 1 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Эвакуация автомобилей</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Полная погрузка на автоматическую платформу
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Погрузка краном-манипулятором
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Легковые автомобили до 3 тонн
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-red-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Грузовые автомобили и спецтехника
                  </li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="relative overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl p-8 md:p-10">
              <div className="absolute top-0 right-0 w-32 h-32 bg-orange-600/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
              <div className="relative">
                <div className="w-16 h-16 bg-orange-600 rounded-2xl flex items-center justify-center mb-6">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <h3 className="text-2xl font-bold mb-4">Техпомощь на дороге</h3>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Зарядка АКБ
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Запуск двигателя
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Замена колеса на запаску
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Вытащить машину из ямы/кювета
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-orange-400 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                    Подвоз топлива
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-20 md:py-32 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Тарифы на <span className="text-red-500">услуги</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Прозрачные цены без скрытых доплат
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* City tariff */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-red-600 p-6">
                <h3 className="text-2xl font-bold">Тариф «ГОРОД»</h3>
                <p className="text-red-100 mt-1">В пределах г. Красноярска</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">от 5 000</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Базовый тариф — от 5 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Отдалённые районы — +1 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Заблокировано колесо — +1 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Манипулятор — +2 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Сложная погрузка — от +1 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-red-400 font-bold">•</span>
                    Авто более 5,5 м — +2 000 ₽
                  </li>
                </ul>
                <a
                  href="tel:+79082120202"
                  className="mt-8 w-full bg-red-600 hover:bg-red-700 text-white py-3 rounded-xl font-semibold text-center transition-colors block"
                >
                  Заказать
                </a>
              </div>
            </div>

            {/* Highway tariff */}
            <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-2xl overflow-hidden">
              <div className="bg-orange-600 p-6">
                <h3 className="text-2xl font-bold">Тариф «ТРАССА»</h3>
                <p className="text-orange-100 mt-1">Междугородние перевозки</p>
              </div>
              <div className="p-6 md:p-8">
                <div className="flex items-baseline gap-2 mb-6">
                  <span className="text-4xl font-bold">от 5 000</span>
                  <span className="text-xl text-gray-400">₽</span>
                </div>
                <ul className="space-y-4 text-gray-300">
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Базовый тариф — от 5 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Транспортировка — от 120 ₽/км
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Заблокировано колесо — +1 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Сложность погрузки — от +1 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Авто более 5,5 м — +2 000 ₽
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="text-orange-400 font-bold">•</span>
                    Техпомощь — от 2 000 ₽
                  </li>
                </ul>
                <a
                  href="tel:+79082120202"
                  className="mt-8 w-full bg-orange-600 hover:bg-orange-700 text-white py-3 rounded-xl font-semibold text-center transition-colors block"
                >
                  Заказать
                </a>
              </div>
            </div>
          </div>

          <p className="text-center text-gray-500 text-sm mt-8 max-w-3xl mx-auto">
            * Тарифы действуют для автомобилей категории В массой не более 3 тонн при температурах выше -20°C.
            Для грузовых автомобилей и спецтехники стоимость рассчитывается индивидуально.
          </p>
        </div>
      </section>

      {/* How to order Section */}
      <section className="py-20 md:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Как <span className="text-red-500">заказать</span>?
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Всего 3 простых шага для заказа эвакуатора
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {/* Step 1 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-400">1</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Позвоните нам</h3>
              <p className="text-gray-400">
                Позвоните по телефону +7 (908) 212-02-02 или напишите в мессенджер
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-400">2</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Опишите ситуацию</h3>
              <p className="text-gray-400">
                Мы подберём эвакуатор для вашей ситуации и рассчитаем стоимость
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-center">
              <div className="w-20 h-20 bg-red-600/20 border-2 border-red-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-3xl font-bold text-red-400">3</span>
              </div>
              <h3 className="text-xl font-bold mb-3">Ожидайте подачу</h3>
              <p className="text-gray-400">
                Эвакуатор прибудет за 15–30 минут. Мы решим вашу проблему быстро и аккуратно
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 md:py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 to-orange-900/40"></div>
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-1/3 w-96 h-96 bg-red-600 rounded-full blur-3xl"></div>
          <div className="absolute bottom-0 right-1/3 w-96 h-96 bg-orange-600 rounded-full blur-3xl"></div>
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Нужен эвакуатор прямо сейчас?
          </h2>
          <p className="text-xl text-gray-300 mb-10">
            Звоните — мы уже в пути! Подача эвакуатора за 15–30 минут по Красноярску
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="tel:+79082120202"
              className="w-full sm:w-auto bg-red-600 hover:bg-red-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 shadow-lg shadow-red-600/30 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              +7 (908) 212-02-02
            </a>
            <a
              href="https://t.me/+79535837101"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-blue-600 hover:bg-blue-700 text-white px-10 py-5 rounded-xl text-xl font-bold transition-all hover:scale-105 flex items-center justify-center gap-3"
            >
              <svg className="w-7 h-7" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
              </svg>
              Telegram
            </a>
          </div>
        </div>
      </section>

      {/* Contacts Section */}
      <section id="contacts" className="py-20 md:py-32 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Наши <span className="text-red-500">контакты</span>
            </h2>
            <p className="text-gray-400 text-lg">Свяжитесь с нами любым удобным способом</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Phone */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-red-600/50 transition-colors">
              <div className="w-14 h-14 bg-red-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Телефоны</h3>
              <a href="tel:+79082120202" className="block text-red-400 hover:text-red-300 font-semibold text-lg transition-colors">
                +7 (908) 212-02-02
              </a>
              <a href="tel:+73912920202" className="block text-gray-400 hover:text-gray-300 transition-colors mt-1">
                +7 (391) 292-02-02
              </a>
            </div>

            {/* Messengers */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-red-600/50 transition-colors">
              <div className="w-14 h-14 bg-blue-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Мессенджеры</h3>
              <a href="https://t.me/+79535837101" target="_blank" rel="noopener noreferrer" className="block text-blue-400 hover:text-blue-300 font-semibold transition-colors">
                Telegram
              </a>
              <a href="https://max.ru/u/f9LHodD0cOIFuRusPX54XCqAAFxchXQRGsNGxI1cLGfRba56GD5Ygdr7K_o" target="_blank" rel="noopener noreferrer" className="block text-gray-400 hover:text-gray-300 transition-colors mt-1">
                MAX
              </a>
            </div>

            {/* Addresses */}
            <div className="bg-gray-800 border border-gray-700 rounded-2xl p-8 text-center hover:border-red-600/50 transition-colors md:col-span-2 lg:col-span-1">
              <div className="w-14 h-14 bg-green-600/20 rounded-xl flex items-center justify-center mx-auto mb-4">
                <svg className="w-7 h-7 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-bold mb-2">Адреса</h3>
              <div className="text-gray-400 text-sm space-y-1">
                <p>пр. Газеты Красноярский Рабочий, 150с46</p>
                <p>ул. Качинская, 13</p>
                <p>ул. Цимлянская, 35Б</p>
                <p>ул. Горького, 36</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 border-t border-gray-800 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Logo */}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 bg-red-600 rounded-lg flex items-center justify-center font-bold text-xl">
                  ТТ
                </div>
                <div>
                  <p className="font-bold">ООО "ТТ"</p>
                  <p className="text-xs text-gray-400">Эвакуатор Красноярск</p>
                </div>
              </div>
              <p className="text-gray-400 text-sm">
                Служба эвакуации автомобилей в Красноярске. Работаем с 2010 года. Круглосуточно, без выходных и праздников.
              </p>
            </div>

            {/* Navigation */}
            <div>
              <h4 className="font-bold mb-4">Навигация</h4>
              <ul className="space-y-2 text-gray-400 text-sm">
                <li><button onClick={() => scrollToSection('advantages')} className="hover:text-white transition-colors">Преимущества</button></li>
                <li><button onClick={() => scrollToSection('services')} className="hover:text-white transition-colors">Услуги</button></li>
                <li><button onClick={() => scrollToSection('pricing')} className="hover:text-white transition-colors">Тарифы</button></li>
                <li><button onClick={() => scrollToSection('contacts')} className="hover:text-white transition-colors">Контакты</button></li>
              </ul>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400 text-sm">
                <a href="tel:+79082120202" className="block hover:text-white transition-colors">
                  +7 (908) 212-02-02
                </a>
                <a href="tel:+73912920202" className="block hover:text-white transition-colors">
                  +7 (391) 292-02-02
                </a>
                <p>Красноярск</p>
                <div className="flex gap-3 mt-3">
                  <a href="https://t.me/+79535837101" target="_blank" rel="noopener noreferrer" className="w-8 h-8 bg-gray-800 rounded-lg flex items-center justify-center hover:bg-blue-600 transition-colors">
                    <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
                      <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.15 1.58-.8 5.42-1.13 7.19-.14.75-.42 1-.68 1.03-.58.05-1.02-.38-1.58-.75-.88-.58-1.38-.94-2.23-1.5-.99-.65-.35-1.01.22-1.59.15-.15 2.71-2.48 2.76-2.69a.2.2 0 00-.05-.18c-.06-.05-.14-.03-.21-.02-.09.02-1.49.95-4.22 2.79-.4.27-.76.41-1.08.4-.36-.01-1.04-.2-1.55-.37-.63-.2-1.12-.31-1.08-.66.02-.18.27-.36.74-.55 2.92-1.27 4.86-2.11 5.83-2.51 2.78-1.16 3.35-1.36 3.73-1.36.08 0 .27.02.39.12.1.08.13.19.14.27-.01.06.01.24 0 .38z"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-500 text-sm">
            <p>© 2026 ООО "ТТ". Все права защищены. Эвакуатор Красноярск.</p>
          </div>
        </div>
      </footer>

      {/* Floating Call Button (Mobile) */}
      <a
        href="tel:+79082120202"
        className="fixed bottom-6 right-6 md:hidden w-14 h-14 bg-red-600 rounded-full flex items-center justify-center shadow-lg shadow-red-600/30 z-40 hover:bg-red-700 transition-colors animate-pulse"
      >
        <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
      </a>
    </div>
  );
}

export default App;
