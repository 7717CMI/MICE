'use client'

import { useState } from 'react'
import { ChevronDown, ChevronUp } from 'lucide-react'

interface CustomerData {
  // Customer Information
  customerName: string
  businessOverview: string
  industryVertical: string
  totalAnnualRevenue: string
  annualEventBudgetBands: string
  frequencyOfAnnualCongresses: string
  // Contact Details
  keyContactPerson: string
  designation: string
  emailAddress: string
  phoneNumber: string
  linkedInProfile: string
  websiteUrl: string
  // Buyer Behavior Intelligence (for Proposition 2 & 3)
  venueSelectionCriteria: string
  averagePlanningLeadTime: string
  spendAndRevenueDrivers: string
  // Purchasing Behaviour Metrics (for Proposition 3)
  budgetOwnership: string
  procurementModel: string
  budgetApproachTier: string
  preferredEngagementType: string
  // Solution Requirements (for Proposition 3)
  preferredSolutionType: string
  delegateVisitorManagementNeeds: string
  complianceGovernanceRequirements: string
  // CMI Insights (for Proposition 3)
  customerBenchmarking: string
  additionalComments: string
}

// Sample data for demonstration - MICE Industry
const sampleCustomerData: CustomerData[] = [
  {
    customerName: 'Global Pharma Summit Inc.',
    businessOverview: 'International pharmaceutical conference organizer',
    industryVertical: 'Healthcare / Pharma',
    totalAnnualRevenue: '25',
    annualEventBudgetBands: '$2M - $5M',
    frequencyOfAnnualCongresses: '4-6 events/year',
    keyContactPerson: 'Dr. Sarah Mitchell',
    designation: 'Director of Events',
    emailAddress: 's.mitchell@globalpharma.com',
    phoneNumber: '+1 212 555 0100',
    linkedInProfile: 'linkedin.com/in/sarahmitchell',
    websiteUrl: 'www.globalpharmasummit.com',
    venueSelectionCriteria: 'High capacity (2000+); 5-star prestige; Advanced AV tech',
    averagePlanningLeadTime: '12-18 months',
    spendAndRevenueDrivers: 'Venue: $800/delegate; Lodging: $350/night; F&B: $150/day; Premium experience seekers; Low seasonality sensitivity; 60% sponsor / 40% ticket',
    budgetOwnership: 'Corporate Security/IT',
    procurementModel: 'Framework agreement / RFP-driven via Regional SI',
    budgetApproachTier: 'Enterprise rollout / Capex-heavy',
    preferredEngagementType: 'Multi-year modernization program',
    preferredSolutionType: 'Biometric + card-based access / Visitor management',
    delegateVisitorManagementNeeds: 'High-volume visitor registration; real-time attendance tracking; Pre-event digital registration',
    complianceGovernanceRequirements: 'Alignment with local security protocols; data residency considerations; Ministry/authority approvals',
    customerBenchmarking: 'High potential - Market leader',
    additionalComments: 'Strong growth trajectory, expanding to APAC markets'
  },
  {
    customerName: 'TechConnect Conferences',
    businessOverview: 'Technology industry trade show organizer',
    industryVertical: 'Technology / IT',
    totalAnnualRevenue: '45',
    annualEventBudgetBands: '$5M - $10M',
    frequencyOfAnnualCongresses: '8-12 events/year',
    keyContactPerson: 'Michael Chen',
    designation: 'VP of Operations',
    emailAddress: 'm.chen@techconnect.io',
    phoneNumber: '+1 415 555 0200',
    linkedInProfile: 'linkedin.com/in/michaelchen',
    websiteUrl: 'www.techconnectconf.com',
    venueSelectionCriteria: 'Tech-ready venues; High bandwidth; Hybrid capability',
    averagePlanningLeadTime: '9-12 months',
    spendAndRevenueDrivers: 'Venue: $600/delegate; Lodging: $280/night; F&B: $120/day; Production: $200/delegate; High premium willingness; 70% sponsor / 30% ticket',
    budgetOwnership: 'Digital Infrastructure/Facilities Management',
    procurementModel: 'Competitive RFP via Regional or Global SI',
    budgetApproachTier: 'Hybrid spend / Enterprise / Capex-led',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'Unified access platform (multi-site)',
    delegateVisitorManagementNeeds: 'QR-based visitor management; Mobile access; Unified access + visitor mgmt',
    complianceGovernanceRequirements: 'Privacy compliance; High compliance; auditability; reporting',
    customerBenchmarking: 'High potential - Innovation leader',
    additionalComments: 'Pioneer in hybrid event technology'
  },
  {
    customerName: 'MedEd International',
    businessOverview: 'Medical education and CME conference provider',
    industryVertical: 'Healthcare / Education',
    totalAnnualRevenue: '18',
    annualEventBudgetBands: '$1M - $2M',
    frequencyOfAnnualCongresses: '6-8 events/year',
    keyContactPerson: 'Dr. Emma Rodriguez',
    designation: 'Chief Medical Officer',
    emailAddress: 'e.rodriguez@mededint.org',
    phoneNumber: '+44 20 7946 0300',
    linkedInProfile: 'linkedin.com/in/emmarodriguez',
    websiteUrl: 'www.mededinternational.org',
    venueSelectionCriteria: 'Academic prestige; Medical simulation facilities; Accessibility',
    averagePlanningLeadTime: '18-24 months',
    spendAndRevenueDrivers: 'Venue: $500/delegate; Lodging: $250/night; F&B: $100/day; High seasonality (avoid summer); 40% sponsor / 60% ticket',
    budgetOwnership: 'Operations/Corporate Strategy',
    procurementModel: 'Competitive bid with local delivery partners',
    budgetApproachTier: 'Event-based / Opex, Mid-scale campus',
    preferredEngagementType: 'Pilot → scale engagement',
    preferredSolutionType: 'Unified access platform (multi-site)',
    delegateVisitorManagementNeeds: 'Badge reprints; Guest list management; experience personalization',
    complianceGovernanceRequirements: 'Cross-border data handling considerations',
    customerBenchmarking: 'Medium potential - Steady growth',
    additionalComments: 'Strong reputation in CME sector'
  },
  {
    customerName: 'Energy Forum MENA',
    businessOverview: 'Middle East energy sector conference organizer',
    industryVertical: 'Energy / Oil & Gas',
    totalAnnualRevenue: '32',
    annualEventBudgetBands: '$3M - $5M',
    frequencyOfAnnualCongresses: '3-4 events/year',
    keyContactPerson: 'Ahmed Al-Mansouri',
    designation: 'Managing Director',
    emailAddress: 'a.mansouri@energyforum.ae',
    phoneNumber: '+971 4 555 0400',
    linkedInProfile: 'linkedin.com/in/ahmedalmansouri',
    websiteUrl: 'www.energyforummena.com',
    venueSelectionCriteria: '5-star luxury; VIP facilities; High security clearance',
    averagePlanningLeadTime: '12-15 months',
    spendAndRevenueDrivers: 'Venue: $1200/delegate; Lodging: $500/night; F&B: $200/day; Premium-focused; Low seasonality; 80% sponsor / 20% ticket',
    budgetOwnership: 'Security / Facilities',
    procurementModel: 'Direct purchase from OEM / Framework agreement',
    budgetApproachTier: 'Enterprise rollout / Capex-heavy',
    preferredEngagementType: 'Multi-year modernization program',
    preferredSolutionType: 'Biometric + card-based access / Visitor management',
    delegateVisitorManagementNeeds: 'High-volume visitor registration; VIP access management; real-time tracking',
    complianceGovernanceRequirements: 'Ministry/authority approvals; High security protocols; data residency',
    customerBenchmarking: 'High potential - Regional leader',
    additionalComments: 'Strong government relationships, premium positioning'
  },
  {
    customerName: 'FinTech World Congress',
    businessOverview: 'Financial technology industry events',
    industryVertical: 'Finance / Technology',
    totalAnnualRevenue: '28',
    annualEventBudgetBands: '$2M - $4M',
    frequencyOfAnnualCongresses: '5-7 events/year',
    keyContactPerson: 'Jennifer Park',
    designation: 'CEO',
    emailAddress: 'j.park@fintechworld.com',
    phoneNumber: '+65 6555 0500',
    linkedInProfile: 'linkedin.com/in/jenniferpark',
    websiteUrl: 'www.fintechworld.com',
    venueSelectionCriteria: 'Financial district location; High-tech AV; Networking spaces',
    averagePlanningLeadTime: '10-14 months',
    spendAndRevenueDrivers: 'Venue: $700/delegate; Lodging: $320/night; F&B: $130/day; Production: $180/delegate; Premium willing; 65% sponsor / 35% ticket',
    budgetOwnership: 'Digital Infrastructure/IT',
    procurementModel: 'Competitive RFP via Global SI',
    budgetApproachTier: 'Hybrid spend / Enterprise',
    preferredEngagementType: 'Turnkey project with integrator',
    preferredSolutionType: 'QR-based visitor management / Mobile access',
    delegateVisitorManagementNeeds: 'Mobile access; real-time analytics; experience personalization',
    complianceGovernanceRequirements: 'Financial data compliance; High auditability; Cross-border considerations',
    customerBenchmarking: 'High potential - Fast growing',
    additionalComments: 'Rapid expansion in Asia Pacific'
  },
  {
    customerName: 'Automotive Innovation Summit',
    businessOverview: 'Automotive industry B2B event organizer',
    industryVertical: 'Automotive / Manufacturing',
    totalAnnualRevenue: '22',
    annualEventBudgetBands: '$2M - $3M',
    frequencyOfAnnualCongresses: '4-5 events/year',
    keyContactPerson: 'Klaus Weber',
    designation: 'Head of Events',
    emailAddress: 'k.weber@autoinnovation.de',
    phoneNumber: '+49 89 555 0600',
    linkedInProfile: 'linkedin.com/in/klausweber',
    websiteUrl: 'www.autoinnovationsummit.com',
    venueSelectionCriteria: 'Exhibition space (10,000+ sqm); Demo areas; Industrial access',
    averagePlanningLeadTime: '14-18 months',
    spendAndRevenueDrivers: 'Venue: $550/delegate; Lodging: $220/night; F&B: $95/day; Production: $250/delegate; Medium seasonality; 75% sponsor / 25% ticket',
    budgetOwnership: 'Operations/Facilities Management',
    procurementModel: 'Framework agreement / Regional SI',
    budgetApproachTier: 'Event-based / Hybrid spend',
    preferredEngagementType: 'Pilot → scale engagement',
    preferredSolutionType: 'Unified access platform (multi-site)',
    delegateVisitorManagementNeeds: 'Exhibitor management; Demo area access control; visitor flow analytics',
    complianceGovernanceRequirements: 'EU data protection; Industrial safety compliance',
    customerBenchmarking: 'Medium potential - Established player',
    additionalComments: 'Strong OEM partnerships'
  },
  {
    customerName: 'Customer 7',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    annualEventBudgetBands: 'xx',
    frequencyOfAnnualCongresses: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    venueSelectionCriteria: 'xx',
    averagePlanningLeadTime: 'xx',
    spendAndRevenueDrivers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    budgetApproachTier: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    delegateVisitorManagementNeeds: 'xx',
    complianceGovernanceRequirements: 'xx',
    customerBenchmarking: 'xx',
    additionalComments: 'xx'
  },
  {
    customerName: 'Customer 8',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    annualEventBudgetBands: 'xx',
    frequencyOfAnnualCongresses: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    venueSelectionCriteria: 'xx',
    averagePlanningLeadTime: 'xx',
    spendAndRevenueDrivers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    budgetApproachTier: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    delegateVisitorManagementNeeds: 'xx',
    complianceGovernanceRequirements: 'xx',
    customerBenchmarking: 'xx',
    additionalComments: 'xx'
  },
  {
    customerName: 'Customer 9',
    businessOverview: 'xx',
    industryVertical: 'xx',
    totalAnnualRevenue: 'xx',
    annualEventBudgetBands: 'xx',
    frequencyOfAnnualCongresses: 'xx',
    keyContactPerson: 'xx',
    designation: 'xx',
    emailAddress: 'xx',
    phoneNumber: 'xx',
    linkedInProfile: 'xx',
    websiteUrl: 'xx',
    venueSelectionCriteria: 'xx',
    averagePlanningLeadTime: 'xx',
    spendAndRevenueDrivers: 'xx',
    budgetOwnership: 'xx',
    procurementModel: 'xx',
    budgetApproachTier: 'xx',
    preferredEngagementType: 'xx',
    preferredSolutionType: 'xx',
    delegateVisitorManagementNeeds: 'xx',
    complianceGovernanceRequirements: 'xx',
    customerBenchmarking: 'xx',
    additionalComments: 'xx'
  }
]

