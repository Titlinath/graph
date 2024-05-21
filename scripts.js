document.addEventListener('DOMContentLoaded', function() {
    var ctx = document.getElementById('trendsChart').getContext('2d');

    var labels = ['2019', '2020', '2021', '2022', '2023', '2024'];
    var datasets = [
        {
            label: 'Times of India - Usage',
            data: [50, 55, 60, 70, 80, 85],
            backgroundColor: '#3A4D39',
            borderColor: '#3A4D39',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Times of India - Economic',
            data: [60, 65, 70, 75, 80, 85],
            backgroundColor: '#4F6F52',
            borderColor: '#4F6F52',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Hindustan Times - Usage',
            data: [40, 45, 50, 60, 65, 70],
            backgroundColor: '#FFC6AC',
            borderColor: '#FFC6AC',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Hindustan Times - Economic',
            data: [50, 55, 60, 65, 70, 75],
            backgroundColor: '#FFD9B7',
            borderColor: '#FFD9B7',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'The Hindu - Usage',
            data: [30, 35, 40, 50, 55, 60],
            backgroundColor: '#374259',
            borderColor: '#374259',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'The Hindu - Economic',
            data: [40, 45, 50, 55, 60, 65],
            backgroundColor: '#545B77',
            borderColor: '#545B77',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Indian Express - Usage',
            data: [25, 30, 35, 40, 45, 50],
            backgroundColor: '#665A48',
            borderColor: '#665A48',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Indian Express - Economic',
            data: [35, 40, 45, 50, 55, 60],
            backgroundColor: '#9F8772',
            borderColor: '#9F8772',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'NDTV - Usage',
            data: [20, 25, 30, 35, 40, 45],
            backgroundColor: '#874C62',
            borderColor: '#874C62',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'NDTV - Economic',
            data: [30, 35, 40, 45, 50, 55],
            backgroundColor: '#AC7088',
            borderColor: '#AC7088',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Anandabazar Patrika - Usage',
            data: [15, 20, 25, 30, 35, 40],
            backgroundColor: '#80558C',
            borderColor: '#80558C',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Anandabazar Patrika - Economic',
            data: [25, 30, 35, 40, 45, 50],
            backgroundColor: '#AF7AB3',
            borderColor: '#AF7AB3',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Ei Samay - Usage',
            data: [10, 15, 20, 25, 30, 35],
            backgroundColor: '#A97155',
            borderColor: '#A97155',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Ei Samay - Economic',
            data: [20, 25, 30, 35, 40, 45],
            backgroundColor: '#BE8C63',
            borderColor: '#BE8C63',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Aajkal - Usage',
            data: [5, 10, 15, 20, 25, 30],
            backgroundColor: '#064420',
            borderColor: '#064420',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Aajkal - Economic',
            data: [15, 20, 25, 30, 35, 40],
            backgroundColor: '#3A6351',
            borderColor: '#3A6351',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Sangbad Pratidin - Usage',
            data: [8, 13, 18, 23, 28, 33],
            backgroundColor: '#E7B2A5',
            borderColor: '#E7B2A5',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'Sangbad Pratidin - Economic',
            data: [18, 23, 28, 33, 38, 43],
            backgroundColor: '#F8B195',
            borderColor: '#F8B195',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'New Website 1 - Usage',
            data: [2, 5, 7, 10, 15, 20],
            backgroundColor: '#FA877F',
            borderColor: '#FA877F',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        },
        {
            label: 'New Website 1 - Economic',
            data: [7, 10, 15, 20, 25, 30],
            backgroundColor: '#FEA5AD',
            borderColor: '#FEA5AD',
            borderWidth: 1,
            barPercentage: 0.4,
            categoryPercentage: 0.5
        }
    ];

    new Chart(ctx, {
        type: 'bar',
        data: {
            labels: labels,
            datasets: datasets
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    stacked: true
                },
                y: {
                    stacked: true
                }
            }
        }
    });
});
