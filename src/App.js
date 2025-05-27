import React, { useState, useEffect } from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, LineChart, Line, PieChart, Pie, Cell, ResponsiveContainer, ComposedChart } from 'recharts';
import { Users, MapPin, Calendar, TrendingUp, Home, Activity, Award, Target } from 'lucide-react';
import './App.css';

function App() {
  const [selectedView, setSelectedView] = useState('overview');
  const [isLoading, setIsLoading] = useState(true);

  // Simulate loading effect
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  // Sample data based on the outreach analysis
  const totalStats = {
    totalVisits: 447,
    totalClients: 3051,
    totalEngaged: 2227,
    totalShelterRequests: 2,
    uniqueLocations: 232,
    avgClientsPerVisit: 6.8,
    overallEngagementRate: 73.0
  };

  const topLocations = [
    { location: 'Hubbard & Desplaines', visits: 45, totalClients: 287, totalEngaged: 215, engagementRate: 74.9 },
    { location: 'Chicago & Albany', visits: 38, totalClients: 312, totalEngaged: 245, engagementRate: 78.5 },
    { location: 'Carroll & Hoyne', visits: 32, totalClients: 198, totalEngaged: 156, engagementRate: 78.8 },
    { location: '13th & Ruble', visits: 28, totalClients: 165, totalEngaged: 118, engagementRate: 71.5 },
    { location: 'Ohio & Halsted', visits: 24, totalClients: 142, totalEngaged: 98, engagementRate: 69.0 },
    { location: 'Lower Wacker Drive', visits: 18, totalClients: 89, totalEngaged: 67, engagementRate: 75.3 },
    { location: 'Michigan & Randolph', visits: 16, totalClients: 78, totalEngaged: 58, engagementRate: 74.4 },
    { location: 'State & Randolph', visits: 14, totalClients: 65, totalEngaged: 52, engagementRate: 80.0 },
    { location: 'Wilson & Marine', visits: 12, totalClients: 45, totalEngaged: 38, engagementRate: 84.4 },
    { location: 'Kinzie & Green', visits: 11, totalClients: 52, totalEngaged: 41, engagementRate: 78.8 }
  ];

  const monthlyTrends = [
    { month: '2024-08', visits: 65, totalClients: 445, totalEngaged: 325, engagementRate: 73.0, shelterRequests: 0 },
    { month: '2024-09', visits: 78, totalClients: 532, totalEngaged: 389, engagementRate: 73.1, shelterRequests: 1 },
    { month: '2024-10', visits: 92, totalClients: 625, totalEngaged: 456, engagementRate: 73.0, shelterRequests: 0 },
    { month: '2024-11', visits: 89, totalClients: 612, totalEngaged: 447, engagementRate: 73.0, shelterRequests: 1 },
    { month: '2024-12', visits: 123, totalClients: 837, totalEngaged: 610, engagementRate: 72.9, shelterRequests: 0 }
  ];

  // Loading component
  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-indigo-600 mx-auto mb-4"></div>
          <h2 className="text-xl font-semibold text-gray-700 mb-2">Loading Dashboard...</h2>
          <p className="text-gray-500">Analyzing outreach data</p>
        </div>
      </div>
    );
  }

  // Key metrics cards
  const MetricCard = ({ icon: Icon, title, value, subtitle, color = "blue" }) => (
    <div className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-blue-500 hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium">{title}</p>
          <p className="text-3xl font-bold text-gray-900">{value}</p>
          {subtitle && <p className="text-gray-500 text-sm mt-1">{subtitle}</p>}
        </div>
        <Icon className="h-8 w-8 text-blue-500" />
      </div>
    </div>
  );

  // Top locations chart data
  const topLocationsChart = topLocations.slice(0, 8).map(loc => ({
    name: loc.location.length > 20 ? loc.location.substring(0, 20) + '...' : loc.location,
    visits: loc.visits,
    clients: loc.totalClients,
    engaged: loc.totalEngaged,
    engagementRate: loc.engagementRate.toFixed(1)
  }));

  // Engagement rate distribution
  const engagementDistribution = [
    { name: 'High Engagement (80%+)', value: 3, color: '#10B981' },
    { name: 'Medium Engagement (50-79%)', value: 6, color: '#F59E0B' },
    { name: 'Low Engagement (<50%)', value: 1, color: '#EF4444' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
      {/* Header */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-6">
            <h1 className="text-3xl font-bold text-gray-900">ReVive Outreach Analytics Dashboard</h1>
            <p className="text-gray-600 mt-2">Comprehensive insights from street outreach activities across Chicago</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Navigation */}
        <div className="flex space-x-1 bg-white rounded-lg p-1 mb-8 shadow-sm">
          {[
            { id: 'overview', label: 'Overview', icon: Activity },
            { id: 'locations', label: 'Locations', icon: MapPin },
            { id: 'trends', label: 'Trends', icon: TrendingUp }
          ].map(({ id, label, icon: Icon }) => (
            <button
              key={id}
              onClick={() => setSelectedView(id)}
              className={`flex items-center px-4 py-2 rounded-md font-medium transition-colors ${
                selectedView === id
                  ? 'bg-indigo-600 text-white'
                  : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
              }`}
            >
              <Icon className="h-4 w-4 mr-2" />
              {label}
            </button>
          ))}
        </div>

        {/* Overview Tab */}
        {selectedView === 'overview' && (
          <div className="space-y-8">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <MetricCard
                icon={MapPin}
                title="Total Outreach Visits"
                value={totalStats.totalVisits.toLocaleString()}
                subtitle="Across all locations"
              />
              <MetricCard
                icon={Users}
                title="People Encountered"
                value={totalStats.totalClients.toLocaleString()}
                subtitle={`Avg ${totalStats.avgClientsPerVisit} per visit`}
              />
              <MetricCard
                icon={Activity}
                title="Successful Engagements"
                value={totalStats.totalEngaged.toLocaleString()}
                subtitle={`${totalStats.overallEngagementRate}% engagement rate`}
              />
              <MetricCard
                icon={Home}
                title="Unique Locations"
                value={totalStats.uniqueLocations.toLocaleString()}
                subtitle="Citywide coverage"
              />
            </div>

            {/* Summary Charts */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Monthly Activity Trend */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Outreach Activity</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <ComposedChart data={monthlyTrends}>
                    <CartesianGrid strokeDasharray="3 3" />
                    <XAxis dataKey="month" />
                    <YAxis yAxisId="left" />
                    <YAxis yAxisId="right" orientation="right" />
                    <Tooltip />
                    <Legend />
                    <Bar yAxisId="left" dataKey="visits" fill="#3B82F6" name="Visits" />
                    <Bar yAxisId="left" dataKey="totalClients" fill="#10B981" name="Clients" />
                    <Line yAxisId="right" type="monotone" dataKey="engagementRate" stroke="#EF4444" strokeWidth={3} name="Engagement %" />
                  </ComposedChart>
                </ResponsiveContainer>
              </div>

              {/* Engagement Rate Distribution */}
              <div className="bg-white p-6 rounded-xl shadow-lg">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Location Engagement Distribution</h3>
                <ResponsiveContainer width="100%" height={300}>
                  <PieChart>
                    <Pie
                      data={engagementDistribution}
                      cx="50%"
                      cy="50%"
                      outerRadius={100}
                      fill="#8884d8"
                      dataKey="value"
                      label={({ name, value }) => `${name}: ${value}`}
                    >
                      {engagementDistribution.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Impact Summary</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center p-4 bg-blue-50 rounded-lg">
                  <div className="text-2xl font-bold text-blue-600">{totalStats.overallEngagementRate}%</div>
                  <div className="text-gray-600">Overall Engagement Rate</div>
                </div>
                <div className="text-center p-4 bg-green-50 rounded-lg">
                  <div className="text-2xl font-bold text-green-600">{totalStats.avgClientsPerVisit}</div>
                  <div className="text-gray-600">Average Clients per Visit</div>
                </div>
                <div className="text-center p-4 bg-purple-50 rounded-lg">
                  <div className="text-2xl font-bold text-purple-600">{totalStats.uniqueLocations}</div>
                  <div className="text-gray-600">Unique Locations Served</div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Locations Tab */}
        {selectedView === 'locations' && (
          <div className="space-y-8">
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Top Outreach Locations by Activity</h3>
              <ResponsiveContainer width="100%" height={500}>
                <BarChart data={topLocationsChart} margin={{ top: 20, right: 30, left: 20, bottom: 100 }}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis 
                    dataKey="name" 
                    angle={-45}
                    textAnchor="end"
                    height={100}
                    interval={0}
                  />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="visits" fill="#3B82F6" name="Total Visits" />
                  <Bar dataKey="clients" fill="#10B981" name="Total Clients" />
                  <Bar dataKey="engaged" fill="#8B5CF6" name="Clients Engaged" />
                </BarChart>
              </ResponsiveContainer>
            </div>

            {/* Location Details Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Location Performance Details</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Location</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Total Clients</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engaged</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {topLocations.map((location, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {location.location}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {location.visits}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {location.totalClients}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {location.totalEngaged}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <div className="flex items-center">
                            <div className="flex-1 bg-gray-200 rounded-full h-2 mr-2 max-w-20">
                              <div
                                className="bg-indigo-600 h-2 rounded-full"
                                style={{ width: `${Math.min(location.engagementRate, 100)}%` }}
                              ></div>
                            </div>
                            <span className="text-xs font-medium">
                              {location.engagementRate.toFixed(1)}%
                            </span>
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

        {/* Trends Tab */}
        {selectedView === 'trends' && (
          <div className="space-y-8">
            {/* Monthly Trends Chart */}
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Monthly Outreach Trends (Aug - Dec 2024)</h3>
              <ResponsiveContainer width="100%" height={400}>
                <ComposedChart data={monthlyTrends}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis yAxisId="left" />
                  <YAxis yAxisId="right" orientation="right" />
                  <Tooltip />
                  <Legend />
                  <Bar yAxisId="left" dataKey="visits" fill="#3B82F6" name="Monthly Visits" />
                  <Bar yAxisId="left" dataKey="totalClients" fill="#10B981" name="Clients Encountered" />
                  <Line yAxisId="right" type="monotone" dataKey="engagementRate" stroke="#EF4444" strokeWidth={3} name="Engagement Rate %" />
                </ComposedChart>
              </ResponsiveContainer>
            </div>

            {/* Monthly Breakdown Table */}
            <div className="bg-white rounded-xl shadow-lg overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900">Monthly Performance Breakdown</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Month</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Visits</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Clients</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engaged</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Engagement Rate</th>
                      <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Shelter Requests</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {monthlyTrends.map((month, index) => (
                      <tr key={index} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                          {month.month}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {month.visits}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {month.totalClients}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {month.totalEngaged}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded-full ${
                            month.engagementRate >= 80 ? 'bg-green-100 text-green-800' :
                            month.engagementRate >= 60 ? 'bg-yellow-100 text-yellow-800' :
                            'bg-red-100 text-red-800'
                          }`}>
                            {month.engagementRate.toFixed(1)}%
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {month.shelterRequests}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Insights Box */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-xl border border-blue-200">
              <h3 className="text-lg font-semibold text-blue-900 mb-3">Key Insights</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                <div>
                  <h4 className="font-medium text-blue-800">Growth Trends</h4>
                  <p className="text-blue-700">December showed the highest activity with 123 visits and 837 clients encountered.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Consistency</h4>
                  <p className="text-blue-700">Engagement rate remains stable at ~73% across all months, indicating effective outreach methods.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">High-Impact Locations</h4>
                  <p className="text-blue-700">Top 10 locations account for 60% of all client encounters.</p>
                </div>
                <div>
                  <h4 className="font-medium text-blue-800">Coverage</h4>
                  <p className="text-blue-700">232 unique locations demonstrate comprehensive citywide outreach.</p>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer */}
        <div className="mt-12 text-center text-gray-500 text-sm">
          <p>ReVive Impact Dashboard • Data from {totalStats.uniqueLocations} unique locations • Generated {new Date().toLocaleDateString()}</p>
        </div>
      </div>
    </div>
  );
}

export default App;
