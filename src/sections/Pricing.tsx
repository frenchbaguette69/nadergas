"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaUser, FaPhone, FaEnvelope, FaTools } from "react-icons/fa";

type FormData = {
  name: string;
  phone: string;
  email: string;
  service: string;
  area: string;
};

export const Pricing = () => {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    service: "",
    area: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        console.log('Formulier succesvol ingediend:', formData);
        setFormData({ name: '', phone: '', email: '', service: '', area: '' });
        alert('Bedankt! Uw formulier is succesvol ingediend.');
      } else {
        console.error('Fout bij het indienen van het formulier:', response.statusText);
      }
    } catch (error) {
      console.error('Verzoek mislukt:', error);
    }
  };

  return (
    <section className="md:py-24 bg-gradient-to-b from-[#19ce89]/50 to-[#ffffff] overflow-x-clip py-10 relative">
      <div className="container mx-auto px-4 relative z-10 max-w-2xl"> {/* Max breedte aangepast */}
        <h2 className="section-title text-3xl font-semibold text-center mb-8">
          Vrijblijvende offerte ontvangen?
        </h2>
        <p className="text-center text-gray-700 mb-8 max-w-lg mx-auto">
          Vul onderstaand formulier in voor een gratis en vrijblijvende offerte. Onze specialisten nemen snel contact met u op om uw wensen te bespreken en u van de beste service te voorzien.
        </p>
        <form onSubmit={handleSubmit} className="w-full bg-white p-8 rounded-lg shadow-xl border border-gray-200"> {/* W-full toegevoegd */}
          <div className="mb-4 flex items-center">
            <FaUser className="mr-2 text-gray-500" />
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Uw naam"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <FaPhone className="mr-2 text-gray-500" />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Uw telefoonnummer"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <FaEnvelope className="mr-2 text-gray-500" />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Uw emailadres"
              required
            />
          </div>

          <div className="mb-4 flex items-center">
            <FaTools className="mr-2 text-gray-500" />
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              required
            >
              <option value="">Selecteer de gewenste werkzaamheden</option>
              <option value="Sausklaar muren met materiaal">Sausklaar (zeer gladde muren) met materiaal</option>
              <option value="Sausklaar plafond met materiaal">Sausklaar (zeer gladde plafond) met materiaal</option>
              <option value="Sausklaar muren zonder materiaal">Sausklaar (zeer gladde muren) zonder materiaal</option>
              <option value="Sausklaar plafond zonder materiaal">Sausklaar (zeer gladde plafond) zonder materiaal</option>
              <option value="Spachtelputz muren">Spachtelputz (sierpleister) muren</option>
              <option value="Spachtelputz plafond">Spachtelputz (sierpleister) plafond</option>
              <option value="Tegelzetten">Tegelzetten op aanvraag</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-medium mb-2">Aantal m²</label>
            <input
              type="number"
              name="area"
              value={formData.area}
              onChange={handleChange}
              className="w-full px-3 py-2 border rounded-lg"
              placeholder="Aantal vierkante meters"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-[#19ce89] text-white font-semibold py-2 px-4 rounded-lg hover:bg-[#17b577] transition duration-300"
          >
            Offerte Aanvragen
          </button>
        </form>
      </div>
    </section>
  );
};
