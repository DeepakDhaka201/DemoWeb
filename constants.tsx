import React from 'react';
import type { Winner, GameRate, Game, FaqItem } from './types';

// --- ICONS ---
export const PhoneIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>;
export const WhatsAppIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.886-.001 2.267.651 4.383 1.826 6.265l-1.034 3.777 3.91-1.041zM11.892 8.074c-.136 0-.273.007-.405.021-.132.012-.266.023-.401.037-.621.05-1.161.217-1.606.471-.433.248-.823.573-1.178.963-.369.405-.693.858-.962 1.352-.267.49-.499.985-.688 1.491-.182.49-.31.954-.38 1.383-.072.43-.102.833-.098 1.213.005.38.056.744.152 1.089.096.345.24.694.428 1.034.188.34.422.67.703.98.281.31.596.589.94.832.344.243.71.45 1.09.615.38.165.772.292 1.173.377.401.085.804.132 1.21.134.405.002.803-.039 1.18-.121.377-.082.733-.205 1.066-.369.333-.164.636-.369.902-.612.267-.245.494-.525.679-.834.185-.31.328-.646.426-.999.098-.353.15-.712.152-1.071.002-.36-.04-.71-.123-1.041-.084-.33-.209-.646-.375-.94-.166-.295-.366-.558-.596-.78-.23-.222-.485-.407-.761-.555-.276-.148-.568-.26-.873-.334-.305-.075-.615-.113-.929-.115z"/></svg>;
export const TelegramIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className={className}><path d="M9.78 18.65l.28-4.23l7.68-6.92c.34-.31-.07-.46-.52-.19L7.74 13.3L3.64 12c-.88-.25-.89-.86.2-1.3l15.97-6.16c.73-.33 1.43.18 1.15 1.3l-2.72 12.57c-.28 1.1-.86 1.32-1.7.82l-4.76-3.51l-2.24 2.15c-.24.24-.45.46-.8.46l.32-4.78z"/></svg>;
export const TrophyIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"/><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"/><path d="M4 22h16"/><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"/><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"/><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"/></svg>;
export const GamepadIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><line x1="6" y1="12" x2="10" y2="12"/><line x1="8" y1="10" x2="8" y2="14"/><line x1="15" y1="13" x2="15.01" y2="13"/><line x1="18" y1="11" x2="18.01" y2="11"/><path d="M19 2a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h14z"/></svg>;
export const ChartIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><path d="M3 3v18h18"/><path d="m19 9-5 5-4-4-3 3"/></svg>;
export const ClockIcon: React.FC<{className?: string}> = ({className}) => <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>;
export const BeGambleAwareIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} viewBox="0 0 135 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M1.37.5h5.5v23h-5.5v-23ZM10.57.5h5.5v23h-5.5v-23ZM24.27,23.5h-5.5L13.27.5h5.5l5.5,23ZM41.47,23.5c-4.9,0-8.2-3.3-8.2-8.3V.5h5.5v14.7c0,2.4,1.4,4.2,3.3,4.2s3.3-1.8,3.3-4.2V.5h5.5v14.7c0,5-3.3,8.3-8.9,8.3ZM57.27,1.8c-1,0-1.7.7-1.7,1.7v12.3h-5.5V3.5c0-1.7-1.4-3-3-3s-3,1.3-3,3v13.3c0,3.8,3.1,6.7,6.8,6.7h5.2c3.7,0,6.8-2.9,6.8-6.7V3.5c0-1-.8-1.7-1.8-1.7s-1.8.7-1.8,1.7v10.6h-5.3V3.5c0-1-.7-1.7-1.7-1.7ZM79.67,23.5l-8.1-11.2,8.1-11.8h6.2l-5,7.2-2.1,3,2.1,3,5,7.8h-6.2ZM88.77,23.5V.5h11.8c5.1,0,8.4,3.1,8.4,7.8s-3.3,7.8-8.4,7.8h-6.3v7.4h-5.5Zm5.5-10.1h5.8c2.1,0,3.3-1.6,3.3-2.9s-1.2-2.9-3.3-2.9h-5.8v5.8ZM134.17,23.5l-8.1-11.2,8.1-11.8h-6.2l-5,7.2-2.1,3,2.1,3,5,7.8h6.2Z" /></svg>;
export const GamblingTherapyIcon: React.FC<{className?: string}> = ({className}) => <svg className={className} viewBox="0 0 109 20" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" clipRule="evenodd" d="M12.6,19.39a1.14,1.14,0,0,1-1-.44L0,1.39,1.25.44.9,0,2.14.9,12.7,17.44a1.2,1.2,0,0,1,.13,1.31,1.13,1.13,0,0,1-1.14.64ZM10.45,19.39a1.14,1.14,0,0,1-1-.44L-.75,1.39l1.25-1L-.85,0l1.25.9,10.6,16.55a1.2,1.2,0,0,1,.13,1.31,1.13,1.13,0,0,1-1.13.64ZM23.38,12a7.6,7.6,0,0,1-7.53,7.3A7.47,7.47,0,0,1,8.6,12.18a7.53,7.53,0,1,1,14.78-.22Zm-2.31,0a5.21,5.21,0,1,0-9.85,2,5.1,5.1,0,0,0,4.64,3,5.2,5.2,0,0,0,5.21-5ZM39,11.87a7.6,7.6,0,0,1-7.53,7.3A7.47,7.47,0,0,1,24.23,12,7.53,7.53,0,1,1,39,11.87Zm-2.31,0a5.21,5.21,0,0,0-5.22-5,5.21,5.21,0,0,0-5.22,5,5.1,5.1,0,0,0,4.65,5.05,5.2,5.2,0,0,0,5.21-5ZM45.62,19.14H43.31V.88h2.31ZM59.4,12a7.6,7.6,0,0,1-7.53,7.3A7.47,7.47,0,0,1,44.6,12.18a7.53,7.53,0,1,1,14.8-.22Zm-2.31,0a5.21,5.21,0,1,0-9.85,2,5.1,5.1,0,0,0,4.64,3,5.2,5.2,0,0,0,5.21-5ZM63.29,19.14V.88h8.54a7.41,7.41,0,0,1,5.48,2A7,7,0,0,1,80,10a7,7,0,0,1-2.69,7.1,7.41,7.41,0,0,1-5.48,2Zm2.31-2.15h6.23A5.13,5.13,0,0,0,76.4,15a4.84,4.84,0,0,0,1.5-3.83,4.84,4.84,0,0,0-1.5-3.83,5.13,5.13,0,0,0-4.57-2.14H65.6ZM92.1,12a7.6,7.6,0,0,1-7.53,7.3A7.47,7.47,0,0,1,77.31,12.18a7.53,7.53,0,1,1,14.79-.22Zm-2.31,0a5.21,5.21,0,0,0-5.22-5,5.21,5.21,0,0,0-5.22,5,5.1,5.1,0,0,0,4.65,5.05,5.2,5.2,0,0,0,5.21-5Zm16.09.88-3.41,8.06h-2.5l6.09-18.2h2.24l6.16,18.2h-2.5l-3.41-8.06-1.33-3.83h-.07Z" /></svg>;

