/**
 * This component represents a card displaying recent clearance items. It includes a header, a body with a grid layout for the items, and a footer with action buttons.
 * The grid is built using Kendo React Grid and is designed to be responsive, with custom cell renderers for specific columns. The component fetches clearance data
 * from an API using a lazy query hook and manages loading and error states accordingly. It also integrates internationalization support by using a translation hook to
 * fetch translated strings for the column titles and button labels.
 */
import { useEffect, useRef, useState } from 'react';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Grid, GridColumn as Column, GridCellProps, GridDataStateChangeEvent } from '@progress/kendo-react-grid';
import { State } from '@progress/kendo-data-query';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { useLazyClearancesQuery } from '@/store/api/clearancesApi';
import { OverlaySpinner } from '@/components/OverlaySpinner';
import ErrorPage from '@/components/ErrorPage';
import { useTranslation } from '@/utils/hooks/useTranslation';

const ActionCell = (props: GridCellProps) => {
    return (
        <td>
            <Button variant='link' onClick={() => alert('Pay now')}>Pay now</Button>
            <Button variant='link' onClick={() => alert('Dispute')}>Dispute</Button>
            <Button variant='link' onClick={() => alert('Show details')}>Show details</Button>
        </td>
    );
};

const RecentClearancesCard = () => {
    const gridRef = useRef(null);
    const translate = useTranslation();
    const columns = [
        { field: 'InvoiceNo', title: translate('invoiceNumber'), minWidth: 160 },
        { field: 'Date', title: translate('date'), minWidth: 120 },
        { field: 'DueDate', title: translate('dueDate'), minWidth: 120 },
        { field: 'Status', title: translate('status'), minWidth: 120 },
        { field: 'Actions', title: translate('actions'), minWidth: 200, cell: ActionCell }
    ];
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns);
    const initialDataState: State = {
        take: 10,
        skip: 0
    };
    const [dataState, setDataState] = useState<State>(initialDataState);
    const [fetchClearances, { data: clearances, isLoading, isFetching, error }] = useLazyClearancesQuery();

    useEffect(() => {
        const fetchData = async () => {
            await fetchClearances();
        };
        fetchData();
    }, [dataState]);

    const gridIsLoading = isLoading || isFetching;

    const handleDataStateChange = (e: GridDataStateChangeEvent) => {
        setDataState(e.dataState);
    };

    return (
        <Card className='dashboard-layout-table flex-fill'>
            <Card.Header>
                <h4>{translate('recentInvoicesCardTitle')}</h4>
            </Card.Header>
            <Card.Body className='p-0 flex-fill overflow-auto position-relative'>
                <div className='table-wrapper w-100'>
                    {gridIsLoading && (
                        <div style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', zIndex: 2 }}>
                            <OverlaySpinner />
                        </div>
                    )}

                    {error ? (
                        <ErrorPage error={error as Error} />
                    ) : (
                        <Grid
                            ref={gridRef}
                            data={clearances}
                            resizable={true}
                            onDataStateChange={handleDataStateChange}
                            className='border-0'
                        >
                            {columns.map((column, index) => (
                                <Column key={index} field={column.field} title={column.title} width={setWidth(column)} />
                            ))}
                        </Grid>
                    )}
                </div>
            </Card.Body>
            <Card.Footer>
                <Button variant='secondary'>{translate('viewAllInvoices')}</Button>
            </Card.Footer>
        </Card>
    );
};

export default RecentClearancesCard;
