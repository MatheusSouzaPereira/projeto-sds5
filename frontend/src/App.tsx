import NavBar from "components/NavBar";
import Footer from "components/Footer";
import DataTable from "components/DataTable";
import BarChart from "components/BarChat";
import DonutChart from "components/DonutChart";
function App() {
  return (
    <>
      <NavBar />
      <div className="container">
        <h1 className="text-primary py-3">Dash de Vendas</h1>
        <div className="row px-3">
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Atendimento(%)
            </h5>
            <BarChart />
      
          </div>
          <div className="col-sm-6">
            <h5 className="text-center text-secondary">
              Taxa de Atendimento(%)
            </h5>
         
            <DonutChart />
          </div>
          <div className="py-3 text-primary">
            <h2>Todas os atendimento realizado</h2>
          </div>
        </div>
        <DataTable />
      </div>

      <Footer />
    </>
  );
}

export default App;