// --- DATA ---

export const WINNERS: Winner[] = [
  { name: 'Priya', amount: '₹35,000' },
  { name: 'Himanshu', amount: '₹51,000' },
  { name: 'Garima', amount: '₹25,000' },
  { name: 'Yash', amount: '₹45,200' },
  { name: 'Rajesh', amount: '₹67,500' },
  { name: 'Anita', amount: '₹42,800' },
  { name: 'Vikram', amount: '₹38,900' },
  { name: 'Sunita', amount: '₹55,300' },
  { name: 'Amit', amount: '₹29,700' },
  { name: 'Kavya', amount: '₹73,200' },
  { name: 'Rohit', amount: '₹41,600' },
  { name: 'Meera', amount: '₹58,400' },
];

// API Configuration
export const API_BASE_URL = 'https://kalyan.samrat-satta.com';
export const WEB_BASE_URL = 'https://kalyan.samrat-satta.com';

// Specific URLs for config and download
export const CONFIG_API_BASE_URL = 'https://samrat-satta.com';
export const DOWNLOAD_BASE_URL = 'https://samrat-satta.com';

// API Functions
export const fetchGameRates = async (): Promise<GameRate[]> => {
  try {
    const response = await fetch(`${API_BASE_URL}/game_rate`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch game rates');
    }

    const data = await response.json();

    // Transform API response to match our UI format
    const rates = data.rates?.THREE_DIGIT || {};

    const gameRates: GameRate[] = [
      { title: 'Single Digit', rate: `1 RS KA ${Math.round(rates.SINGLE || 9.5)}` },
      { title: 'Jodi Digit', rate: `1 RS KA ${Math.round(rates.JODI || 95)}` },
      { title: 'Single Pana', rate: `1 RS KA ${Math.round(rates.SP || 140)}` },
      { title: 'Double Pana', rate: `1 RS KA ${Math.round(rates.DP || 280)}` },
      { title: 'Triple Pana', rate: `1 RS KA ${Math.round(rates.TP || 600)}` },
      { title: 'Half Sangam', rate: `1 RS KA ${Math.round(rates.HALF_SANGAM || 1400)}` },
      { title: 'Full Sangam', rate: `1 RS KA ${Math.round(rates.FULL_SANGAM || 15000)}` },
      { title: 'Haruf', rate: `1 RS KA ${Math.round(rates.HARF || 9.5)}` },
    ];

    return gameRates;
  } catch (error) {
    console.error('Error fetching game rates:', error);
    // Return fallback data if API fails
    return [
      { title: 'Single Digit', rate: '1 RS KA 10' },
      { title: 'Jodi Digit', rate: '1 RS KA 95' },
      { title: 'Single Pana', rate: '1 RS KA 140' },
      { title: 'Double Pana', rate: '1 RS KA 280' },
      { title: 'Triple Pana', rate: '1 RS KA 600' },
      { title: 'Half Sangam', rate: '1 RS KA 1400' },
      { title: 'Full Sangam', rate: '1 RS KA 15000' },
      { title: 'Haruf', rate: '1 RS KA 10' },
    ];
  }
};

