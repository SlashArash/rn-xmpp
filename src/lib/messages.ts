export default {
  activeSensors: 'دستگاه‌های فعال',
  config: 'پیکربندی',
  cooling: 'سرمایش',
  device: 'دستگاه',
  devices: 'دستگاه‌ها',
  home: 'خانه',
  ipOfLocalServer: 'آی‌پی سرور محلی',
  normal: 'عادی',
  password: 'گذرواژه',
  power: 'روشنایی',
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
  speed: 'سرعت',
  status: 'وضعیت',
  temperature: 'دمای جاری',
  travel: 'سفر',
  userName: 'نام کاربری',
  without: 'بدون',
};
