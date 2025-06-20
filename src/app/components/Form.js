'use client';

import React, { useEffect, useState } from 'react';
import Button from './Button';
import { useRouter } from 'next/navigation';

export default function () {
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [cuisine, setCuisine] = useState('');
  const [prepTime, setPrepTime] = useState('');
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setIsValid(!!search || !!cuisine || !!prepTime);
  }, [search, cuisine, prepTime]);

  const handleSubmit = (e) => {
    e.preventDefault();

    e.preventDefault();
    const params = new URLSearchParams();

    if (search) params.append('query', search);
    if (cuisine) params.append('cuisine', cuisine);
    if (prepTime) params.append('time', prepTime);
    router.push(`/recipes?${params.toString()}`);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-2xl shadow-md space-y-4 w-full max-w-md mx-auto border border-orange-300"
    >
      <div className="text-orange-600 font-semibold text-lg">Search</div>
      <input
        type="text"
        placeholder="Enter dish name..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
      />

      <div>
        <label className="block text-sm font-medium text-orange-600 mb-1">Dropdown</label>
        <select
          value={cuisine}
          onChange={(e) => setCuisine(e.target.value)}
          className="w-full border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
        >
          <option value="">Select Cuisine</option> {/* ← дефолт */}
          <option>Asian</option>
          <option>Italian</option>
          <option>European</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-orange-600 mb-1">Preparation Time</label>
        <input
          type="number"
          value={prepTime}
          onChange={(e) => setPrepTime(e.target.value)}
          className="w-full border border-orange-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-orange-500"
          placeholder="e.g. 30 min"
          min={0}
        />
      </div>

      <Button type="submit" text="Main Page" disable={!isValid}></Button>
    </form>
  );
}
