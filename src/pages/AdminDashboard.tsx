import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { 
  DollarSign, 
  Users, 
  FileText, 
  TrendingUp, 
  Calendar,
  Mail,
  Phone,
  MapPin,
  LogOut,
  User,
  Heart
} from "lucide-react";

// Mock data for demonstration
const mockDonations = [
  { id: 1, name: "John Doe", amount: 5000, date: "2024-01-15", method: "Online" },
  { id: 2, name: "Jane Smith", amount: 2500, date: "2024-01-14", method: "In-person" },
  { id: 3, name: "Ahmed Khan", amount: 10000, date: "2024-01-13", method: "Online Transfer" },
  { id: 4, name: "Sarah Ali", amount: 3000, date: "2024-01-12", method: "Online" },
  { id: 5, name: "Michael Brown", amount: 7500, date: "2024-01-11", method: "In-person" },
];

const mockVolunteers = [
  {
    id: 1,
    name: "Ali Hassan",
    email: "ali.hassan@email.com",
    phone: "+92 300 1234567",
    location: "Karachi, Pakistan",
    skills: "Teaching, Healthcare",
    availability: "Weekends",
    submittedAt: "2024-01-15",
  },
  {
    id: 2,
    name: "Fatima Ahmed",
    email: "fatima.ahmed@email.com",
    phone: "+92 301 2345678",
    location: "Islamabad, Pakistan",
    skills: "Administration, Event Management",
    availability: "Full-time",
    submittedAt: "2024-01-14",
  },
  {
    id: 3,
    name: "Hassan Malik",
    email: "hassan.malik@email.com",
    phone: "+92 302 3456789",
    location: "Lahore, Pakistan",
    skills: "Medical, Counseling",
    availability: "Evenings",
    submittedAt: "2024-01-13",
  },
  {
    id: 4,
    name: "Ayesha Khan",
    email: "ayesha.khan@email.com",
    phone: "+92 303 4567890",
    location: "Karachi, Pakistan",
    skills: "Teaching, Childcare",
    availability: "Weekdays",
    submittedAt: "2024-01-12",
  },
];

