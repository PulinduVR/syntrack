import express from 'express';

const routeList = [
    { id: '255', name: 'Kottawa-Mount Lavinia' },
    { id: '138', name: 'Kaduwela-Pettah' },
    { id: '190', name: 'Homagama-Kollupitiya' }
  ];

  const routePaths = {
    '255': [
      { lat: 6.8501, lng: 79.9732 },
      { lat: 6.8411, lng: 79.9603 },
      { lat: 6.8264, lng: 79.9201 },
      { lat: 6.8151, lng: 79.8652 },
    ],
    '138': [
      { lat: 6.9271, lng: 79.8612 },
      { lat: 6.9143, lng: 79.8724 },
      { lat: 6.9012, lng: 79.8843 },
      { lat: 6.8892, lng: 79.8951 },
    ],
    '190': [
      { lat: 6.8450, lng: 79.9301 },
      { lat: 6.8578, lng: 79.9102 },
      { lat: 6.8702, lng: 79.8803 },
      { lat: 6.8850, lng: 79.8500 },
    ]
  };


  export const getAllRoutes = (req,res) => {
    res.status(200).json({
      status: 'success',
      data: routeList
    });
  }

  export const getRouteById = (req,res) => {
    const routeId = req.params.id;
    const routePath = routePaths[routeId];

    if (!routePath) {
        return res.status(404).json({ message: 'Route not found' });
    }
    
      res.status(200).json({ route: routePath });
  }