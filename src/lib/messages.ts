export default {
  activeSensors: 'دستگاه‌های فعال',
  device: 'دستگاه',
  home: 'خانه',
  ip: 'آی‌پی سرور',
  normal: 'عادی',
  password: 'گذرواژه',
  reception: 'پذیرایی',
  rooms: 'اتاق‌ها',
  roomType: (type: string) => {
    switch (type) {
      case 'kitchen':
        return 'آشپزخانه';
      case 'bedRoom':
        return 'اتاق خواب';
      case 'saloon':
        return 'سالن';
      case 'bath':
        return 'حمام';
      default:
        return 'اتاق';
    }
  },
  save: 'ذخیره',
  settings: 'تنظیمات',
  serverName: 'نام سرور',
  sleep: 'خواب',
  status: 'وضعیت',
  temperature: 'دمای جاری',
  travel: 'سفر',
  userName: 'نام کاربری',
  without: 'بدون',
};
