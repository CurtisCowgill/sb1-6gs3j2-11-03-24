import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Plus, 
  Search, 
  Filter, 
  Download,
  Building2,
  DollarSign,
  Truck,
  Clock
} from 'lucide-react';
import { formatCurrency } from '../utils/format';

interface Vendor {
  id: string;
  name: string;
  type: string;
  contact: string;
  email: string;
  phone: string;
  status: 'Active' | 'Inactive';
  totalSpent: number;
  deliveriesCompleted: number;
  onTimeDelivery: number;
  lastDelivery: string;
}

const timeRanges = [
  { value: 'week', label: 'Week' },
  { value: 'month', label: 'Month' },
  { value: 'quarter', label: 'Quarter' },
  { value: 'year', label: 'Year' }
];

const mockVendors: Vendor[] = [
  {
    id: 'V001',
    name: 'ABC Concrete Supply',
    type: 'Concrete',
    contact: 'John Smith',
    email: 'john@abcconcrete.com',
    phone: '(555) 123-4567',
    status: 'Active',
    totalSpent: 250000,
    deliveriesCompleted: 150,
    onTimeDelivery: 95,
    lastDelivery: '2024-03-10'
  },
  {
    id: 'V002',
    name: 'XYZ Equipment',
    type: 'Equipment',
    contact: 'Jane Doe',
    email: 'jane@xyzequip.com',
    phone: '(555) 987-6543',
    status: 'Active',
    totalSpent: 180000,
    deliveriesCompleted: 85,
    onTimeDelivery: 92,
    lastDelivery: '2024-03-09'
  }
];

const Vendors: React.FC = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [vendors] = useState<Vendor[]>(mockVendors);
  const [timeRange, setTimeRange] = useState('month');

  const handleAddVendor = () => {
    navigate('/vendors/new');
  };

  const handleExport = () => {
    console.log('Exporting vendor data...');
  };

  // Calculate metrics
  const totalVendors = vendors.length;
  const activeVendors = vendors.filter(v => v.status === 'Active').length;
  const totalDeliveries = vendors.reduce((acc, v) => acc + v.deliveriesCompleted, 0);
  const avgOnTimeDelivery = vendors.reduce((acc, v) => acc + v.onTimeDelivery, 0) / vendors.length;

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-900">Vendors</h1>
        <div className="flex items-center space-x-4">
          <button
            onClick={handleExport}
            className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
          >
            <Download className="h-4 w-4 mr-2" />
            Export
          </button>
          <button
            onClick={handleAddVendor}
            className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
          >
            <Plus className="h-4 w-4 mr-2" />
            Add Vendor
          </button>
        </div>
      </div>

      {/* Time Range Filter */}
      <div className="flex justify-end">
        <div className="inline-flex rounded-md shadow-sm">
          {timeRanges.map(range => (
            <button
              key={range.value}
              onClick={() => setTimeRange(range.value)}
              className={`px-4 py-2 text-sm font-medium ${
                timeRange === range.value
                  ? 'bg-blue-600 text-white'
                  : 'bg-white text-gray-700 hover:bg-gray-50'
              } ${
                range.value === timeRanges[0].value
                  ? 'rounded-l-md'
                  : range.value === timeRanges[timeRanges.length - 1].value
                  ? 'rounded-r-md'
                  : ''
              } border border-gray-300`}
            >
              {range.label}
            </button>
          ))}
        </div>
      </div>

      {/* Metrics Cards */}
      <div className="grid grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Building2 className="h-8 w-8 text-blue-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Active Vendors</p>
              <p className="text-2xl font-semibold text-gray-900">{activeVendors}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <DollarSign className="h-8 w-8 text-green-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Spent</p>
              <p className="text-2xl font-semibold text-gray-900">
                {formatCurrency(vendors.reduce((acc, v) => acc + v.totalSpent, 0))}
              </p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Truck className="h-8 w-8 text-purple-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">Total Deliveries</p>
              <p className="text-2xl font-semibold text-gray-900">{totalDeliveries}</p>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center">
            <Clock className="h-8 w-8 text-orange-500" />
            <div className="ml-4">
              <p className="text-sm font-medium text-gray-500">On-Time Delivery</p>
              <p className="text-2xl font-semibold text-gray-900">
                {avgOnTimeDelivery.toFixed(1)}%
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white shadow rounded-lg">
        <div className="p-6">
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center max-w-md flex-1">
              <div className="relative flex-1">
                <input
                  type="text"
                  placeholder="Search vendors..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="block w-full rounded-md border-gray-300 shadow-sm focus:border-blue-500 focus:ring-blue-500 sm:text-sm pl-10"
                />
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-4 w-4 text-gray-400" />
                </div>
              </div>
              <button
                onClick={() => setShowFilters(!showFilters)}
                className="ml-4 p-2 border border-gray-300 rounded-md hover:bg-gray-50"
              >
                <Filter className="h-4 w-4 text-gray-500" />
              </button>
            </div>
          </div>

          {/* Vendor Table will go here */}
          <div className="text-center text-gray-500 py-8">
            Vendor table component will be implemented here
          </div>
        </div>
      </div>
    </div>
  );
};

export default Vendors;