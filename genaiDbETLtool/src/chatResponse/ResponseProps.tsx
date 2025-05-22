interface ResponseProps {
    query?: 
    { sender: 'user'; text: string } | 
    { sender: 'bot'; sqlQuery: string; sqlQueryExplanation: string; resultsTable: { headers: string[]; rows: string[][] }; resultsTableExplanation: string; chart: string; chartData: { labels: string[]; datasets: { label: string; data: number[]; backgroundColor: string[] }[] } };
}

export type { ResponseProps };