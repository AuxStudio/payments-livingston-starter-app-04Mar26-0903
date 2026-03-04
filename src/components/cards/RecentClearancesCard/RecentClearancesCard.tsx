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
import { Grid, GridColumn as Column, GridCellProps, GridDataStateChangeEvent, GridCustomHeaderCellProps } from '@progress/kendo-react-grid';
import { State } from '@progress/kendo-data-query';
import { useKendoResponsiveColWidths } from 'livingston-npm-components';
import { HeaderThElement } from '@progress/kendo-react-data-tools';
import { faInfoCircle } from '@fortawesome/free-solid-svg-icons';
import { IconDefinition } from '@fortawesome/fontawesome-svg-core';
import { useLazyClearancesQuery } from '@/store/api/clearancesApi';
import { OverlaySpinner } from '@/components/OverlaySpinner';
import ErrorPage from '@/components/ErrorPage';
import { useTranslation } from '@/utils/hooks/useTranslation';

const EntryNoCell = (props: GridCellProps) => {
    return (
        <td style={{ paddingLeft: '34px' }}>
            <a href='/#' onClick={(e) => e.preventDefault()}>
                {props.dataItem.EntryNo}
            </a>
        </td>
    );
};

const EntryNoHeader = (props: GridCustomHeaderCellProps) => {
    return (
        <HeaderThElement columnId={props.thProps?.columnId || ''} {...props.thProps} style={{ paddingLeft: '34px' }}>
            {props.title}
        </HeaderThElement>
    );
};

const StatusCell = (props: GridCellProps) => {
    const status = props.dataItem.Status;
    let badge = null;

    if (status === 'In progress') {
        badge = <span className='badge badge-pill badge-info'>In progress</span>;
    } else if (status === 'Completed') {
        badge = <span className='badge badge-pill badge-success'>Completed</span>;
    } else if (status === 'On hold') {
        badge = (
            <span className='badge badge-pill badge-danger'>
                <FontAwesomeIcon icon={faInfoCircle as IconDefinition} className='me-1' />
                On hold
            </span>
        );
    }

    return <td>{badge}</td>;
};

const RecentClearancesCard = () => {
    const gridRef = useRef(null);
    const translate = useTranslation();
    const columns = [
        {
            field: 'EntryNo',
            title: translate('gridColumnEntryNo'),
            minWidth: 160,
            cell: { data: EntryNoCell, headerCell: EntryNoHeader }
        },
        {
            field: 'CargoControlNo',
            title: translate('gridColumnCargoControlNo'),
            minWidth: 180
        },
        {
            field: 'Status',
            title: translate('gridColumnStatus'),
            minWidth: 120,
            cell: { data: StatusCell }
        },
        {
            field: 'CurrentMilestone',
            title: translate('gridColumnCurrentMilestone'),
            minWidth: 180
        }
    ];
    const { setWidth } = useKendoResponsiveColWidths(gridRef, columns);
    const initialDataState: State = {
        take: 10,
        skip: 0,
        sort: []
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

    const handleDataStateChange = async (e: GridDataStateChangeEvent) => {
        // console.log('dataState', e.dataState);
        setDataState(e.dataState);
    };

    return (
        <Card className='dashboard-layout-table flex-fill'>
            <Card.Header>
                <h4>{translate('recentClearancesCardTitle')}</h4>
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
                            {columns.map((column, index) => {
                                return (
                                    <Column
                                        key={index}
                                        field={column.field}
                                        title={column.title}
                                        width={setWidth(column)}
                                        cells={column.cell}
                                    />
                                );
                            })}
                        </Grid>
                    )}
                </div>
            </Card.Body>
            <Card.Footer>
                <Button variant='secondary'>{translate('recentClearancesCardButtonLabel')}</Button>
            </Card.Footer>
        </Card>
    );
};

export default RecentClearancesCard;
