import React, { useState } from 'react';
import { 
  X, 
  Calculator, 
  DollarSign, 
  Percent, 
  PieChart, 
  FileText, 
  Check, 
  Download, 
  RefreshCw,
  Info,
  ShieldCheck,
  TrendingUp
} from 'lucide-react';

interface TaxCalculatorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const TaxCalculatorModal: React.FC<TaxCalculatorModalProps> = ({ isOpen, onClose }) => {
  const [calcType, setCalcType] = useState<'personal' | 'corporate'>('personal');
  
  // Personal Tax Inputs (NGN)
  const [grossAnnualIncome, setGrossAnnualIncome] = useState<number>(6000000); // ₦6M/yr
  const [pensionContrib, setPensionContrib] = useState<number>(8); // 8%
  const [nhfContrib, setNhfContrib] = useState<number>(2.5); // 2.5%
  const [nhisContrib, setNhisContrib] = useState<number>(0);

  // Corporate Tax Inputs (NGN)
  const [companyTurnover, setCompanyTurnover] = useState<number>(45000000); // ₦45M turnover
  const [grossProfit, setGrossProfit] = useState<number>(12000000); // ₦12M profit
  const [allowableExpenses, setAllowableExpenses] = useState<number>(3000000);

  if (!isOpen) return null;

  // Calculate Personal Income Tax (PAYE) according to Nigerian Tax Act rules
  const calculatePAYE = () => {
    // Pension Deduction = 8% of Gross
    const pensionAmount = (grossAnnualIncome * pensionContrib) / 100;
    // NHF Deduction = 2.5% of Basic (approximated as 2.5% of gross for simplicity)
    const nhfAmount = (grossAnnualIncome * nhfContrib) / 100;
    
    // Consolidated Relief Allowance (CRA) = Higher of ₦200,000 or 1% of Gross + 20% of Gross Income
    const maxOnePercent = Math.max(200000, grossAnnualIncome * 0.01);
    const craRelief = maxOnePercent + (grossAnnualIncome * 0.20);

    const totalTaxExemptions = pensionAmount + nhfAmount + nhisContrib + craRelief;
    const taxableIncome = Math.max(0, grossAnnualIncome - totalTaxExemptions);

    // Nigerian Progressive PAYE Tax Bands:
    // First ₦300k @ 7%
    // Next ₦300k @ 11%
    // Next ₦500k @ 15%
    // Next ₦500k @ 19%
    // Next ₦1,600,000 @ 21%
    // Above ₦3,200,000 @ 24%
    let tax = 0;
    let rem = taxableIncome;

    if (rem > 0) {
      const b1 = Math.min(rem, 300000);
      tax += b1 * 0.07;
      rem -= b1;
    }
    if (rem > 0) {
      const b2 = Math.min(rem, 300000);
      tax += b2 * 0.11;
      rem -= b2;
    }
    if (rem > 0) {
      const b3 = Math.min(rem, 500000);
      tax += b3 * 0.15;
      rem -= b3;
    }
    if (rem > 0) {
      const b4 = Math.min(rem, 500000);
      tax += b4 * 0.19;
      rem -= b4;
    }
    if (rem > 0) {
      const b5 = Math.min(rem, 1600000);
      tax += b5 * 0.21;
      rem -= b5;
    }
    if (rem > 0) {
      tax += rem * 0.24;
    }

    // Minimum tax rule: 1% of Gross Annual Income if calculated tax is lower
    const minTax = grossAnnualIncome * 0.01;
    const finalAnnualTax = Math.max(tax, minTax);
    const monthlyTax = finalAnnualTax / 12;
    const takeHomePay = grossAnnualIncome - finalAnnualTax - pensionAmount - nhfAmount;
    const effectiveTaxRate = (finalAnnualTax / grossAnnualIncome) * 100;

    return {
      grossAnnualIncome,
      craRelief,
      pensionAmount,
      nhfAmount,
      taxableIncome,
      finalAnnualTax,
      monthlyTax,
      takeHomePay,
      effectiveTaxRate
    };
  };

