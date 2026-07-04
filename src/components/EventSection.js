// src/components/EventSection.js

"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

// ADD NEW EVENTS HERE
const dummyEvents = [
  {
    type: 'camp',
    title: 'Spring Break Camp',
    date: '3.–6. Mai 2027',
    time: [
      '--- MONTAG, 3. MAI 2027 ---',
      'Gruppe Juniors: Montag, 3 Mai 2027 – 08:15–09:15 (Skating)',
      'Gruppe Juniors: Montag, 3 Mai 2027 – 09:30–10:30 (Off-Ice)',
      'Gruppe Prospects: Montag, 3 Mai 2027 – 09:30–10:30 (Skating)',
      'Gruppe Prospects: Montag, 3 Mai 2027 – 10:45–11:45 (Off-Ice)',
      'Gruppe Juniors: Montag, 3 Mai 2027 – 13:00–14:00 (Drills)',
      'Gruppe Prospects: Montag, 3 Mai 2027 – 14:15–15:15 (Drills)',

      '--- DIENSTAG, 4. MAI 2027 ---',
      'Gruppe Juniors: Dienstag, 4 Mai 2027 – 08:15–09:15 (Skating)',
      'Gruppe Juniors: Dienstag, 4 Mai 2027 – 09:30–10:30 (Off-Ice)',
      'Gruppe Prospects: Dienstag, 4 Mai 2027 – 09:30–10:30 (Skating)',
      'Gruppe Prospects: Dienstag, 4 Mai 2027 – 10:45–11:45 (Off-Ice)',
      'Gruppe Juniors: Dienstag, 4 Mai 2027 – 13:00–14:00 (Drills)',
      'Gruppe Prospects: Dienstag, 4 Mai 2027 – 14:15–15:15 (Drills)',

      '--- MITTWOCH, 5. MAI 2027 ---',
      'Gruppe Juniors: Mittwoch, 5 Mai 2027 – 07:00–08:00 (Skating)',
      'Gruppe Prospects: Mittwoch, 5 Mai 2027 – 08:15–09:15 (Skating)',
      'Gruppe Juniors: Mittwoch, 5 Mai 2027 – 09:30–10:30 (Drills)',
      'Gruppe Juniors: Mittwoch, 5 Mai 2027 – 10:45–11:45 (Off-Ice Games)',
      'Gruppe Prospects: Mittwoch, 5 Mai 2027 – 10:45–11:45 (Drills)',
      'Gruppe Prospects: Mittwoch, 5 Mai 2027 – 12:00–13:00 (Off-Ice Games)',

      '--- DONNERSTAG, 6. MAI 2027 ---',
      'Gruppe Juniors: Donnerstag, 6 Mai 2027 – 08:15–09:15 (Skating)',
      'Gruppe Juniors: Donnerstag, 6 Mai 2027 – 09:30–10:30 (Off-Ice)',
      'Gruppe Prospects: Donnerstag, 6 Mai 2027 – 09:30–10:30 (Skating)',
      'Gruppe Prospects: Donnerstag, 6 Mai 2027 – 10:45–11:45 (Off-Ice)',
      'Gruppe Juniors: Donnerstag, 6 Mai 2027 – 13:00–14:00 (Drills)',
      'Gruppe Prospects: Donnerstag, 6 Mai 2027 – 14:15–15:15 (Drills)'
    ],
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors: 2015 and younger\n Prospects: 2014 and older',
    price: 'CHF 480',
  },
  {
    type: 'training',
    title: 'Pfingsten Trainings',
    date: '15.–17. Mai 2027',
    time: [
      '--- SAMSTAG, 15. MAI 2027 ---',
      'Gruppe Juniors: Samstag, 15 Mai 2027 – 09:30–10:30 (Focus on Skating)',
      'Gruppe Prospects: Samstag, 15 Mai 2027 – 10:45–11:45 (Focus on Skating)',

      '--- SONNTAG, 16. MAI 2027 ---',
      'Gruppe Juniors: Sonntag, 16 Mai 2027 – 09:30–10:30 (Puck Movement)',
      'Gruppe Prospects: Sonntag, 16 Mai 2027 – 10:45–11:45 (Puck Movement)',

      '--- MONTAG, 17. MAI 2027 ---',
      'Gruppe Juniors: Montag, 17 Mai 2027 – 09:30–10:30 (Shooting Drills)',
      'Gruppe Prospects: Montag, 17 Mai 2027 – 10:45–11:45 (Shooting Drills)'
    ],
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 150',
  },
  {
    type: 'training',
    title: 'Skills Session',
    date: '22. Mai 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 50',
  },
  {
    type: 'training',
    title: 'Skills Session',
    date: '5. Juni 2027',
    time: '13:00-14:00',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 50',
  },
  {
    type: 'training',
    title: 'Skills Session',
    date: '12. Juni 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 50',
  },
  {
    type: 'training',
    title: 'Skills Session',
    date: '19. Juni 2027',
    time: '10:45-11:45',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 50',
  },
  {
    type: 'training',
    title: 'Skills Session',
    date: '26. Juni 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'Juniors & Prospects',
    price: 'CHF 50',
  },
  {
    type: 'summerLeague',
    title: 'Small Games Challenge',
    date: '9. Mai 2027',
    time: '12:00-13:00',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U12-U14',
    price: 'CHF 25',
  },
  {
    type: 'summerLeague',
    title: 'Full-Ice Game',
    date: '23. Mai 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U16-U18',
    price: 'CHF 25',
  },
  {
    type: 'summerLeague',
    title: 'Full Ice Game',
    date: '6. Juni 2027',
    time: '13:00-14:00',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U12-U14',
    price: 'CHF 25',
  },
  {
    type: 'summerLeague',
    title: 'Full Ice Game',
    date: '13. Juni 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U16-U18',
    price: 'CHF 25',
  },
  {
    type: 'summerLeague',
    title: 'TBD',
    date: '20. Juni 2027',
    time: '10:45-11:45',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U12-U14',
    price: 'CHF 25',
  },
  {
    type: 'summerLeague',
    title: 'Full Ice Game',
    date: '27. Juni 2027',
    time: '09:30-10:30',
    place: 'Kunsteisbahn Wetzikon',
    ages: 'U16-U18',
    price: 'CHF 25',
  },
];

