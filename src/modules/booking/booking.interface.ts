// Booking Type
export type TBooking = {
    date: Date;
    user: string; // ObjectId as string to reference the user model
    car: string;  // ObjectId as string to reference the car model
    startTime: string; // "HH:mm" 24-hour format
    endTime: string;   // "HH:mm" 24-hour format
    totalCost: number;
  };
  