  // Calculate Corporate Tax (CIT)
  const calculateCIT = () => {
    const netProfit = Math.max(0, grossProfit - allowableExpenses);
    
    // Nigerian Companies Income Tax (CIT) Tiers based on Annual Turnover:
    // Small Company (< ₦25M turnover) = 0% CIT
    // Medium Company (₦25M - ₦100M turnover) = 20% CIT
    // Large Company (> ₦100M turnover) = 30% CIT
    let citRate = 0;
    if (companyTurnover > 100000000) {
      citRate = 30;
    } else if (companyTurnover >= 25000000) {
      citRate = 20;
    } else {
      citRate = 0;
    }

    const citTax = (netProfit * citRate) / 100;
    // Tertiary Education Tax (EDT) = 3% of Assessable Profit
    const edtTax = (netProfit * 3) / 100;
    const totalTax = citTax + edtTax;
    const netRetainedProfit = netProfit - totalTax;

    return {
      companyTurnover,
      grossProfit,
      allowableExpenses,
      netProfit,
      citRate,
      citTax,
      edtTax,
      totalTax,
      netRetainedProfit
    };
  };

  const payeResult = calculatePAYE();
  const citResult = calculateCIT();

  const formatNGN = (val: number) => {
    return new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(val);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fade-in">
      <div 
        className="relative w-full max-w-4xl bg-[#030712] border border-blue-500/30 rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] blue-glow-sm"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="px-6 py-4 bg-[#0B1329] border-b border-white/10 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-xl bg-blue-600/20 border border-blue-500/30 text-blue-400">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-base font-bold text-white font-display flex items-center gap-2">
                Nigerian Income & Corporate Tax Simulator
                <span className="px-2 py-0.5 rounded-full bg-blue-500/20 text-blue-300 text-[10px] font-mono">
                  Live Engine
                </span>
              </h3>
              <p className="text-xs text-[#94A3B8]">
                Interactive engine developed by Kwamu Israel modeling current Nigerian Tax Act regulations.
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl text-[#94A3B8] hover:text-white hover:bg-white/10 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Tab Switcher */}
        <div className="px-6 py-3 bg-black/40 border-b border-white/10 flex items-center gap-3">
          <button
            onClick={() => setCalcType('personal')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              calcType === 'personal'
                ? 'bg-blue-600 text-white blue-glow-sm'
                : 'glass-panel text-[#94A3B8] hover:text-white'
            }`}
          >
            Personal PAYE Tax (Individual)
          </button>
          <button
            onClick={() => setCalcType('corporate')}
            className={`px-4 py-2 rounded-xl text-xs font-mono font-bold transition-all ${
              calcType === 'corporate'
                ? 'bg-blue-600 text-white blue-glow-sm'
                : 'glass-panel text-[#94A3B8] hover:text-white'
            }`}
          >
            Corporate CIT & EDT Tax (Business)
          </button>
        </div>

        {/* Modal Body */}
        <div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Left Controls Form */}
          <div className="md:col-span-6 space-y-5">
            {calcType === 'personal' ? (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8] flex items-center justify-between">
                    <span>Gross Annual Salary (NGN)</span>
                    <span className="text-white font-bold">{formatNGN(grossAnnualIncome)}</span>
                  </label>
                  <input
                    type="range"
                    min={1000000}
                    max={50000000}
                    step={500000}
                    value={grossAnnualIncome}
                    onChange={(e) => setGrossAnnualIncome(Number(e.target.value))}
                    className="w-full accent-blue-500 h-2 bg-white/10 rounded-lg cursor-pointer"
                  />
                  <div className="flex justify-between text-[10px] font-mono text-[#64748B]">
                    <span>₦1,000,000</span>
                    <span>₦50,000,000</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">Pension Contrib (%)</label>
                    <input
                      type="number"
                      value={pensionContrib}
                      onChange={(e) => setPensionContrib(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-blue-500"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label className="text-xs font-mono text-[#94A3B8]">NHF Contrib (%)</label>
                    <input
                      type="number"
                      value={nhfContrib}
                      onChange={(e) => setNhfContrib(Number(e.target.value))}
                      className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-blue-500"
                    />
                  </div>
                </div>

                <div className="p-3 rounded-xl bg-blue-600/10 border border-blue-500/20 text-xs text-[#94A3B8] space-y-1">
                  <div className="text-blue-300 font-bold font-mono flex items-center gap-1">
                    <Info className="w-3.5 h-3.5" /> Consolidated Relief Allowance (CRA)
                  </div>
                  <p className="text-[11px] leading-relaxed">
                    Auto-calculated at 20% of gross income + higher of ₦200,000 or 1% of gross.
                  </p>
                </div>
              </>
            ) : (
              <>
                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8] flex items-center justify-between">
                    <span>Annual Company Turnover</span>
                    <span className="text-white font-bold">{formatNGN(companyTurnover)}</span>
                  </label>
                  <input
                    type="range"
                    min={5000000}
                    max={250000000}
                    step={5000000}
                    value={companyTurnover}
                    onChange={(e) => setCompanyTurnover(Number(e.target.value))}
                    className="w-full accent-blue-500 h-2 bg-white/10 rounded-lg cursor-pointer"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8]">Gross Operating Profit</label>
                  <input
                    type="number"
                    value={grossProfit}
                    onChange={(e) => setGrossProfit(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-blue-500"
                  />
                </div>

                <div className="space-y-1.5">
                  <label className="text-xs font-mono text-[#94A3B8]">Allowable Tax Deductions</label>
                  <input
                    type="number"
                    value={allowableExpenses}
                    onChange={(e) => setAllowableExpenses(Number(e.target.value))}
                    className="w-full px-3 py-2 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono outline-none focus:border-blue-500"
                  />
                </div>
              </>
            )}
          </div>

          {/* Right Summary Output Card */}
          <div className="md:col-span-6 rounded-2xl glass-panel bg-[#0B1329] border border-blue-500/30 p-5 flex flex-col justify-between space-y-4">
            {calcType === 'personal' ? (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-[#94A3B8]">Tax Breakdown Summary</span>
                  <span className="text-xs font-mono text-green-400 font-bold">
                    Effective Rate: {payeResult.effectiveTaxRate.toFixed(2)}%
                  </span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Gross Annual Salary:</span>
                    <span className="text-white font-bold">{formatNGN(payeResult.grossAnnualIncome)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Total Tax Reliefs & Exemptions:</span>
                    <span className="text-blue-400">{formatNGN(payeResult.craRelief + payeResult.pensionAmount + payeResult.nhfAmount)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Net Taxable Income:</span>
                    <span className="text-white">{formatNGN(payeResult.taxableIncome)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Annual Tax Payable (PAYE):</span>
                    <span className="text-red-400 font-bold">{formatNGN(payeResult.finalAnnualTax)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Monthly Tax Deduction:</span>
                    <span className="text-amber-400 font-bold">{formatNGN(payeResult.monthlyTax)}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-green-500/10 border border-green-500/20 text-center space-y-1">
                  <span className="text-[11px] font-mono text-green-400 block">Annual Net Take-Home Salary</span>
                  <span className="text-2xl font-bold font-display text-white">{formatNGN(payeResult.takeHomePay)}</span>
                  <span className="text-[10px] font-mono text-[#94A3B8] block">({formatNGN(payeResult.takeHomePay / 12)} / month)</span>
                </div>
              </div>
            ) : (
              <div className="space-y-4">
                <div className="flex items-center justify-between border-b border-white/10 pb-3">
                  <span className="text-xs font-mono text-[#94A3B8]">Corporate Tax Liability</span>
                  <span className="text-xs font-mono text-blue-400 font-bold">
                    CIT Tier: {citResult.citRate}%
                  </span>
                </div>

                <div className="space-y-2 font-mono text-xs">
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Assessable Profit:</span>
                    <span className="text-white font-bold">{formatNGN(citResult.netProfit)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Companies Income Tax ({citResult.citRate}%):</span>
                    <span className="text-amber-400">{formatNGN(citResult.citTax)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Tertiary Education Tax (3% EDT):</span>
                    <span className="text-amber-400">{formatNGN(citResult.edtTax)}</span>
                  </div>
                  <div className="flex justify-between py-1 border-b border-white/5 text-[#94A3B8]">
                    <span>Total Tax Liability:</span>
                    <span className="text-red-400 font-bold">{formatNGN(citResult.totalTax)}</span>
                  </div>
                </div>

                <div className="p-4 rounded-xl bg-blue-500/10 border border-blue-500/20 text-center space-y-1">
                  <span className="text-[11px] font-mono text-blue-300 block">Net Retained Corporate Profit</span>
                  <span className="text-2xl font-bold font-display text-white">{formatNGN(citResult.netRetainedProfit)}</span>
                </div>
              </div>
            )}

            <div className="pt-3 border-t border-white/10 flex items-center justify-between">
              <span className="text-[10px] font-mono text-[#64748B]">Built with TypeScript & Math Engine</span>
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-mono text-xs transition-all"
              >
                Close Calculator
              </button>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};
