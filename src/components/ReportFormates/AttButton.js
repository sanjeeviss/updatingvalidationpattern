import React from 'react'
import Paycalc from './Payslip';
import { Grid, Button } from '@mui/material';
import generatePDF from 'react-to-pdf';
import { useRef } from 'react';
import Medical from './Medical';
import Esicslip from './Esicslip';
import BasicDetails from'./BasicdetailsReports';
import EarlyinAtt from './EarlyInAttReports';
import EarlyoutAtt from './EarlyOutAttReports';
import Latein from './LateInReports';
import Lateout from './LateOutReports';
import OTHrs from './OTHrsAttReports';
import AbsentAtt from './AbsentAttReports';
import AttReport from './AttReport1';
import WorkedHrs from './WorkedHrsReports';

function attReports() {
    const targetRef = useRef();
    return (
      <div className="App">
        <div ref={targetRef}>
        < AttReport/>
        </div>
        <div>
        <Grid item xs={12} textAlign={'center'}>
          <Button variant='outlined' onClick={ ()=> generatePDF(targetRef, {filename: 'AttReport.pdf'})}>Download Pdf</Button>
          </Grid>
          </div>
     </div>
    );
}

export default attReports