export function EventSection() { 
  const [filter, setFilter] = useState('all');
  const t = useTranslations('events');
  const locale = useLocale();

  const categories = [
    { key: 'all', label: t('categories.all') },
    { key: 'camps', label: t('categories.camps') },
    { key: 'trainings', label: t('categories.trainings') },
    { key: 'summerLeague', label: t('categories.summerLeague') }
  ];

  const filteredEvents = dummyEvents.filter(event => {
    if (filter === 'all') return true;
    if (filter === 'camps') return event.type === 'camp';
    if (filter === 'trainings') return event.type === 'training';
    if (filter === 'summerLeague') return event.type === 'summerLeague';
    return true;
  });

  return (
    <section className="w-full px-4 mt-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-heading mb-8">
        {t('title')}
      </h2>

      {/* filter tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {categories.map(cat => (
          <button
            key={cat.key}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 ${
              filter === cat.key
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setFilter(cat.key)}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* table or empty message */}
      {filteredEvents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">{t('table.title')}</th>
                <th className="px-4 py-3 text-left">{t('table.date')}</th>
                <th className="px-4 py-3 text-left">{t('table.time')}</th>
                <th className="px-4 py-3 text-left">{t('table.place')}</th>
                <th className="px-4 py-3 text-left">{t('table.ages')}</th>
                <th className="px-4 py-3 text-left">{t('table.price')}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200 text-gray-800 whitespace-pre-line">
              {filteredEvents.map((event, index) => (
                <tr key={index} className="hover:bg-gray-50 valign-top">
                  <td className="px-4 py-3 font-medium">{event.title}</td>
                  <td className="px-4 py-3 whitespace-nowrap">{event.date}</td>
                  <td className="px-4 py-3 text-sm min-w-[280px]">
                    {Array.isArray(event.time) ? (
                      <div className="flex flex-col gap-1">
                        {event.time.map((line, i) => {
                          const isHeader = line.startsWith('---');
                          return (
                            <span 
                              key={i} 
                              className={isHeader ? 'font-bold text-gray-900 block mt-2 first:mt-0' : 'text-gray-600 pl-2'}
                            >
                              {line}
                            </span>
                          );
                        })}
                      </div>
                    ) : (
                      event.time
                    )}
                  </td>
                  <td className="px-4 py-3">{event.place}</td>
                  <td className="px-4 py-3">{event.ages}</td>
                  <td className="px-4 py-3 font-semibold text-primary">{event.price}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <div className="text-center text-gray-600 text-lg mt-8">
          {t('noEvents')}
        </div>
      )}

      {/* signup button */}
      <div className="flex justify-center mt-10">
        <Link
          href={`/${locale}/signup`}
          className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-600 transition"
        >
          {t('signupButton')}
        </Link>
      </div>
    </section>
  );
}