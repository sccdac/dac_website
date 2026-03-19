import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom_white.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Financials() {

  const [revenue, setRevenue] = React.useState({
    grants: 4787728,
    inkind: 23527,
    contributions: 18998,
    events : 0,
    miscellaneous: 37912
  })
  
  ChartJS.register(ArcElement, Tooltip, Legend);

  const styles = { 
    responsive: true,
    maintainAspectRatio: true,
    aspectRatio: 1,
    onResize: null,
    resizeDelay: 0,
  }

  const chartOptions = {
    responsive: true,
    maintainAspectRatio: true,
  }
  
  const revenueData = {
    // In future add 'Misc' to the array below if there is a value for this category
    labels: ['Grants & Contract Revenue', 'In-kind Contributions','Contributions', 'Special Events', 'Other revenue']
    ,
    datasets: [
      {
        label: '$',
        data: [ revenue.grants, revenue.inkind, revenue.contributions, revenue.events, revenue.miscellaneous],
        backgroundColor: [
          '#EF767A',
          '#861657', 
          'hsl(206, 25%, 80%)',
          'hsl(205, 68.30%, 64.10%)',
          '#004280',
        ],
        borderColor: [
          '#EF767A',
          '#861657',
          'hsl(206, 25%, 80%)',
          'hsl(205, 68.30%, 64.10%)',
          '#004280',
        ],
        borderWidth: 1,
      },
    ],
  };

  const [expsenses, setExpenses] = React.useState({
    program: 4234411,
    management: 351752,
    fundraising: 153959,
  })
  
  ChartJS.register(ArcElement, Tooltip, Legend);
  
  const expenseData = {
    labels: ["Program", "Management & General", "Fundraising"],
    datasets: [
      {
        label: '$',
        data: [ expsenses.program, expsenses.management, expsenses.fundraising],
        backgroundColor: [
          '#861657',
          'hsl(206, 25%, 80%)',
          '#EF767A',
        ],
        borderColor: [
          '#861657',
          'hsl(206, 25%, 80%)',
          '#EF767A',
        ],
        borderWidth: 1,
      },
    ],
  };





  return (
    <section className='single-page-layout financials-section'>
      <img src={singlePageTop} className='section-graphic single-page-graphic programs-top financials-top' alt='' />
      <img src={singlePageLeft} className='section-graphic single-page-graphic programs-left' alt='' />
      <div className='financials-content single-page-content'>
        <div className='financials-graphic-main'>

  
        <h1 className='section-header single-page-header'>FY2025 Annual Report Financials</h1>
        <div className='financials-graphic-container'>
          <div className='financials-graphic'>
            <p className='section-subhead financials-section-subhead'>Revenue & Support</p>
            {revenue ? <div className="budget-graph">
              <Doughnut 
                style={styles}
                className="donut-graph"
                data={revenueData}
                options={chartOptions}
              />
            </div> : null}
          </div>
          <div className='financials-table two-column'>
            <p className='financials-table-header financials-subhead'>Revenue & Support FY2024</p>
            <div>Grants & Contract Revenue</div>
            <div>$4,787,728</div> 
            <div>In-kind Contributions</div> 
            <div>$23,527</div> 
            <div>Contributions</div> 
            <div>$18,998</div> 
            {/* <div>Special events, net</div> 
            <div>$2,285</div>  */}
            <div>Other revenue</div> 
            <div>$37,912</div> 
            <div className='financials-table-footer-blue'>Total revenues, gains and other support</div>
            <div className='financials-table-footer-blue'>$4,868,165</div>
          </div>
        </div>

        <div className='financials-graphic-container'>
          <div className='financials-graphic'>
            <p className='section-subhead'>Expenses</p>
            {revenue ? <div className="budget-graph">
              <Doughnut 
                className="donut-graph"
                data={expenseData}  
              />
            </div> : null}
          </div>
          <div className='financials-table two-column'>
            <p className='financials-table-header financials-subhead'>Functional Expenses FY2025</p>
            <div>Program</div>
            <div>$4,234,411</div> 
            <div>Management & General</div> 
            <div>$351,752</div> 
            <div>Fundraising</div> 
            <div>$153,959</div> 
            <div className='financials-table-footer-blue'>Total Expenses</div>
            <div className='financials-table-footer-blue'>$4,740,122</div>
          </div>
        </div>
        
      </div>
      </div>
      <div className='financials-content-bottom burgundy-linear-gradient'>
        <div className='financials-container'>
          <p className='section-subhead financials-section-subhead'>FY25 Statement of Financial Position</p>
          <div className='financials-table three-column'>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Assets</p>
              <div>Cash</div>
              <div>$1,317,865</div> 
              <div>Grants and contract receivables</div> 
              <div>$995,734</div> 
              <div>Prepaid expenses and deposits</div> 
              <div>$45,947</div>
              <div>Operating lease right-of-use asset, net</div> 
              <div>$547,054</div>
              <div>Finance lease right-of-use asset</div> 
              <div>$5,804</div>   
              <div>Property and equipment, net</div> 
              <div>$2,173</div> 
              <div className='financials-table-footer-white'>Total Assets: </div>
              <div className='financials-table-footer-white'>$2,914,577</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Liabilities</p>
              <div>Accounts Payable</div>
              <div>$24,277</div> 
              <div>Accrued Liabilities</div> 
              <div>$332,953</div> 
              <div>Operating lease liability</div> 
              <div>$558,784</div>  
              <div>Finance lease liability</div> 
              <div>$6,001</div>  
              <div className='financials-table-footer-white'>Total Liabilities:</div>
              <div className='financials-table-footer-white'>$922,015</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Net Assets</p>
              <div>Without donor restrictions</div>
              <div>$1,695,182</div> 
              <div>With donor restrictions</div> 
              <div>$297,380</div>   
              <div className='financials-table-footer-white'>Total Net Assets:</div>
              <p className='financials-table-footer-white'>$1,992,562</p>
            </div>   
          </div>
          <div className='main-table-footer'>Total Liabilities and Net Assets: $2,914,577</div>  
        </div>
  
          
        <div className='financials-copy-bottom copy-bottom'>
          <div className='financials-downloads-container'>
            <p className='section-subhead financials-section-subhead'>Financial Reports Downloads:</p>
            <div className='financials-downloads'>Form 990s: 
              <a href={require("../../Data/FinancialReports/2021.990.pdf")} download="Form 990 YR2021" target="_blank" rel="noopener noreferrer" className='link-white-text'>2021</a>, 
              <a href={require("../../Data/FinancialReports/2022.990.pdf")} download="Form 990 YR2022" target="_blank" rel="noopener noreferrer" className='link-white-text'>2022</a>,
              <a href={require("../../Data/FinancialReports/2023.990.pdf")} download="Form 990 YR2023" target="_blank" rel="noopener noreferrer" className='link-white-text'>2023</a>
            </div>
            <div className='financials-downloads'>Financial Audits: 

              <a href={require("../../Data/FinancialReports/FY23.Audit.pdf")} download="FY23 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY23</a>,
              <a href={require("../../Data/FinancialReports/FY24.Audit.pdf")} download="FY24 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY24</a>,
              <a href={require("../../Data/FinancialReports/FY25.Audit.pdf")} download="FY25 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY25</a>
            </div>       
          </div>   
        </div>
        <img src={singlePageBottom} className='single-page-graphic single-page-bottom-lighter' alt='' />
      </div> 
    </section>
  )
}