// Live Markets API
export const fetchLiveMarkets = async () => {
  try {
    const response = await fetch(`${API_BASE_URL}/get_markets?include_results=true`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Failed to fetch live markets');
    }

    const data = await response.json();

    if (data.success && data.clubs) {
      return {
        success: true,
        clubs: data.clubs
      };
    }

    throw new Error('Invalid API response format');
  } catch (error) {
    console.error('Error fetching live markets:', error);
    return {
      success: false,
      error: error.message,
      clubs: {}
    };
  }
};

// Generate chart URL for a market
export const getChartUrl = (marketId: number, marketName: string) => {
  return `${WEB_BASE_URL}/get_charts?market_id=${marketId}&market_name=${encodeURIComponent(marketName)}`;
};

// Fetch app configuration (APK link, version, contact details)
export const fetchAppConfig = async () => {
  try {
    const response = await fetch(`${CONFIG_API_BASE_URL}/get_config`);
    const data = await response.json();
    return {
      success: data.success === "1",
      version: data.latest_version,
      downloadLink: data.update_link,
      updateLog: data.update_log,
      phoneNumber: data.phone_number,
      whatsappLink: data.whatsapp_link,
      telegramLink: data.telegram_link
    };
  } catch (error) {
    console.error('Error fetching app config:', error);
    throw error;
  }
};

