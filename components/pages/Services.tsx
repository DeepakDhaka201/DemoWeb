import React, { useState, useEffect } from 'react';
import { GAME_RATES, fetchGameRates, fetchLiveMarkets, transformMarketForUI, getChartUrl } from '../../constants';
import type { GameRate } from '../../types';

// --- ICONS ---

// Specific icons tailored for each game rate type.
const SingleDigitIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M10 10l2 -2v8" /></svg>;
const JodiDigitIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M13 21l-3 -18" /><path d="M16 3h-10" /><path d="M16 21h-10" /><path d="M20 12l-11 0" /></svg>;
const SinglePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="12" r=".5" fill="currentColor"/></svg>;
const DoublePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="10" cy="10" r=".5" fill="currentColor"/><circle cx="14" cy="14" r=".5" fill="currentColor"/></svg>;
const TriplePanaIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><rect x="4" y="4" width="16" height="16" rx="2" /><circle cx="12" cy="8" r=".5" fill="currentColor"/><circle cx="9" cy="14" r=".5" fill="currentColor"/><circle cx="15" cy="14" r=".5" fill="currentColor"/></svg>;
const RedBracketsIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round" className="text-red-500"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M7 4h-4v16h4" /><path d="M17 4h4v16h-4" /></svg>;
const HalfSangamIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /><path d="M3 12a9 9 0 0 0 9 9v-18a9 9 0 0 0 -9 9z" fill="currentColor" /></svg>;
const FullSangamIcon = () => <svg width="32" height="32" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor" fill="currentColor" strokeLinecap="round" strokeLinejoin="round"><path stroke="none" d="M0 0h24v24H0z" fill="none"/><path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" /></svg>;

export const GamepadIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M19 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14z"/></svg>;

const rateIcons: { [key: string]: React.ReactElement } = {
  'Single Digit': <SingleDigitIcon />,
  'Jodi Digit': <JodiDigitIcon />,
  'Single Pana': <SinglePanaIcon />,
  'Double Pana': <DoublePanaIcon />,
  'Triple Pana': <TriplePanaIcon />,
  'Red Brackets': <RedBracketsIcon />,
  'Half Sangam Digits': <HalfSangamIcon />,
  'Full Sangam Digits': <FullSangamIcon />,
  // New mappings for API data
  'Half Sangam': <HalfSangamIcon />,
  'Full Sangam': <FullSangamIcon />,
  'Haruf': <SingleDigitIcon />,
};

const RateCard: React.FC<{ rate: GameRate }> = ({ rate }) => {
    const icon = rateIcons[rate.title] || <SingleDigitIcon />;

    return (
        <div className="group bg-white border border-gray-200 rounded-xl p-4 text-center hover:border-primary/50 hover:shadow-md transition-all duration-300">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-3 text-primary mx-auto group-hover:bg-primary group-hover:text-white transition-all duration-300">
                {icon}
            </div>
            <h3 className="text-sm font-semibold text-slate-800 mb-2">{rate.title}</h3>
            <p className="text-lg font-bold text-primary">{rate.rate}</p>
        </div>
    );
};

