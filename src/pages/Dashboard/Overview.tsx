import { CardWithLink } from "../../components/Dashboard/Overview/Card";
import TotalProfit from "../../components/Dashboard/Overview/TotalProfit";
import TotalSales from "../../components/Dashboard/Overview/TotalSales";


const Overview = () => {
    return (
        <div className="mx-auto max-w-screen-xl p-1 lg:rounded-full  my-2">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 ">
                <CardWithLink></CardWithLink>
                <CardWithLink></CardWithLink>
                <CardWithLink></CardWithLink>
                <CardWithLink></CardWithLink>
            </div>
            <div className="grid lg:grid-cols-2 gap-1 grid-cols-1 ">
                <TotalSales></TotalSales>
                <TotalProfit></TotalProfit>

            </div>
        </div>
    );
};

export default Overview;