interface PrepositionProps {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: React.ReactNode
}

function Preposition({ title, isOpen, onToggle, children }: PrepositionProps) {
  return (
    <div className="border border-gray-200 rounded-lg mb-4">
      <button
        onClick={onToggle}
        className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-gray-50 rounded-lg transition-colors"
      >
        <span className="text-lg font-semibold text-black">{title}</span>
        {isOpen ? (
          <ChevronUp className="h-5 w-5 text-gray-500" />
        ) : (
          <ChevronDown className="h-5 w-5 text-gray-500" />
        )}
      </button>
      {isOpen && (
        <div className="px-2 pb-4 bg-white rounded-b-lg">
          {children}
        </div>
      )}
    </div>
  )
}

interface CustomerIntelligenceDatabaseProps {
  title?: string
  height?: number
}

export default function CustomerIntelligenceDatabase({ title }: CustomerIntelligenceDatabaseProps) {
  const [openPreposition, setOpenPreposition] = useState<number | null>(1)

  const togglePreposition = (num: number) => {
    setOpenPreposition(openPreposition === num ? null : num)
  }

  // Preposition 1 Table - Customer Information + Contact Details
  const renderPreposition1Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#FFFFCC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(energy, tech, healthcare)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Annual event budget bands</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Frequency of annual congresses</th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualEventBudgetBands}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.frequencyOfAnnualCongresses}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 2 Table - Same as Preposition 1 + Buyer Behavior Intelligence
  const renderPreposition2Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#FFFFCC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#00CED1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Buyer Behavior Intelligence
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(energy, tech, healthcare)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Annual event budget bands</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Frequency of annual congresses</th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Buyer Behavior Intelligence */}
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Venue selection criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(capacity, prestige, tech readiness)</div>
            </th>
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Average planning lead time</div>
            </th>
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Spend & Revenue Drivers</div>
              <div className="font-normal text-[10px] text-gray-600">(Per-delegate spend categories (venue, lodging, F&B, production); Willingness to pay for premium experiences; Sensitivity to seasonality pricing; Sponsorship vs ticket revenue mix)</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualEventBudgetBands}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.frequencyOfAnnualCongresses}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.venueSelectionCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averagePlanningLeadTime}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.spendAndRevenueDrivers}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  // Preposition 3 Table - Same as Preposition 2 + Purchasing Behaviour Metrics + Solution Requirements + CMI Insights
  const renderPreposition3Table = () => (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse">
        <thead>
          <tr>
            <th colSpan={6} className="bg-[#FFFFCC] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Customer Information
            </th>
            <th colSpan={6} className="bg-[#87CEEB] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Contact Details
            </th>
            <th colSpan={3} className="bg-[#00CED1] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Buyer Behavior Intelligence
            </th>
            <th colSpan={4} className="bg-[#ADD8E6] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Purchasing Behaviour Metrics
            </th>
            <th colSpan={3} className="bg-[#FFDAB9] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              Solution Requirements
            </th>
            <th colSpan={2} className="bg-[#D4EDDA] border border-gray-300 px-3 py-2 text-center text-sm font-semibold text-black">
              CMI Insights
            </th>
          </tr>
          <tr className="bg-gray-100">
            {/* Customer Information */}
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Customer Name/Company Name</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Business Overview</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Industry vertical</div>
              <div className="font-normal text-[10px] text-gray-600">(energy, tech, healthcare)</div>
            </th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Total Annual Revenue (US$ Million)</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Annual event budget bands</th>
            <th className="bg-[#CCE5FF] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Frequency of annual congresses</th>
            {/* Contact Details */}
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Key Contact Person</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Designation/Role</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Email Address</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Phone/WhatsApp Number</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">LinkedIn Profile</th>
            <th className="bg-[#B0E0E6] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black whitespace-nowrap">Website URL</th>
            {/* Buyer Behavior Intelligence */}
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Venue selection criteria</div>
              <div className="font-normal text-[10px] text-gray-600">(capacity, prestige, tech readiness)</div>
            </th>
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Average planning lead time</div>
            </th>
            <th className="bg-[#AFEEEE] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[250px]">
              <div>Spend & Revenue Drivers</div>
              <div className="font-normal text-[10px] text-gray-600">(Per-delegate spend categories (venue, lodging, F&B, production); Willingness to pay for premium experiences; Sensitivity to seasonality pricing; Sponsorship vs ticket revenue mix)</div>
            </th>
            {/* Purchasing Behaviour Metrics */}
            <th className="bg-[#87CEFA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[180px]">
              <div>Budget Ownership</div>
              <div className="font-normal text-[10px] text-gray-600">(Corporate Security/IT / Digital Infrastructure/Facilities Management/Operations/Corporate Strategy / Security / Facilities)</div>
            </th>
            <th className="bg-[#87CEFA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Procurement Model</div>
              <div className="font-normal text-[10px] text-gray-600">(Framework agreement / RFP-driven via Regional SI, Competitive RFP via Regional or Global SI, Competitive bid with local delivery partners, etc.)</div>
            </th>
            <th className="bg-[#87CEFA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Budget Approach / Tier</div>
              <div className="font-normal text-[10px] text-gray-600">(Enterprise rollout / Capex+heavy / Hybrid spend / Enterprise / Capex-led, Event-based / Opex, Mid-scale campus / Hybrid spend, etc.)</div>
            </th>
            <th className="bg-[#87CEFA] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Engagement Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Multi-year modernization program, Turnkey project with integrator, Pilot → scale engagement, etc.)</div>
            </th>
            {/* Solution Requirements */}
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Preferred Solution Type</div>
              <div className="font-normal text-[10px] text-gray-600">(Biometric + card-based access / Visitor management, Unified access platform (multi-site), QR-based visitor management / Mobile access, etc.)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Delegate & Visitor Management Needs</div>
              <div className="font-normal text-[10px] text-gray-600">(High-volume visitor registration; real-time attendance tracking; Pre-event digital registration; badge reprints; Guest list management; experience personalization)</div>
            </th>
            <th className="bg-[#FFE4B5] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[200px]">
              <div>Compliance & Governance Requirements</div>
              <div className="font-normal text-[10px] text-gray-600">(Alignment with local security protocols; data residency considerations; Ministry/authority approvals; privacy compliance; High compliance, auditability, reporting; Cross-border data handling considerations)</div>
            </th>
            {/* CMI Insights */}
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Customer Benchmarking Summary</div>
              <div className="font-normal text-[10px] text-gray-600">(Potential Customers)</div>
            </th>
            <th className="bg-[#98FB98] border border-gray-300 px-3 py-2 text-left text-xs font-semibold text-black min-w-[150px]">
              <div>Additional Comments/Notes By CMI team</div>
            </th>
          </tr>
        </thead>
        <tbody>
          {sampleCustomerData.map((customer, index) => (
            <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
              {/* Customer Information */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerName}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.businessOverview}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.industryVertical}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.totalAnnualRevenue}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.annualEventBudgetBands}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.frequencyOfAnnualCongresses}</td>
              {/* Contact Details */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.keyContactPerson}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.designation}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`mailto:${customer.emailAddress}`}>{customer.emailAddress}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.phoneNumber}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.linkedInProfile}`} target="_blank" rel="noopener noreferrer">{customer.linkedInProfile}</a>
              </td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-blue-600 hover:underline">
                <a href={`https://${customer.websiteUrl}`} target="_blank" rel="noopener noreferrer">{customer.websiteUrl}</a>
              </td>
              {/* Buyer Behavior Intelligence */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.venueSelectionCriteria}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.averagePlanningLeadTime}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.spendAndRevenueDrivers}</td>
              {/* Purchasing Behaviour Metrics */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetOwnership}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.procurementModel}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.budgetApproachTier}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredEngagementType}</td>
              {/* Solution Requirements */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.preferredSolutionType}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.delegateVisitorManagementNeeds}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.complianceGovernanceRequirements}</td>
              {/* CMI Insights */}
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.customerBenchmarking}</td>
              <td className="border border-gray-300 px-3 py-2 text-sm text-black">{customer.additionalComments}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )

  return (
    <div className="w-full">
      <h2 className="text-xl font-bold text-black mb-6">Customer Intelligence Database</h2>

      <Preposition
        title="Preposition 1 - Basic"
        isOpen={openPreposition === 1}
        onToggle={() => togglePreposition(1)}
      >
        {renderPreposition1Table()}
      </Preposition>

      <Preposition
        title="Preposition 2 - Advanced"
        isOpen={openPreposition === 2}
        onToggle={() => togglePreposition(2)}
      >
        {renderPreposition2Table()}
      </Preposition>

      <Preposition
        title="Preposition 3 - Premium"
        isOpen={openPreposition === 3}
        onToggle={() => togglePreposition(3)}
      >
        {renderPreposition3Table()}
      </Preposition>
    </div>
  )
}
