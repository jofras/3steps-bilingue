// src/components/EventSection.js

"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

// ADD NEW EVENTS HERE
const dummyEvents = [
  {
    type: 'camp',
    title: 'Auffahrt Trainings',
    date: '6.-9. Mai 2027',
    time: [
    'Gruppe Juniors: Donnerstag, 16. Mai 2026 – 08:30–09:45',
    'Gruppe Prospects: Donnerstag, 16 Mai 2026 – 10:00–11:15',
  ],
    place: 'Turnhalle Juch',
    ages: 'Juniors & Prospects',
    price: 'CHF 30',
  },
  {
    type: 'training',
    title: 'Turnhallentraining',
    date: '2026-05-15',
    time: '13:00-14:00',
    place: 'Turnhalle Juch',
    ages: 'Juniors',
    price: 'CHF 30',
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
    if (filter === 'summerLeague') return event.type === 'summer-league';
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
            <tbody className="divide-y divide-gray-200 text-gray-800">
              {filteredEvents.map((event, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="px-4 py-3">{event.title}</td>
                  <td className="px-4 py-3">{event.date}</td>
                  <td className="px-4 py-3">{event.time}</td>
                  <td className="px-4 py-3">{event.place}</td>
                  <td className="px-4 py-3">{event.ages}</td>
                  <td className="px-4 py-3">{event.price}</td>
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
