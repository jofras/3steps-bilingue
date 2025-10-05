// src/components/EventSection.js

"use client";

import { useState } from 'react';
import { useTranslations, useLocale } from 'next-intl';
import Link from 'next/link';

const dummyEvents = [
  {
    type: 'camp',
    title: 'Winter Skills Camp',
    date: '2025-12-10',
    time: '09:00–16:00',
    place: 'Ice Arena Zurich',
    ages: '10–14',
    price: 'CHF 120',
  },
  {
    type: 'camp',
    title: 'Holiday Intensive Camp',
    date: '2026-01-02',
    time: '10:00–15:00',
    place: 'Bern Training Center',
    ages: '12–16',
    price: 'CHF 135',
  },
  {
    type: 'training',
    title: 'Weekly Stickhandling Class',
    date: 'Every Monday',
    time: '17:00–18:30',
    place: 'Lausanne Ice Rink',
    ages: '8–12',
    price: 'CHF 25',
  },
  {
    type: 'training',
    title: 'Elite Shooting Sessions',
    date: 'Fridays in February',
    time: '18:00–19:30',
    place: 'Geneva Hockey Dome',
    ages: '14–18',
    price: 'CHF 40',
  },
];

export function EventSection() { 
  const [filter, setFilter] = useState('All');
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
    return false;
  });

  return (
    <section className="w-full px-4 mt-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-heading mb-8">
        {t('title')}
      </h2>

      {/* Filter Tabs */}
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

      {/* Table or Empty Message */}
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

      {/* Signup Button */}
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