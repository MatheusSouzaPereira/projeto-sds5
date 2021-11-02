import Chart from 'react-apexcharts'
const BarChart = () => {
    const options = {
    plotOptions: {
        bar: {
            horizontal: true,
        }
    },
};
  

const mockData = {
    labels: {
        categories: ['Aryele', 'Camila', 'Thuane']
    },
    series: [
        {
            name: "% Sucesso",
            data: [43.6, 67.1, 67.7]                   
        }
    ]
};
    return (
        <Chart
            options={{...options, xaxis: {categories: mockData.labels.categories}}}
            series={mockData.series}
            type="bar"
            height="240"
        />
  );
};

export default BarChart;
