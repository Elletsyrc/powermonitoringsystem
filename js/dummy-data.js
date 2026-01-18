window.meters = {
  "main": "Main Meter",
  "submeter_1": "CAS Bldg 1",
  "submeter_2": "CAS Bldg 2",
  "submeter_3": "CBPA Bldg 1",
  "submeter_4": "CBPA Bldg 2",
  "submeter_5": "CoEng Bldg 1",
  "submeter_6": "CoEng Bldg 2",
  "submeter_7": "CCMS Bldg",
  "submeter_8": "Covered Court",
  "submeter_9": "Student Activity Center",
  "submeter_10": "Gymnasium"
}

// I gave up trying to make dummy data for other views. Just use "hourly" for everything
// Dun sa gagawa ng Meters view, just multiply the hourlyConsumption by the ratio in powerDistributionRatio
// or you can use this method
window.getSubmeterConsumptionData = function(meterId) {
  return window.hourlyConsumption.map(row => ({
    ...row,
    "consumption": row.consumption * window.powerDistributionRatio.hourly.filter(row => row.id == meterId)[0].value
  }));
}

window.hours = [1744992000, 
  1744995600, 
  1744999200, 
  1745002800, 
  1745006400, 
  1745010000, 
  1745013600, 
  1745017200, 
  1745020800, 
  1745024400, 
  1745028000, 
  1745031600, 
  1745035200, 
  1745038800, 
  1745042400, 
  1745046000, 
  1745049600, 
  1745053200, 
  1745056800, 
  1745060400, 
  1745064000, 
  1745067600, 
  1745071200, 
  1745074800
];

window.hourlyConsumption = [
  { "timestamp": 1744992000, "consumption": 68.5 },
  { "timestamp": 1744995600, "consumption": 70.1 },
  { "timestamp": 1744999200, "consumption": 72.3 },
  { "timestamp": 1745002800, "consumption": 80.7 },
  { "timestamp": 1745006400, "consumption": 85.2 },
  { "timestamp": 1745010000, "consumption": 90.6 },
  { "timestamp": 1745013600, "consumption": 95.8 },
  { "timestamp": 1745017200, "consumption": 110.2 },
  { "timestamp": 1745020800, "consumption": 120.4 },
  { "timestamp": 1745024400, "consumption": 140.7 },
  { "timestamp": 1745028000, "consumption": 160.1 },
  { "timestamp": 1745031600, "consumption": 165.5 },
  { "timestamp": 1745035200, "consumption": 155.2 },
  { "timestamp": 1745038800, "consumption": 150.9 },
  { "timestamp": 1745042400, "consumption": 130.6 },
  { "timestamp": 1745046000, "consumption": 110.4 },
  { "timestamp": 1745049600, "consumption": 95.7 },
  { "timestamp": 1745053200, "consumption": 85.1 },
  { "timestamp": 1745056800, "consumption": 75.6 },
  { "timestamp": 1745060400, "consumption": 68.9 },
  { "timestamp": 1745064000, "consumption": 64.2 },
  { "timestamp": 1745067600, "consumption": 61.7 },
  { "timestamp": 1745071200, "consumption": 60.3 },
  { "timestamp": 1745074800, "consumption": 58.9 }
];

window.powerDistributionRatio = {
  "hourly": [
    { "id": "submeter_1",  "value": 0.07 },
    { "id": "submeter_2",  "value": 0.12 },
    { "id": "submeter_3",  "value": 0.09 },
    { "id": "submeter_4",  "value": 0.05 },
    { "id": "submeter_5",  "value": 0.10 },
    { "id": "submeter_6",  "value": 0.08 },
    { "id": "submeter_7",  "value": 0.11 },
    { "id": "submeter_8",  "value": 0.06 },
    { "id": "submeter_9",  "value": 0.14 },
    { "id": "submeter_10", "value": 0.18 }
  ]
};