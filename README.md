# ReVive Outreach Analytics Dashboard

A comprehensive React-based dashboard for analyzing street outreach activities and measuring program impact across Chicago.

## 🌟 Features

- **📊 Interactive Analytics**: Real-time charts and visualizations using Recharts
- **🗺️ Location Insights**: Detailed analysis of outreach locations and engagement rates
- **📈 Trend Analysis**: Monthly performance tracking and growth metrics
- **📱 Responsive Design**: Optimized for desktop, tablet, and mobile devices
- **⚡ Fast Performance**: Optimized React components with smooth animations
- **♿ Accessible**: WCAG compliant with proper focus management and screen reader support

## 🚀 Key Metrics

- **447 Total Outreach Visits** across 232 unique locations
- **3,051 People Encountered** with an average of 6.8 per visit
- **73% Overall Engagement Rate** demonstrating effective outreach methods
- **Comprehensive Coverage** across Chicago's most vulnerable communities

## 🛠️ Technology Stack

- **React 18** - Modern UI framework
- **Recharts** - Interactive data visualization
- **Tailwind CSS** - Responsive styling framework
- **Lucide React** - Beautiful icon library
- **AWS Amplify** - Hosting and deployment

## 🏗️ Project Structure

```
revive-dashboard/
├── public/
│   ├── index.html          # Main HTML template
│   ├── manifest.json       # PWA configuration
│   └── favicon.ico         # App icon
├── src/
│   ├── App.js              # Main dashboard component
│   ├── App.css             # Component-specific styles
│   ├── index.js            # React entry point
│   ├── index.css           # Global styles
│   └── reportWebVitals.js  # Performance monitoring
├── package.json            # Dependencies and scripts
└── README.md              # This file
```

## 🚀 Deployment with AWS Amplify

### Method 1: GitHub Integration (Recommended)

1. **Upload to GitHub**:
   - Create a new repository on GitHub
   - Upload all project files to the repository
   - Make sure the repository is public or grant Amplify access

2. **Deploy with Amplify Console**:
   - Go to [AWS Amplify Console](https://console.aws.amazon.com/amplify/)
   - Click "Get Started" under "Amplify Hosting"
   - Connect your GitHub repository
   - Amplify will auto-detect React settings
   - Click "Save and Deploy"

3. **Live in 5 minutes**:
   - Amplify will build and deploy automatically
   - Get your live URL: `https://xyz123.amplifyapp.com`
   - Auto-deploys on every GitHub commit

### Method 2: Manual Upload

1. **Build the project locally**:
   ```bash
   npm install
   npm run build
   ```

2. **Deploy via Amplify Console**:
   - Choose "Deploy without Git provider"
   - Upload the `build` folder
   - Get instant hosting

## 📈 Dashboard Sections

### Overview Tab
- Key performance metrics cards
- Monthly activity trends
- Engagement rate distribution
- Impact summary statistics

### Locations Tab
- Top performing locations chart
- Detailed location performance table
- Engagement rate visualizations
- Geographic impact analysis

### Trends Tab
- Monthly performance breakdown
- Time-series analysis
- Growth pattern identification
- Key insights and recommendations

## 🎨 Design Features

- **Modern UI**: Clean, professional interface with smooth animations
- **Color-coded Metrics**: Visual indicators for performance levels
- **Interactive Charts**: Hover effects and detailed tooltips
- **Mobile Optimized**: Responsive design for all screen sizes
- **Accessibility**: Keyboard navigation and screen reader support

## 📊 Data Insights

The dashboard reveals several key insights:

- **High Engagement**: 73% overall engagement rate exceeds industry standards
- **Consistent Performance**: Stable engagement across all months
- **Strategic Locations**: Top 10 locations account for 60% of encounters
- **Winter Impact**: December showed highest activity (123 visits, 837 clients)
- **Comprehensive Reach**: 232 unique locations demonstrate citywide coverage

## 🔧 Customization

The dashboard is designed for easy customization:

- **Data Updates**: Modify the data objects in `App.js`
- **Styling**: Update colors and themes in Tailwind configuration
- **New Metrics**: Add additional charts and visualizations
- **Branding**: Customize colors, fonts, and layout to match your organization

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📝 License

This project is developed for ReVive Impact for internal use and stakeholder reporting.

## 🤝 Support

For questions about deployment or customization, refer to the AWS Amplify documentation or create an issue in the repository.

---

**Built with ❤️ for ReVive Impact's mission to support Chicago's unhoused community.**
