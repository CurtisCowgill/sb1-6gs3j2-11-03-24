// Add to existing types.ts
export interface Vehicle {
  id: string;
  type: string;
  make: string;
  model: string;
  year: number;
  vin: string;
  licensePlate: string;
  status: 'Available' | 'In Use' | 'Maintenance' | 'Out of Service';
  assignedTo?: string;
  mileage: number;
  fuelType: string;
  lastService: string;
  nextService: string;
  maintenanceHistory: MaintenanceRecord[];
  documents: Document[];
}

export interface Equipment {
  id: string;
  name: string;
  type: string;
  manufacturer: string;
  model: string;
  serialNumber: string;
  purchaseDate: string;
  status: 'Available' | 'In Use' | 'Maintenance' | 'Out of Service';
  assignedTo?: string;
  hoursUsed: number;
  lastService: string;
  nextService: string;
  maintenanceHistory: MaintenanceRecord[];
  documents: Document[];
}

export interface MaintenanceRecord {
  id: string;
  date: string;
  type: 'Scheduled' | 'Repair' | 'Inspection';
  description: string;
  cost: number;
  provider: string;
  notes?: string;
  documents?: Document[];
}

export interface Document {
  id: string;
  name: string;
  type: string;
  url: string;
  uploadDate: string;
  size: number;
}