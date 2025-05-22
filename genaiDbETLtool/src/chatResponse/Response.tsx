import React from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);
import type { ResponseProps } from './ResponseProps';

// interface ResponseProps {
//     query?: 
//     { sender: 'user'; text: string } | 
//     { sender: 'bot'; sqlQuery: string; sqlQueryExplanation: string; resultsTable: { headers: string[]; rows: string[][] }; resultsTableExplanation: string; chart: string; chartData: { labels: string[]; datasets: { label: string; data: number[]; backgroundColor: string[] }[] } };
// }

const Response: React.FC<ResponseProps> = ({ query }) => {
    if (!query || query.sender === 'user') {
        return <div>No bot response available.</div>;
    }

    const { sqlQuery, sqlQueryExplanation, resultsTable, resultsTableExplanation, chart, chartData } = query;

    return (
        <div style={{ padding: '1rem', backgroundColor: '#f4f4f4', borderRadius: '5px' }}>
            <h3>SQL Query</h3>
            <pre style={{ whiteSpace: 'pre-wrap', wordWrap: 'break-word', backgroundColor: '#e8e8e8', padding: '1rem', borderRadius: '5px' }}>
                {sqlQuery}
            </pre>
            <h4>Explanation</h4>
            <p>{sqlQueryExplanation}</p>

            <h3>Results Table</h3>
            <table style={{ width: '100%', borderCollapse: 'collapse', marginBottom: '1rem' }}>
                <thead>
                    <tr>
                        {resultsTable.headers.map((header, index) => (
                            <th key={index} style={{ border: '1px solid #ddd', padding: '8px', backgroundColor: '#f2f2f2' }}>
                                {header}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody>
                    {resultsTable.rows.map((row, rowIndex) => (
                        <tr key={rowIndex}>
                            {row.map((cell, cellIndex) => (
                                <td key={cellIndex} style={{ border: '1px solid #ddd', padding: '8px' }}>
                                    {cell}
                                </td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            <h4>Results Explanation</h4>
            <p>{resultsTableExplanation}</p>
            <h3>Chart</h3>
            
        </div>
    );
};

export default Response;