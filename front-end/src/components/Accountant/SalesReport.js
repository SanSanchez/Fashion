import React from 'react';
//import PropTypes from 'prop-types';
import TaxActions from '../../actions/taxActions';

export class SalesReport extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            sales: this.props.taxList,
            month: "",
            selectedMonth: "10",
            selectedYear: "2018"
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleMonthChange = this.handleMonthChange.bind(this);
        this.handleYearChange = this.handleYearChange.bind(this);
    }


    componentWillMount() {
        console.log(this.state.sales)
    }

    componentDidMount(){
        var now = new Date();
        var last = new Date(now.getFullYear(), now.getMonth(), 0);
        var from = now.getFullYear() + "-" + (now.getMonth() + 1) + "-01";
        var to = now.getFullYear() + "-" + (now.getMonth() + 1) + "-" + last.getDate();
        TaxActions.getIncomeRange(from, to);
    }

   async handleSubmit(event){
        event.preventDefault();
        let year = this.state.selectedYear;
        let month = this.state.selectedMonth;
        let from = year + "-" + month + "-01";
        let to = year + "-" + month + "-" + 29;
       await TaxActions.getIncomeRange(from, to);
        this.setState(
                {
                    sales: this.props.taxList,
                    month: this.state.month,
                    selectedMonth: month,
                    selectedYear: year
                });

    }

    handleMonthChange(event){
        this.setState({
            sales: this.props.taxList,
            month: this.state.month,
            selectedMonth: event.target.value,
            selectedYear: this.state.selectedYear
        });
    }


    handleYearChange(event){
        this.setState({
            sales: this.props.taxList,
            month: this.state.month,
            selectedMonth: this.state.selectedMonth,
            selectedYear: event.target.value
        })
    }


    createSaleRow(sale){
        return (
            <tr key={sale.order_id}>
                <td>{sale.purchase_code} </td>
                <td> {sale.total_price} </td>
                <td> {sale.date.replace("T00:00:00.000Z", '')} </td>
                <td> {sale.status} </td>
            </tr>
        );
    }

    getTotal(sale) {
        let totalEarnings = 0;
        var price = sale.total_price.replace('$', '');
        price = parseFloat(price);
        totalEarnings = totalEarnings + price;
        return totalEarnings;
    }


    render(){

        const sales = this.props.taxList;
        const salesList = sales.map(sale => this.createSaleRow(sale));
        const totalEarningsList = sales.map(sale => this.getTotal(sale));
        let totalEarnings = 0.0;
        let taxes = 0;
        for (var i =0;i < totalEarningsList.length;i++){
            totalEarnings = totalEarningsList[i] + totalEarnings;
            taxes = totalEarningsList[i] * 0.06 + taxes;
        }
        taxes = Math.round(taxes * 100)/100;
        return (<div>
                <div className={'float-middle'}>
                    <div align="center">
                        <h2>Sales</h2>
                        <form onSubmit={this.handleSubmit}>
                            <div>
                                <label>Select Month</label>
                                <select onChange={this.handleMonthChange}>
                                    <option selected value="01">January</option>
                                    <option value="02">February</option>
                                    <option value="03">March</option>
                                    <option value="04">April</option>
                                    <option value="05">May</option>
                                    <option value="06">June</option>
                                    <option value="07">July</option>
                                    <option value="08">August</option>
                                    <option value="09">September</option>
                                    <option value="10">October</option>
                                    <option value="11">November</option>
                                    <option value="12">December</option>
                                </select>
                                <label>Select Year</label>
                                <select onChange={this.handleYearChange}>
                                    <option value="2017">2017</option>
                                    <option value="2018">2018</option>
                                    <option value="2019">2019</option>
                                    <option value="2020">2020</option>
                                </select>
                            </div>
                            <input type="submit" value="Submit" />
                        </form>
                    </div>
                    <div align="center"><p>Total in Sales: {"$" + totalEarnings}</p></div>
                    <div align="center"><p>Accumulated Taxes: {"$" + taxes}</p></div>
                    <div align="center">
                    <table className="mt-4">
                        <thead>
                        <tr>
                            <th width="25%">Purchase Number</th>
                            <th width="25%">Sale Amount</th>
                            <th width="25%">Date of Purchase</th>
                            <th width="25%">Status of Purchase</th>
                        </tr>
                        </thead>
                        <tbody>
                        {salesList}
                        </tbody>
                    </table>
                    </div>
                </div>
            </div>
        )

    }
}

export default SalesReport;