const GameRates: React.FC = () => {
  const [gameRates, setGameRates] = useState<GameRate[]>(GAME_RATES);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadGameRates = async () => {
      try {
        setLoading(true);
        setError(null);
        const liveRates = await fetchGameRates();
        setGameRates(liveRates);
      } catch (err) {
        console.error('Failed to load game rates:', err);
        setError('Failed to load live rates. Showing default rates.');
        // Keep using fallback data (GAME_RATES)
      } finally {
        setLoading(false);
      }
    };

    loadGameRates();
  }, []);

  return (
    <div className="relative overflow-hidden bg-white py-16 sm:py-24">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary/10 text-secondary py-2 px-6 rounded-full shadow-sm mb-4 font-semibold border border-secondary/20">
            Game Rates {loading && <span className="ml-2 text-xs">Loading...</span>}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            We Have The <span className="text-gradient">Best Game Rates</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600">
            Maximize your winnings with our competitive rates across all game types. More value, more fun.
          </p>
          {error && (
            <div className="mt-2 text-sm text-orange-600 bg-orange-50 border border-orange-200 rounded-lg px-4 py-2 inline-block">
              {error}
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
          {gameRates.map((rate: GameRate, index: number) => (
            <RateCard key={index} rate={rate} />
          ))}
        </div>
      </div>
    </div>
  );
};

// Live Markets Component
const LiveMarkets: React.FC = () => {
  const [marketsData, setMarketsData] = useState<any>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadLiveMarkets = async () => {
      try {
        setLoading(true);
        setError(null);
        const response = await fetchLiveMarkets();

        if (response.success) {
          setMarketsData(response.clubs);
        } else {
          setError(response.error || 'Failed to load live markets');
          // Set mock data for testing when API is not available
          // setMarketsData({
          //   "SATTA KING": {
          //     "club_id": 1,
          //     "club_name": "SATTA KING",
          //     "club_type": "TWO_DIGIT",
          //     "markets": [
          //       {
          //         "marketId": 3,
          //         "name": "DISAWER",
          //         "type": "TWO_DIGIT",
          //         "bidStartTime": "12:00 AM",
          //         "closeBidEndTime": "11:59 PM",
          //         "isOpenSessionOn": true,
          //         "isCloseSessionOn": false,
          //         "leftNumber": "45",
          //         "rightNumber": "67",
          //         "infoText": "Betting is open now"
          //       },
          //       {
          //         "marketId": 28,
          //         "name": "GALI",
          //         "type": "TWO_DIGIT",
          //         "bidStartTime": "12:00 AM",
          //         "closeBidEndTime": "11:59 PM",
          //         "isOpenSessionOn": false,
          //         "isCloseSessionOn": false,
          //         "leftNumber": "**",
          //         "rightNumber": "**",
          //         "infoText": "Betting is closed for today"
          //       }
          //     ]
          //   },
          //   "MATKA CLUB": {
          //     "club_id": 3,
          //     "club_name": "MATKA CLUB",
          //     "club_type": "THREE_DIGIT",
          //     "markets": [
          //       {
          //         "marketId": 18,
          //         "name": "KALYAN",
          //         "type": "THREE_DIGIT",
          //         "bidStartTime": "09:15 AM",
          //         "closeBidEndTime": "11:45 PM",
          //         "isOpenSessionOn": true,
          //         "isCloseSessionOn": true,
          //         "leftNumber": "456",
          //         "midNumber": "78",
          //         "rightNumber": "123",
          //         "infoText": "Betting is open now"
          //       },
          //       {
          //         "marketId": 5,
          //         "name": "MILAN MORNING",
          //         "type": "THREE_DIGIT",
          //         "bidStartTime": "09:30 AM",
          //         "closeBidEndTime": "10:30 AM",
          //         "isOpenSessionOn": false,
          //         "isCloseSessionOn": false,
          //         "leftNumber": "***",
          //         "midNumber": "**",
          //         "rightNumber": "***",
          //         "infoText": "Betting is closed for today"
          //       }
          //     ]
          //   }
          // });
        }
      } catch (err) {
        console.error('Failed to load live markets:', err);
        setError('Failed to load live markets. Please try again.');
      } finally {
        setLoading(false);
      }
    };

    loadLiveMarkets();

    // Refresh every 30 seconds
    const interval = setInterval(loadLiveMarkets, 30000);
    return () => clearInterval(interval);
  }, []);

  const renderMarketCard = (market: any) => {
    const transformedMarket = transformMarketForUI(market);

    return (
      <div key={transformedMarket.id} className="group relative bg-white border border-gray-200/80 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden hover:-translate-y-1">
        {/* Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-white via-gray-50/50 to-gray-100/30"></div>

        {/* Status Indicator Bar */}
        <div
          className="absolute top-0 left-0 right-0 h-1"
          style={{ backgroundColor: transformedMarket.statusColor }}
        ></div>

        <div className="relative p-5">
          {/* Header */}
          <div className="flex items-start justify-between mb-4">
            <div className="flex-1">
              <h3 className="font-bold text-slate-800 text-sm leading-tight mb-1">
                {transformedMarket.name}
              </h3>
              <div className="text-xs text-slate-500">
                {transformedMarket.type === 'TWO_DIGIT' ? '2 Digit' : '3 Digit'}
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span
                className="px-3 py-1 rounded-full text-xs font-bold text-white shadow-sm"
                style={{ backgroundColor: transformedMarket.statusColor }}
              >
                {transformedMarket.status === 'open' ? '● LIVE' : '○ CLOSED'}
              </span>
            </div>
          </div>

          {/* Numbers Display */}
          <div className="text-center mb-4">
            <div className="bg-gradient-to-r from-slate-50 to-gray-50 rounded-xl p-4 border border-gray-100">
              <div className="text-3xl font-black text-primary mb-2 tracking-wider font-mono">
                {transformedMarket.numbers}
              </div>
              <div className="text-xs font-medium text-slate-600 uppercase tracking-wide">
                {transformedMarket.numbers === '***-**-***' || transformedMarket.numbers.includes('**') ? 'Result Pending' : 'Latest Result'}
              </div>
            </div>
          </div>

          {/* Timing Info */}
          <div className="bg-slate-50/50 rounded-lg p-3 mb-3">
            <div className="flex items-center justify-center gap-2 text-xs text-slate-600">
              <svg className="w-3 h-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
              </svg>
              <span className="font-medium">
                {transformedMarket.openTime} - {transformedMarket.closeTime}
              </span>
            </div>
          </div>

          {/* Status Message */}
          <div className="text-center mb-4">
            <div className={`text-xs font-medium px-3 py-2 rounded-lg ${
              transformedMarket.status === 'open'
                ? 'bg-green-50 text-green-700 border border-green-200'
                : 'bg-gray-50 text-gray-600 border border-gray-200'
            }`}>
              {transformedMarket.infoText}
            </div>
          </div>

          {/* View Chart Button */}
          <div className="text-center">
            <button
              onClick={() => {
                const chartUrl = getChartUrl(transformedMarket.id, transformedMarket.name);
                console.log('Opening chart URL:', chartUrl);
                window.open(chartUrl, '_blank', 'noopener,noreferrer');
              }}
              className="w-full text-white font-semibold py-2.5 px-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 transform hover:scale-105 flex items-center justify-center gap-2 text-sm hover:brightness-110"
              style={{ background: 'linear-gradient(135deg, #F76320, #FF8A50)' }}
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
              </svg>
              View Chart
            </button>
          </div>
        </div>

        {/* Hover Effect Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
      </div>
    );
  };

  const renderClubSection = (clubName: string, clubData: any) => {
    if (!clubData.markets || clubData.markets.length === 0) return null;

    const activeMarkets = clubData.markets.filter((market: any) => {
      const transformed = transformMarketForUI(market);
      return transformed.status === 'open';
    }).length;

    return (
      <div key={clubName} className="mb-16">
        <div className="text-center mb-10">
          {/* Category Badge */}
          <div className="inline-flex items-center gap-3 bg-white text-slate-800 py-3 px-8 rounded-full shadow-lg mb-6 font-bold border-2 border-primary/20">
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
            <span className="text-sm tracking-wide uppercase">
              {clubData.club_type === 'TWO_DIGIT' ? '2 Digit Games' : '3 Digit Games'}
            </span>
            <div className="w-2 h-2 bg-primary rounded-full animate-pulse"></div>
          </div>

          {/* Club Name */}
          <h3 className="text-3xl font-black text-slate-900 mb-3 tracking-tight">
            {clubName}
          </h3>

          {/* Stats */}
          <div className="flex items-center justify-center gap-6 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-green-500 rounded-full"></div>
              <span className="text-slate-600">
                <span className="font-bold text-green-600">{activeMarkets}</span> Live Markets
              </span>
            </div>
            <div className="w-1 h-1 bg-slate-300 rounded-full"></div>
            <div className="flex items-center gap-2">
              <div className="w-3 h-3 bg-slate-400 rounded-full"></div>
              <span className="text-slate-600">
                <span className="font-bold text-slate-700">{clubData.markets.length}</span> Total Markets
              </span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-6">
          {clubData.markets.map((market: any) => renderMarketCard(market))}
        </div>
      </div>
    );
  };

  return (
    <div className="relative overflow-hidden bg-gray-50 pt-16 sm:pt-24 pb-8 sm:pb-12">
      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="text-center mb-12">
          <div className="inline-block bg-secondary/10 text-secondary py-2 px-6 rounded-full shadow-sm mb-4 font-semibold border border-secondary/20">
             Available Games {loading && <span className="ml-2 text-xs">Loading...</span>}
          </div>
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
            Multiple Game Types <span className="text-gradient">For You</span>
          </h2>
          <p className="max-w-2xl mx-auto mt-4 text-slate-600">
            Explore our wide selection of games, each with its own unique chart and timings.
          </p>
          {error && (
            <div className="mt-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-lg px-4 py-2 inline-block">
              {error}
            </div>
          )}
        </div>

        {loading ? (
          <div className="text-center py-12">
            <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
            <p className="mt-4 text-slate-600">Loading live markets...</p>
          </div>
        ) : (
          <div className="max-w-7xl mx-auto">
            {Object.entries(marketsData).map(([clubName, clubData]) =>
              renderClubSection(clubName, clubData)
            )}
          </div>
        )}
      </div>
    </div>
  );
};

const Services: React.FC = () => {
  return (
    <div id="services">
      <GameRates />
      <LiveMarkets />
    </div>
  );
};

export default Services;