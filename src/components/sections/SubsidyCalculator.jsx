import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const indianStates = [
  'Andhra Pradesh', 'Arunachal Pradesh', 'Assam', 'Bihar', 'Chhattisgarh',
  'Goa', 'Gujarat', 'Haryana', 'Himachal Pradesh', 'Jharkhand',
  'Karnataka', 'Kerala', 'Madhya Pradesh', 'Maharashtra', 'Manipur',
  'Meghalaya', 'Mizoram', 'Nagaland', 'Odisha', 'Punjab',
  'Rajasthan', 'Sikkim', 'Tamil Nadu', 'Telangana', 'Tripura',
  'Uttar Pradesh', 'Uttarakhand', 'West Bengal','Chandigarh', 'Delhi', 'Jammu and Kashmir'
];

const SubsidyCalculator = () => {
  const [state, setState] = useState('');
  const [area, setArea] = useState('');
  const [results, setResults] = useState(null);
  const [showPopup, setShowPopup] = useState(false);

  const calculate = () => {
    const sqft = parseFloat(area);
    if (!state || !sqft || sqft <= 0) {
      alert('Please enter valid inputs');
      return;
    }

    const kW = sqft / 100;
    const costPerkW = 50000;
    const totalCost = kW * costPerkW;

    let subsidyRate = 0.2; // Default
    if (state === 'Telangana') subsidyRate = 0.4;
    else if (state === 'Maharashtra') subsidyRate = 0.3;

    const subsidy = totalCost * subsidyRate;
    const netCost = totalCost - subsidy;
    const monthlySaving = kW * 1000 * 0.08;

    setResults({
      kW: kW.toFixed(2),
      totalCost: totalCost.toLocaleString(),
      subsidy: subsidy.toLocaleString(),
      netCost: netCost.toLocaleString(),
      monthlySaving: monthlySaving.toFixed(0)
    });

    setShowPopup(true);
    setTimeout(() => setShowPopup(false), 2500);
  };

  return (
    <section id="subsidy" className="py-24 bg-white px-6">
      {/* ✅ Popup */}
      {showPopup && (
        <div className="fixed top-6 left-1/2 transform -translate-x-1/2 bg-brand-green text-white px-6 py-3 rounded-full shadow-lg z-50">
          ✅ Calculation complete! Scroll down to see your results.
        </div>
      )}

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto bg-white p-8 rounded-3xl shadow-xl text-center"
      >
        <h2 className="text-4xl font-bold text-brand-blue mb-4">
          Estimate Your <span className="text-brand-orange">Solar Subsidy</span>
        </h2>
        <p className="text-brand-green mb-8">
          Enter your rooftop area and select your state to calculate your savings and subsidy.
        </p>

        {/* ✅ Inputs */}
        <div className="grid gap-4 md:grid-cols-2 mb-8 text-left">
          <div>
            <label className="block mb-1 font-medium">Select State</label>
            <select
              value={state}
              onChange={(e) => setState(e.target.value)}
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400"
            >
              <option value="">-- Select State --</option>
              {indianStates.map((s) => (
                <option key={s} value={s}>{s}</option>
              ))}
            </select>
          </div>

          <div>
            <label className="block mb-1 font-medium">Rooftop Area (sq. ft.)</label>
            <input
              type="number"
              value={area}
              onChange={(e) => setArea(e.target.value)}
              placeholder="e.g., 500"
              className="w-full border border-gray-300 p-3 rounded-md focus:ring-2 focus:ring-yellow-400"
            />
          </div>
        </div>

        {/* ✅ Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={calculate}
          className="bg-green-200 text-black text-sm md:text-base font-medium px-6 py-2 rounded-full shadow hover:shadow-md transition"
        >
          🔍 Calculate My Savings
        </motion.button>

        {/* ✅ Results */}
        {results && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-10 text-left bg-yellow-50 p-6 rounded-xl shadow space-y-3"
          >
            <h3 className="text-xl font-semibold text-solar-dark mb-2">Estimated Results</h3>
            <ul className="space-y-1 text-gray-700">
              <li><strong>System Size:</strong> {results.kW} kW</li>
              <li><strong>Total Cost:</strong> ₹{results.totalCost}</li>
              <li><strong>Govt. Subsidy:</strong> ₹{results.subsidy}</li>
              <li><strong>Net Payable:</strong> ₹{results.netCost}</li>
              <li><strong>Monthly Savings:</strong> ₹{results.monthlySaving}/month</li>
            </ul>
          </motion.div>
        )}
      </motion.div>
    </section>
  );
};

export default SubsidyCalculator;
