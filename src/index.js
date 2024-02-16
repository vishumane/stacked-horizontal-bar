import React from 'react';
import { render } from 'react-dom';
import { HorizontalBar, Doughnut, Bar } from 'react-chartjs-2';

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

  const chartData = {
    labels: ['Employee', 'Tracking', 'Billing'],
    datasets: [
      {
        label: 'Active',
        backgroundColor: ['#87CEFA', '#87CEFA', '#87CEFA'],
        data: [data.Employee.Active, data.Tracking.Enabled, data.Billing.Billable],
      },
      {
        label: 'Contractor',
        backgroundColor: ['#FFA500', '#FFA500', '#FFFFFF'],
        data: [data.Employee.Contractor, 0, 0],
      },
      {
        label: 'Terminated',
        backgroundColor: ['#FA8072', '#FA8072', '#FFFFFF'],
        data: [data.Employee.Terminated, 0, 0],
      },
      {
        label: 'Disabled',
        backgroundColor: ['#FFFFFF', '#FF0000', '#FFFFFF'],
        data: [0, data.Tracking.Disabled, 0],
      },
      {
        label: 'NonBillable',
        backgroundColor: ['#FFFFFF', '#FFFFFF', '#FF0000'],
        data: [0, 0, data.Billing.NonBillable],
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
        data: [5000, 7500],
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
        data: [15000, 12000],
        
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
