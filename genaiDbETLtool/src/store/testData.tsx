import type { ResponseProps } from "../chatResponse/ResponseProps";

export const testData: ResponseProps[] = [
    {
        query: {
            sender: 'bot',
            sqlQuery: 'SELECT SUM(revenue) FROM sales',
            sqlQueryExplanation: 'This query calculates the total revenue from the sales table.',
            resultsTable: {
                headers: ['Name','Total Revenue'],
                rows: [['$500,000']]
            },
            resultsTableExplanation: 'This table shows the total revenue calculated from the sales data.',
            chart: 'Pie chart representing revenue distribution',
            chartData: {
                labels: ['Product A', 'Product B', 'Product C'],
                datasets: [
                    {
                        label: 'Revenue Distribution',
                        data: [200000, 150000, 150000],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            }
        }
    },
    {
        query: {
            sender: 'bot',
            sqlQuery: 'SELECT COUNT(*) FROM customers WHERE signup_date > "2023-01-01"',
            sqlQueryExplanation: 'This query counts the number of customers who signed up after January 1, 2023.',
            resultsTable: {
                headers: ['New Customers'],
                rows: [['1200']]
            },
            resultsTableExplanation: 'This table shows the number of new customers since the start of 2023.',
            chart: 'Bar chart showing monthly signups',
            chartData: {
                labels: ['Jan', 'Feb', 'Mar', 'Apr'],
                datasets: [
                    {
                        label: 'Monthly Signups',
                        data: [300, 350, 250, 300],
                        backgroundColor: ['#4BC0C0', '#FF6384', '#FFCE56', '#36A2EB']
                    }
                ]
            }
        }
    },
    {
        query: {
            sender: 'bot',
            sqlQuery: 'SELECT product, AVG(rating) FROM reviews GROUP BY product',
            sqlQueryExplanation: 'This query calculates the average rating for each product.',
            resultsTable: {
                headers: ['Product', 'Average Rating'],
                rows: [
                    ['Product A', '4.5'],
                    ['Product B', '4.2'],
                    ['Product C', '4.8']
                ]
            },
            resultsTableExplanation: 'This table displays the average rating for each product based on customer reviews.',
            chart: 'Horizontal bar chart of product ratings',
            chartData: {
                labels: ['Product A', 'Product B', 'Product C'],
                datasets: [
                    {
                        label: 'Average Rating',
                        data: [4.5, 4.2, 4.8],
                        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56']
                    }
                ]
            }
        }
    }
];