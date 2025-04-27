const busSchedules = [
    {
      routeNumber: "101",
      routeName: "Colombo - Negombo",
      departure: "Colombo Central",
      arrival: "Negombo Town",
      departureTime: "06:00",
      arrivalTime: "07:30",
      busNumber: "NC-1234",
      driver: "Kamal Perera",
      conductor: "Sunil Silva",
      frequency: "Every 30 min",
      status: "On Time",
      stops: [
        { stopName: "Peliyagoda", time: "06:15", distance: "10" },
        { stopName: "Ja-Ela", time: "06:45", distance: "25" }
      ]
    },
    {
      routeNumber: "155",
      routeName: "Kandy - Matale",
      departure: "Kandy Bus Stand",
      arrival: "Matale Town",
      departureTime: "08:00",
      arrivalTime: "09:00",
      busNumber: "KD-5678",
      driver: "Nimal Jayasuriya",
      conductor: "Rohan Wickrama",
      frequency: "Hourly",
      status: "Delayed",
      stops: [
        { stopName: "Katugastota", time: "08:20", distance: "15" },
        { stopName: "Alawathugoda", time: "08:40", distance: "30" }
      ]
    },
    {
      routeNumber: "98",
      routeName: "Galle - Matara",
      departure: "Galle Bus Stand",
      arrival: "Matara Bus Stand",
      departureTime: "07:30",
      arrivalTime: "08:30",
      busNumber: "GL-4321",
      driver: "Mahesh Fernando",
      conductor: "Anura Perera",
      frequency: "Every 45 min",
      status: "Cancelled",
      stops: [
        { stopName: "Weligama", time: "08:00", distance: "20" },
        { stopName: "Kamburugamuwa", time: "08:20", distance: "35" }
      ]
    }
  ];

export const getBusSchedules = async (req, res) => {
    res.status(200).json({
        status: 'success',
        data: busSchedules
    });
}

