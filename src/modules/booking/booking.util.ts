const formatBookingResponse = (booking) => {
  return {
    _id: booking._id,
    date: booking.date,
    startTime: booking.startTime,
    endTime: booking.endTime,
    user: {
      _id: booking.user._id,
      name: booking.user.name,
      email: booking.user.email,
      role: booking.user.role,
      phone: booking.user.phone,
      address: booking.user.address,
    },
    car: {
      _id: booking.car._id,
      name: booking.car.name,
      description: booking.car.description,
      color: booking.car.color,
      isElectric: booking.car.isElectric,
      features: booking.car.features,
      pricePerHour: booking.car.pricePerHour,
      status: booking.car.status,
      isDeleted: booking.car.isDeleted,
      createdAt: booking.car.createdAt,
      updatedAt: booking.car.updatedAt,
    },
    totalCost: booking.totalCost,
    createdAt: booking.createdAt,
    updatedAt: booking.updatedAt,
  };
};
