export interface Sucursal {
  city: string;
  prov: string;
  phone: string;
  phone2?: string;
  email?: string;
  hours: string;
  addr: string;
}

export const sucursales: Sucursal[] = [
  { city: 'Río Gallegos', prov: 'Santa Cruz', phone: '+54 9 2966 78-1474',
    hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
    addr: 'De la Madrid 1495 esq. Av. Balbín — Río Gallegos, Santa Cruz' },
  { city: 'Comodoro Rivadavia', prov: 'Chubut', phone: '+54 9 2975 04-6786',
    hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
    addr: 'Hipólito Yrigoyen 6281 — Ruta KM3, Comodoro Rivadavia, Chubut' },
  { city: 'Río Grande', prov: 'Tierra del Fuego', phone: '+54 9 2964 614034', phone2: '+54 9 2964 599070',
    hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
    addr: 'Av. San Martín 2955 — Río Grande, Tierra del Fuego' },
  { city: 'Puerto Madryn', prov: 'Chubut', phone: '+54 2966 63-8323',
    hours: 'Lun. a Vie: 08:00 a 13:00 y 14:00 a 17:00 / Sáb: 08:30 a 12:30',
    addr: 'Av. Gales 371 — Puerto Madryn, Chubut' },
  { city: 'Caleta Olivia', prov: 'Santa Cruz', phone: '+54 2975 385690', phone2: '+54 297 4838059',
    hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
    addr: 'Independencia 440 — Caleta Olivia, Santa Cruz' },
  { city: 'El Calafate', prov: 'Santa Cruz', phone: '+54 9 2902 41-5753', phone2: '+54 9 2902 489603',
    hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
    addr: 'Av. Libertador 2421, Local 2 — El Calafate, Santa Cruz' },
  { city: 'Perito Moreno', prov: 'Santa Cruz', phone: '+54 2975 415043',
    hours: 'Lun. a Vie: 09:00 a 18:00 / Sáb: 08:30 a 12:30',
    addr: 'Nacimiento 329 — Perito Moreno, Santa Cruz' },
];
