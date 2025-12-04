import { Product, Category } from '../types';

export const products: Product[] = [
  // Electronics
  { id: 1, name: '🎧 Wireless Headphones', price: 79.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop', description: '🎵 Premium sound quality with noise cancellation' },
  { id: 2, name: '⌚ Smart Watch', price: 199.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop', description: '💪 Track your fitness goals & health' },
  { id: 3, name: '📱 Smartphone', price: 699.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=300&h=300&fit=crop', description: '📸 Latest flagship with amazing camera' },
  { id: 4, name: '💻 Laptop', price: 1299.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop', description: '⚡ Powerful performance for work & play' },
  { id: 5, name: '📷 Digital Camera', price: 549.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1526170375885-4d8ecf77b99f?w=300&h=300&fit=crop', description: '📸 Professional quality photos' },
  { id: 6, name: '🎮 Gaming Console', price: 499.99, category: 'Electronics', image: 'https://images.unsplash.com/photo-1486401899868-0e435ed85128?w=300&h=300&fit=crop', description: '🕹️ Next-gen gaming experience' },
  
  // Accessories
  { id: 7, name: '🎒 Laptop Backpack', price: 49.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=300&h=300&fit=crop', description: '✨ Durable and spacious design' },
  { id: 8, name: '🔌 USB-C Cable', price: 12.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1583863788434-e58a36330cf0?w=300&h=300&fit=crop', description: '⚡ Fast charging & data transfer' },
  { id: 9, name: '📱 Phone Case', price: 24.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1601784551446-20c9e07cdbdb?w=300&h=300&fit=crop', description: '🛡️ Protect your device in style' },
  { id: 10, name: '🔋 Power Bank', price: 39.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1609091839311-d5365f9ff1c5?w=300&h=300&fit=crop', description: '⚡ 20000mAh fast charging' },
  { id: 11, name: '🎧 Earbuds Case', price: 14.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1606841837239-c5a1a4a07af7?w=300&h=300&fit=crop', description: '🛡️ Protective silicone case' },
  { id: 12, name: '📱 Screen Protector', price: 9.99, category: 'Accessories', image: 'https://images.unsplash.com/photo-1625948515291-69613efd103f?w=300&h=300&fit=crop', description: '💎 Tempered glass protection' },
  
  // Audio
  { id: 13, name: '🔊 Bluetooth Speaker', price: 59.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=300&h=300&fit=crop', description: '🎶 Portable audio experience' },
  { id: 14, name: '🎤 USB Microphone', price: 99.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1590602847861-f357a9332bbc?w=300&h=300&fit=crop', description: '🎙️ Studio quality recording' },
  { id: 15, name: '🎵 Soundbar', price: 179.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1545454675-3531b543be5d?w=300&h=300&fit=crop', description: '🔊 Immersive home theater sound' },
  { id: 16, name: '🎧 Gaming Headset', price: 89.99, category: 'Audio', image: 'https://images.unsplash.com/photo-1599669454699-248893623440?w=300&h=300&fit=crop', description: '🎮 7.1 surround sound' },
  
  // Computer Peripherals
  { id: 17, name: '💻 Wireless Mouse', price: 34.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=300&h=300&fit=crop', description: '🖱️ Ergonomic design for comfort' },
  { id: 18, name: '⌨️ Mechanical Keyboard', price: 129.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1587829741301-dc798b83add3?w=300&h=300&fit=crop', description: '✍️ RGB backlit gaming keyboard' },
  { id: 19, name: '📷 Webcam HD', price: 89.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1585792180666-f7347c490ee2?w=300&h=300&fit=crop', description: '🎥 Crystal clear video calls' },
  { id: 20, name: '🖥️ Monitor Stand', price: 44.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=300&h=300&fit=crop', description: '📐 Adjustable height & angle' },
  { id: 21, name: '🎨 Graphics Tablet', price: 149.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1612198188060-c7c2a3b66eae?w=300&h=300&fit=crop', description: '✏️ Digital art & design tool' },
  { id: 22, name: '🖨️ Wireless Printer', price: 199.99, category: 'Computer', image: 'https://images.unsplash.com/photo-1612815154858-60aa4c59eaa6?w=300&h=300&fit=crop', description: '📄 Print, scan & copy' },
  
  // Gaming
  { id: 23, name: '🎮 Gaming Controller', price: 69.99, category: 'Gaming', image: 'https://images.unsplash.com/photo-1592840496694-26d035b52b48?w=300&h=300&fit=crop', description: '🕹️ Wireless gaming experience' },
  { id: 24, name: '🎯 Gaming Mouse', price: 79.99, category: 'Gaming', image: 'https://images.unsplash.com/photo-1563297007-0686b7003af7?w=300&h=300&fit=crop', description: '⚡ High precision RGB mouse' },
  { id: 25, name: '🪑 Gaming Chair', price: 299.99, category: 'Gaming', image: 'https://images.unsplash.com/photo-1598550476439-6847785fcea6?w=300&h=300&fit=crop', description: '💺 Ergonomic comfort for long sessions' },
  { id: 26, name: '🎮 VR Headset', price: 399.99, category: 'Gaming', image: 'https://images.unsplash.com/photo-1622979135225-d2ba269cf1ac?w=300&h=300&fit=crop', description: '🥽 Immersive virtual reality' },
  
  // Smart Home
  { id: 27, name: '💡 Smart LED Bulb', price: 19.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=300&h=300&fit=crop', description: '🌈 16 million colors & voice control' },
  { id: 28, name: '🌡️ Smart Thermostat', price: 179.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=300&h=300&fit=crop', description: '🏠 Energy saving automation' },
  { id: 29, name: '🔔 Smart Doorbell', price: 149.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop', description: '📹 HD video & two-way audio' },
  { id: 30, name: '🔌 Smart Plug', price: 24.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', description: '⚡ Control devices remotely' },
  { id: 31, name: '🌡️ Smart Humidifier', price: 79.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop', description: '💧 Control humidity levels' },
  { id: 32, name: '🔔 Window Sensor', price: 34.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop', description: '🚪 Monitor doors & windows' },
  { id: 33, name: '💡 Smart Ceiling Light', price: 89.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=300&h=300&fit=crop', description: '🌟 Voice controlled lighting' },
  { id: 34, name: '🔌 Smart Outlet', price: 29.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop', description: '⚡ Schedule power usage' },
  { id: 35, name: '📹 Baby Monitor', price: 119.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1557324232-b8917d3c3dcb?w=300&h=300&fit=crop', description: '👶 Watch over your baby' },
  { id: 36, name: '🚨 Smoke Detector', price: 49.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop', description: '🔥 Smart fire detection' },
  { id: 37, name: '💡 Smart Lamp', price: 59.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1550985616-10810253b84d?w=300&h=300&fit=crop', description: '🎨 Adjustable color & brightness' },
  { id: 38, name: '🔐 Garage Door Opener', price: 149.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1558002038-1055907df827?w=300&h=300&fit=crop', description: '🚗 Remote garage control' },
  { id: 39, name: '🌡️ Weather Station', price: 99.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1545259741-2ea3ebf61fa3?w=300&h=300&fit=crop', description: '🌦️ Monitor weather conditions' },
  { id: 40, name: '💨 Smart Fan', price: 69.99, category: 'Smart Home', image: 'https://images.unsplash.com/photo-1585771724684-38269d6639fd?w=300&h=300&fit=crop', description: '🌀 Voice controlled cooling' },
];

export const categories: Category[] = ['All', 'Electronics', 'Accessories', 'Audio', 'Computer', 'Gaming', 'Smart Home'];
