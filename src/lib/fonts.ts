import localFont from 'next/font/local';

// Menggunakan ClashDisplay-Bold.otf karena desainmu butuh heading tebal
export const clashDisplay = localFont({
  src: '../../public/fonts/ClashDisplay-Bold.otf', 
  variable: '--font-clash',
  display: 'swap',
  // weight: '700' tidak perlu ditulis lagi karena filenya sudah versi Bold
});

// Menggunakan nama file yang sesuai dengan screenshot (.ttf)
export const monaSans = localFont({
  src: '../../public/fonts/MonaSans-VariableFont_wdth,wght.ttf',
  variable: '--font-mona',
  display: 'swap',
  style: 'normal',
});