const AdminDashboard = () => {
  const navigate = useNavigate();
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    // Check authentication
    const auth = localStorage.getItem("adminAuthenticated");
    if (auth !== "true") {
      navigate("/admin-login");
    } else {
      setIsAuthenticated(true);
    }
  }, [navigate]);

  const handleLogout = () => {
    localStorage.removeItem("adminAuthenticated");
    navigate("/admin-login");
  };

  if (!isAuthenticated) {
    return null;
  }

  // Calculate stats
  const totalDonations = mockDonations.reduce((sum, d) => sum + d.amount, 0);
  const totalDonors = mockDonations.length;
  const totalVolunteers = mockVolunteers.length;
  const avgDonation = totalDonations / totalDonors || 0;

  const stats = [
    {
      title: "Total Donations",
      value: `Rs. ${totalDonations.toLocaleString()}`,
      icon: DollarSign,
      color: "from-[#79C9DA] to-[#14b8a6]",
      change: "+12.5%",
    },
    {
      title: "Total Donors",
      value: totalDonors.toString(),
      icon: Users,
      color: "from-[#9E71BA] to-[#8B5CF6]",
      change: "+8.2%",
    },
    {
      title: "Active Volunteers",
      value: totalVolunteers.toString(),
      icon: Heart,
      color: "from-[#8EC046] to-[#22c55e]",
      change: "+15.3%",
    },
    {
      title: "Avg. Donation",
      value: `Rs. ${Math.round(avgDonation).toLocaleString()}`,
      icon: TrendingUp,
      color: "from-[#FF6B35] to-[#f97316]",
      change: "+5.7%",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-[#79C9DA] to-[#9E71BA] flex items-center justify-center">
                <User className="w-6 h-6 text-white" />
              </div>
              <div>
                <h1 className="text-2xl font-bold text-gray-900">Admin Dashboard</h1>
                <p className="text-sm text-gray-500">Children of Adam</p>
              </div>
            </div>
            <button
              onClick={handleLogout}
              className="flex items-center gap-2 px-4 py-2 text-gray-700 hover:bg-gray-100 rounded-lg transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm p-6 border border-gray-100 hover:shadow-md transition-shadow"
              >
                <div className="flex items-center justify-between mb-4">
                  <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${stat.color} flex items-center justify-center`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="text-sm font-medium text-green-600 bg-green-50 px-2 py-1 rounded">
                    {stat.change}
                  </span>
                </div>
                <h3 className="text-sm font-medium text-gray-600 mb-1">{stat.title}</h3>
                <p className="text-2xl font-bold text-gray-900">{stat.value}</p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Donations */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-xl font-bold text-gray-900">Recent Donations</h2>
              <button className="text-sm text-[#79C9DA] hover:underline">View All</button>
            </div>
            <div className="space-y-4">
              {mockDonations.map((donation) => (
                <div
                  key={donation.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg hover:bg-gray-100 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#79C9DA] to-[#9E71BA] flex items-center justify-center">
                      <DollarSign className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <p className="font-semibold text-gray-900">{donation.name}</p>
                      <p className="text-sm text-gray-500">{donation.method}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="font-bold text-gray-900">Rs. {donation.amount.toLocaleString()}</p>
                    <p className="text-xs text-gray-500">{donation.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <h2 className="text-xl font-bold text-gray-900 mb-6">Quick Actions</h2>
            <div className="grid grid-cols-2 gap-4">
              <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#79C9DA] to-[#14b8a6] rounded-lg text-white hover:opacity-90 transition-opacity">
                <FileText className="w-8 h-8 mb-2" />
                <span className="font-medium">Reports</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#9E71BA] to-[#8B5CF6] rounded-lg text-white hover:opacity-90 transition-opacity">
                <Users className="w-8 h-8 mb-2" />
                <span className="font-medium">Donors</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#8EC046] to-[#22c55e] rounded-lg text-white hover:opacity-90 transition-opacity">
                <Calendar className="w-8 h-8 mb-2" />
                <span className="font-medium">Events</span>
              </button>
              <button className="flex flex-col items-center justify-center p-6 bg-gradient-to-br from-[#FF6B35] to-[#f97316] rounded-lg text-white hover:opacity-90 transition-opacity">
                <TrendingUp className="w-8 h-8 mb-2" />
                <span className="font-medium">Analytics</span>
              </button>
            </div>
          </div>
        </div>

        {/* Volunteer Applications */}
        <div className="mt-8 bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-gray-900">Volunteer Applications</h2>
            <span className="px-3 py-1 bg-[#8EC046] text-white text-sm font-medium rounded-full">
              {totalVolunteers} Applications
            </span>
          </div>
          <div className="space-y-4">
            {mockVolunteers.map((volunteer) => (
              <div
                key={volunteer.id}
                className="border border-gray-200 rounded-lg p-6 hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#8EC046] to-[#22c55e] flex items-center justify-center">
                        <User className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-bold text-gray-900 text-lg">{volunteer.name}</h3>
                        <p className="text-sm text-gray-500">Submitted on {volunteer.submittedAt}</p>
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>{volunteer.email}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>{volunteer.phone}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <MapPin className="w-4 h-4" />
                        <span>{volunteer.location}</span>
                      </div>
                      <div className="flex items-center gap-2 text-sm text-gray-600">
                        <Calendar className="w-4 h-4" />
                        <span>Available: {volunteer.availability}</span>
                      </div>
                    </div>
                    <div className="mt-4">
                      <p className="text-sm font-medium text-gray-700 mb-1">Skills:</p>
                      <div className="flex flex-wrap gap-2">
                        {volunteer.skills.split(", ").map((skill, idx) => (
                          <span
                            key={idx}
                            className="px-3 py-1 bg-[#79C9DA]/10 text-[#79C9DA] text-xs font-medium rounded-full"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex gap-2 md:flex-col">
                    <button className="px-4 py-2 bg-[#79C9DA] text-white rounded-lg hover:opacity-90 transition-opacity font-medium">
                      Approve
                    </button>
                    <button className="px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 transition-colors font-medium">
                      View Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
    </div>
  );
};

export default AdminDashboard;

