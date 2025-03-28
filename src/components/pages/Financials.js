import React from 'react'
import singlePageTop from "../../assets/imgs/graphics/singlepage_top.png"
import singlePageBottom from "../../assets/imgs/graphics/singlepage_bottom_white.png"
import singlePageLeft from "../../assets/imgs/graphics/singlepage_left.png"
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

export default function Financials() {

  const [revenue, setRevenue] = React.useState({
    grants: 4695672,
    inkind: 163288,
    contributions: 45906,
    events : 2285,
    miscellaneous: 30263
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
    program: 3995388,
    management: 277226,
    fundraising: 76574,
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

  
        <h1 className='section-header single-page-header'>FY2023 Annual Report Financials</h1>
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
            <div>$4,695,672</div> 
            <div>In-kind Contributions</div> 
            <div>$163,288</div> 
            <div>Contributions</div> 
            <div>$45,906</div> 
            <div>Special events, net</div> 
            <div>$2,285</div> 
            <div>Other revenue</div> 
            <div>$30,263</div> 
            <div className='financials-table-footer-blue'>Total revenues, gains and other support</div>
            <div className='financials-table-footer-blue'>$4,937,414</div>
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
            <p className='financials-table-header financials-subhead'>Functional Expenses FY2024</p>
            <div>Program</div>
            <div>$4,286,984</div> 
            <div>Management & General</div> 
            <div>$346,246</div> 
            <div>Fundraising</div> 
            <div>$143,634</div> 
            <div className='financials-table-footer-blue'>Total Expenses</div>
            <div className='financials-table-footer-blue'>$4,776,864</div>
          </div>
        </div>
        
      </div>
      </div>
      <div className='financials-content-bottom burgundy-linear-gradient'>
        <div className='financials-container'>
          <p className='section-subhead financials-section-subhead'>FY24 Statement of Financial Position</p>
          <div className='financials-table three-column'>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Assets</p>
              <div>Cash</div>
              <div>$1,147,240</div> 
              <div>Grants and contract receivables</div> 
              <div>$997,474</div> 
              <div>Prepaid expenses and deposits</div> 
              <div>$39,236</div>
              <div>Operating lease right-of-use asset, net</div> 
              <div>$684,311</div>
              <div>Finance lease right-of-use asset</div> 
              <div>$9,470</div>   
              <div>Property and equipment, net</div> 
              <div>$10,961</div> 
              <div className='financials-table-footer-white'>Total Assets: </div>
              <div className='financials-table-footer-white'>$2,888,692</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Liabilities</p>
              <div>Accounts Payable</div>
              <div>$22,225</div> 
              <div>Accrued Liabilities</div> 
              <div>$304,050</div> 
              <div>Operating lease liability</div> 
              <div>$688,335</div>  
              <div>Finance lease liability</div> 
              <div>$9,563</div>  
              <div className='financials-table-footer-white'>Total Liabilities:</div>
              <div className='financials-table-footer-white'>$1,024,173</div>
            </div>
            <div className='financials-table bottom-two-column'>
              <p className='financials-table-header financials-subhead'>Net Assets</p>
              <div>Without donor restrictions</div>
              <div>$1,734,979</div> 
              <div>With donor restrictions</div> 
              <div>$129,540</div>   
              <div className='financials-table-footer-white'>Total Net Assets:</div>
              <p className='financials-table-footer-white'>$1,864,519</p>
            </div>   
          </div>
          <div className='main-table-footer'>Total Liabilities and Net Assets: $2,888,692</div>  
        </div>
  
          
        <div className='financials-copy-bottom copy-bottom'>
          <div className='financials-downloads-container'>
            <p className='section-subhead financials-section-subhead'>Financial Reports Downloads:</p>
            <div className='financials-downloads'>Form 990s: 
              <a href={require("../../Data/FinancialReports/2020.990.pdf")} download="Form 990 YR2020" target="_blank" rel="noopener noreferrer" className='link-white-text'>2020</a>, 
              <a href={require("../../Data/FinancialReports/2021.990.pdf")} download="Form 990 YR2021" target="_blank" rel="noopener noreferrer" className='link-white-text'>2021</a>,
              <a href={require("../../Data/FinancialReports/2022.990.pdf")} download="Form 990 YR2022" target="_blank" rel="noopener noreferrer" className='link-white-text'>2022</a>
            </div>
            <div className='financials-downloads'>Financial Audits: 

              <a href={require("../../Data/FinancialReports/FY22.Audit.pdf")} download="FY22 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY22</a>,
              <a href={require("../../Data/FinancialReports/FY23.Audit.pdf")} download="FY23 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY23</a>,
              <a href={require("../../Data/FinancialReports/FY24.Audit.pdf")} download="FY24 Financial Audit" target="_blank" rel="noopener noreferrer" className='link-white-text'>FY24</a>
            </div>       
          </div>   
        </div>
        <img src={singlePageBottom} className='single-page-graphic single-page-bottom-lighter' alt='' />
      </div> 
    </section>
  )
}
