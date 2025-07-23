import React, { useState } from 'react';

const faqData = [
  {
    question: 'ЯК ДО ВАС ПОТРАПИТИ?',
    answer:
      'Якщо ви цивільний, то ми супроводимо вас від початку БЗВП до зарахування в наш підрозділ. Якщо ви діючий військовослужбовець і хочете перевестись до нас, то через сервіс Армія+ ми допоможемо вам це зробити. Якщо ви наразі перебуваєте в статусі СЗЧ і маєте бажання потрапити до нас, ми також підкажемо вам як це зробити і супроводимо вас від початку вашого звернення до ВСП, до зарахування в наш підрозділ.',
  },
  {
    question: 'ЧИ НАВЧАЄТЕ ВИ УПРАВЛЯТИ? Є ЯКІСЬ КУРСИ?',
    answer:
      'В будь-якому випадку спочатку на тебе чекає навчання в центрі підготовки, де ти здобудеш необхідні знання і отримаєш відповідну військову спеціальність. Далі буде бойове злагодження і багато годин відпрацювання на полігоні. Лише після цього вихід на бойові.',
  },
  {
    question: 'ЧИ ПОТРІБЕН ЯКИЙСЬ ДОСВІД НА ПОСАДУ ОПЕРАТОРА?',
    answer:
      'Наявність досвіду безумовно буде перевагою. Але якщо ви маєте загальне розуміння керування БПЛА типу DJI Mavic / Autel, та маєте бажання в цьому поглиблено розібратись, ми навчимо вас. Єдине не забувайте, що ви маєте бути готові працювати в зоні активних бойових дій.',
  },
  {
    question: 'ЯКА У ВАС ЗАРПЛАТА?',
    answer:
      'Грошове забезпечення здійснюється відповідно до норм чинного законодавства. Від 20 000 до 120 000 гривень.',
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="font-ibm mb-24 mt-8">
      <div className="px-4 mx-auto sm:px-6 lg:px-8 max-w-7xl">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-xl font-bold leading-tight text-olive-light sm:text-2xl lg:text-3xl">
            ВІДПОВІДІ НА ЗАПИТАННЯ
          </h2>
        </div>
        <div className="max-w-5xl mx-auto mt-8 space-y-4 md:mt-16">
          {faqData.map((faq, index) => (
            <div
              key={index}
              className="bg-zinc-800 text-olive-light transition-all border-2 border-olive-light shadow-lg cursor-pointer rounded-lg"
            >
              <button
                type="button"
                onClick={() => toggleAnswer(index)}
                className="flex items-center justify-between w-full px-4 py-5 sm:p-6 text-left"
              >
                <span className="flex text-lg font-semibold text-olive-light">
                  {faq.question}
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  className={`w-6 h-6 text-olive-light transform transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {openIndex === index && (
                <div className="px-4 pb-5 sm:px-6 sm:pb-6 text-left">
                  <p>{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FAQ;
