import React from "react";
import DashboardCalendar from "../../Dashboard/DashboardCalendar";
import Breadcrumbs from "../../components/Breadcrumbs";
import TopCards from "../../Dashboard/admin/TopCards";
import DashboardNotification from "../../Dashboard/admin/DashboardNotification";
import PaymentStatistics from "../../Dashboard/admin/PaymentStatistics";
import RecentWithdrawls from "../../Dashboard/admin/RecentWithdrawls";
import TopVendors from "../../Dashboard/admin/TopVendors";
import WasteCollectedChart from "../../charts/adminCharts/WasteCollectedChart";
import NylonBagGenerationChart from "../../charts/adminCharts/NylonBagGenerationChart";
import NylonSalesChart from "../../charts/adminCharts/NylonSalesChart";
import VendorStatisticsChart from "../../charts/adminCharts/VendorStatisticsChart";
import RevenueShareChart from "../../charts/adminCharts/RevenueShareChart";
import RevenueEarned from "../../charts/adminCharts/RevenueEarned";
import RecentInvoices from "../../charts/adminCharts/RecentInvoices";

function Dashboard() {
  return (
    <div className="container-fluid">
      <Breadcrumbs items={[{ label: "Dashboard" }]} />
      <div className="row">
        <div className="col-lg-12 col-xl-8">
          <TopCards />
          <WasteCollectedChart />
          <NylonBagGenerationChart />
          <NylonSalesChart />
          <div className="row">
            <div className="col-lg-8 my-3">
              <VendorStatisticsChart />
            </div>
            <div className="col-lg-4 my-3">
              <RevenueShareChart />
            </div>
          </div>
          <RevenueEarned />
          <RecentInvoices />
        </div>
        <div className="col-lg-12 col-xl-4">
          <DashboardCalendar />
          <DashboardNotification />
          <PaymentStatistics />
          <TopVendors />
          <RecentWithdrawls />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