// Transform market data for UI display
export const transformMarketForUI = (market: any) => {
  // Determine status based on betting sessions
  let status = 'closed';
  let statusColor = '#ef4444'; // red

  if (market.isOpenSessionOn || market.isCloseSessionOn) {
    status = 'open';
    statusColor = '#22c55e'; // green
  }

  // Format numbers for display
  let numbers = '***-**-***';
  if (market.type === 'TWO_DIGIT') {
    // For TWO_DIGIT: show leftNumber - rightNumber
    const left = market.leftNumber || '**';
    const right = market.rightNumber || '**';
    numbers = `${left} - ${right}`;
  } else {
    // For THREE_DIGIT: show leftNumber - midNumber - rightNumber
    const left = market.leftNumber || '***';
    const mid = market.midNumber || '**';
    const right = market.rightNumber || '***';
    numbers = `${left} - ${mid} - ${right}`;
  }

  return {
    id: market.marketId,
    name: market.name,
    numbers: numbers,
    status: status,
    statusColor: statusColor,
    openTime: market.bidStartTime,
    closeTime: market.closeBidEndTime,
    hasVideo: false, // Can be enhanced later
    isActive: market.isOpenSessionOn || market.isCloseSessionOn,
    type: market.type,
    infoText: market.infoText || 'Betting is closed for today'
  };
};

// Keep static data as fallback
export const GAME_RATES: GameRate[] = [
  { title: 'Single Digit', rate: '1 RS KA 10' },
  { title: 'Jodi Digit', rate: '1 RS KA 95' },
  { title: 'Single Pana', rate: '1 RS KA 140' },
  { title: 'Double Pana', rate: '1 RS KA 280' },
  { title: 'Triple Pana', rate: '1 RS KA 600' },
  { title: 'Half Sangam', rate: '1 RS KA 1400' },
  { title: 'Full Sangam', rate: '1 RS KA 15000' },
  { title: 'Haruf', rate: '1 RS KA 10' },
];

export const AVAILABLE_GAMES: Game[] = [
    { name: "INDRA MORNING", numbers: "149-46-349", status: "Close for today", statusColor: "text-red-500", openTime: "09:10 AM", closeTime: "10:10 AM", hasVideo: true },
    { name: "MAYA MORNING", numbers: "379-94-167", status: "Close for today", statusColor: "text-red-500", openTime: "09:40 AM", closeTime: "10:40 AM", hasVideo: false },
    { name: "SRIDEVI", numbers: "***-**-***", status: "Betting is running for close", statusColor: "text-green-500", openTime: "11:31 AM", closeTime: "12:30 PM", hasVideo: true },
    { name: "MAYA DAY", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "12:50 PM", closeTime: "01:50 PM", hasVideo: false },
    { name: "TIME BAZAR", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "01:20 PM", closeTime: "02:20 PM", hasVideo: true },
    { name: "MADHUR DAY", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "01:20 PM", closeTime: "03:05 PM", hasVideo: false },
    { name: "KALYAN", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "04:55 PM", closeTime: "06:55 PM", hasVideo: false },
    { name: "SRIDEVI NIGHT", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "07:15 PM", closeTime: "08:15 PM", hasVideo: false },
    { name: "MADHUR NIGHT", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "08:20 PM", closeTime: "10:20 PM", hasVideo: false },
    { name: "KALYAN NIGHT", numbers: "***-**-***", status: "Betting is running for open", statusColor: "text-green-500", openTime: "09:28 PM", closeTime: "11:28 PM", hasVideo: false },
];

export const FAQ_DATA: FaqItem[] = [
  {
    question: "What is Samrat777 ?",
    answer: "Samrat777 is a premier online platform for various games of chance, offering a wide range of game types and competitive rates in a secure and fair environment.",
  },
  {
    question: "What games are available on Samrat777 ?",
    answer: "We offer a variety of games including Single Digit, Jodi Digit, Single Pana, Double Pana, Triple Pana, Half Sangam, and Full Sangam.",
  },
  {
    question: "Does Samrat777 have a License ?",
    answer: "Yes, our website is operated by Samrat777 International, a company established under the law of Isle of Man, and holds a gaming sublicense issued by Isle of Man e-Gaming.",
  },
  {
    question: "What is the minimum Deposit and Withdrawal Amount ?",
    answer: "The minimum deposit and withdrawal amounts can vary. Please check the 'How To Play' section or contact our customer support for the most up-to-date information.",
  },
  {
    question: "Why choose Samrat777 Among Other Providers ?",
    answer: "Samrat777 stands for trust, confidence, and a superior user experience. We offer the best game rates, prompt customer service, and a secure platform for all our players.",
  },
];