// EventSection.js

import { useState } from 'react';
import { Link } from 'react-router-dom';

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
  // No summer league events for now
];

const categories = ['All', 'Camps', 'Trainings', 'Summer League'];

export function EventSection() {
  const [filter, setFilter] = useState('All');

  const filteredEvents = dummyEvents.filter(event => {
    if (filter === 'All') return true;
    if (filter === 'Camps') return event.type === 'camp';
    if (filter === 'Trainings') return event.type === 'training';
    if (filter === 'Summer League') return event.type === 'summer-league';
    return false;
  });

  return (
    <section className="w-full px-4 mt-20 max-w-6xl mx-auto">
      <h2 className="text-3xl md:text-4xl text-center text-gray-800 font-heading mb-8">Upcoming Events</h2>

      {/* Filter Tabs */}
      <div className="flex justify-center gap-4 flex-wrap mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-full text-sm md:text-base font-medium transition-colors duration-200 ${
              filter === cat
                ? 'bg-primary text-white shadow-md'
                : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Table or Empty Message */}
      {filteredEvents.length > 0 ? (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white shadow-sm rounded-lg overflow-hidden">
            <thead className="bg-gray-100 text-gray-700">
              <tr>
                <th className="px-4 py-3 text-left">Title</th>
                <th className="px-4 py-3 text-left">Date</th>
                <th className="px-4 py-3 text-left">Time</th>
                <th className="px-4 py-3 text-left">Place</th>
                <th className="px-4 py-3 text-left">Ages</th>
                <th className="px-4 py-3 text-left">Price</th>
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
          No {filter === 'All' ? 'events' : filter.toLowerCase()} scheduled at the moment.
        </div>
      )}

      {/* Signup Button */}
      <div className="flex justify-center mt-10">
        <Link
          to="/signup"
          className="bg-accent text-white px-6 py-3 rounded-full text-lg font-semibold shadow hover:bg-green-600 transition"
        >
          Go to Signup Page
        </Link>
      </div>
    </section>
  );
}