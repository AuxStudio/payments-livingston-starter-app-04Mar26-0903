/**
 * Represents the various statuses a clearance request can have during its lifecycle. These statuses include stages such as acceptance, rejection, pending review, clearance,
 * release, hold, transit, and delivery. Each status indicates a specific point in the customs clearance process, providing insight into the current state of the clearance request.
 */
export type ClearanceStatus =
    | 'Customs accepted'
    | 'Customs rejected'
    | 'Customs pending'
    | 'Customs cleared'
    | 'Customs released'
    | 'Customs hold'
    | 'Customs in transit'
    | 'Customs delivered';
export type ClearanceMOT = 'Person' | 'Truck' | 'Ship' | 'Air' | 'Train' | 'Other';

export type Clearance = {
    EntryNo: string;
    CargoControlNo: string;
    RefNo: string;
    BOLNo: string;
    Status: ClearanceStatus;
    CurrentMilestone: string;
    Date: string;
    Carrier: string;
    MOT: ClearanceMOT;
    Docs: number;
    Destination: string;
    ClientNo: string;
};
