import React from 'react';
import { render } from 'react-dom';
import { HorizontalBar, Bar, Doughnut } from 'react-chartjs-2';

const App = () => {
  const data = {
    Employee: {
      Active: 4000,
      Contractor: 100,
      Terminated: 200,
    },
    Tracking: {
      Enabled: 3000,
      Disabled: 500,
    },
    Billing: {
      Billable: 2500,
      NonBillable: 2000,
    },
  };

  const employeeSummary = {
    totalEmployeesCount: 56,
    activeCount: 43,
    terminatedCount: 5,
    mouritechCategoryCount: 0,
    thirdPartyCategoryCount: 0,
    contractorCount: 8,
    enabledCount: 43,
    disabledCount: 13,
    billableCount: 44,
    nonBillableCount: 12,
  };
  
  const revenueInsights = {
    "totalReceivable": 31000,
    "totalPayable": 40000
  };

  const trackingBalanceSummary = {
    "totalOutstanding": 642336.4,
    "totalAvailable": 328867.4
  };

  const chartData = {
    labels: ['Employee Status', 'Tracking Access', 'Billable Status'],
    datasets: [
      {
        label: 'Active',
        backgroundColor: '#87CEFA',
        data: [employeeSummary.activeCount, 0, 0],
      },
      {
        label: 'Contractor',
        backgroundColor: '#FFA500',
        data: [employeeSummary.contractorCount, 0, 0],
      },
      {
        label: 'Terminated',
        backgroundColor: '#FA8072',
        data: [employeeSummary.terminatedCount, 0, 0],
      },
      {
        label: 'Enabled',
        backgroundColor: '#87CEFA',
        data: [0, employeeSummary.enabledCount, 0],
      },
      {
        label: 'Disabled',
        backgroundColor: '#FF0000',
        data: [0, employeeSummary.disabledCount, 0],
      },
      {
        label: 'Billable',
        backgroundColor: '#98FB98',
        data: [0, 0, employeeSummary.billableCount],
      },
      {
        label: 'Non-Billable',
        backgroundColor: '#FF0000',
        data: [0, 0, employeeSummary.nonBillableCount],
      },
    ],
  };

  const barOptions = {
    scales: {
      xAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  const doughnutData = {
    labels: ['Client Outstanding', 'Total Balance'],
    datasets: [
      {
        label: 'Tracking Balance Summary',
        data: [trackingBalanceSummary.totalOutstanding, trackingBalanceSummary.totalAvailable],
        backgroundColor: ['#87CEFA', '#98FB98'],
      },
    ],
  };

  const barChartData = {
    labels: ['Revenue Generated', 'Cost Incurred'],
    datasets: [
      {
        label: 'Revenue Insights',
        backgroundColor: ['#98FB98', '#FF6347'],
        data: [revenueInsights.totalReceivable, revenueInsights.totalPayable],
      },
    ],
  };

  const barChartOptions = {
    scales: {
      xAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
            min: 10000,
          },
        },
      ],
    },
  };

  return (
    <div>
      <h2>Employee Overview</h2>
      <HorizontalBar data={chartData} options={barOptions} />
      <h2>Tracking Balance Summary</h2>
      <Doughnut data={doughnutData} />
      <h2>Revenue Insights</h2>
      <Bar data={barChartData} options={barChartOptions} />
    </div>
  );
};

render(<App />, document.getElementById('root'));
