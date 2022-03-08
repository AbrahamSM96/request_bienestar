import { useState, useEffect } from "react";
import {
  getCatFoods,
  getCatStationery1,
  getCatAutoparts,
  getCatCleaning,
  getCatElectric,
  getCatPharmacy,
  getCatStationery2,
  getCatMaintenance,
} from "../services/index";
interface propsDrop {
  id: string;
  name: string;
}
export const useDropdownRenders = () => {
  const [food, setFood] = useState([]);
  const [stationery1, setStationery1] = useState([]);
  const [stationery2, setStationery2] = useState([]);
  const [autopart, setAutopart] = useState([]);
  const [clean, setClean] = useState([]);
  const [electricc, setElectricc] = useState([]);
  const [pharmacyy, setPharmacyy] = useState([]);
  const [maintenancee, setMaintenancee] = useState([]);
  const [error, setError] = useState<null>(null);

  useEffect(() => {
    fetch("/api/alimentos")
      .then((response) => response.json())
      .then((data) => setFood(data));

    // getCatFoods().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setFood(data);
    // });

    fetch("/api/papelerias_1")
      .then((response) => response.json())
      .then((data) => setStationery1(data));

    // getCatStationery1().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setStationery1(data);
    // });

    fetch("/api/papelerias_2")
      .then((response) => response.json())
      .then((data) => setStationery2(data));

    // getCatStationery2().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setStationery2(data);
    // });

    fetch("/api/m_vehiculos")
      .then((response) => response.json())
      .then((data) => setAutopart(data));

    // getCatAutoparts().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setAutopart(data);
    // });

    fetch("/api/limpiezas")
      .then((response) => response.json())
      .then((data) => setClean(data));

    // getCatCleaning().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setClean(data);
    // });

    fetch("/api/m_electricos")
      .then((response) => response.json())
      .then((data) => setElectricc(data));
    // getCatElectric().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setElectricc(data);
    // });

    fetch("/api/farmacias")
      .then((response) => response.json())
      .then((data) => setPharmacyy(data));

    // getCatPharmacy().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setPharmacyy(data);
    // });

    fetch("/api/mantenimientos")
      .then((response) => response.json())
      .then((data) => setMaintenancee(data));

    // getCatMaintenance().then(([error, data]) => {
    //   if (error) return setError(error);
    //   setMaintenancee(data);
    // });
  }, []);

  const foods = food.map((foo: propsDrop) => (
    <option key={`foods-${foo.id}`}>{foo.name}</option>
  ));

  const stationery_1 = stationery1.map((stat1: propsDrop) => (
    <option key={`stationery_1-${stat1.id}`}>{stat1.name}</option>
  ));

  const stationery_2 = stationery2.map((stat2: propsDrop) => (
    <option key={`stationery_2-${stat2.id}`}>{stat2.name}</option>
  ));

  const autoparts = autopart.map((autop: propsDrop) => (
    <option key={`autoparts-${autop.id}`}>{autop.name}</option>
  ));

  const cleaning = clean.map((cle: propsDrop) => (
    <option key={`cleaning-${cle.id}`}>{cle.name}</option>
  ));

  const electric = electricc.map((elec: propsDrop) => (
    <option key={`electric-${elec.id}`}>{elec.name}</option>
  ));

  const maintenance = maintenancee.map((main: propsDrop) => (
    <option key={`maintenance-${main.id}`}>{main.name}</option>
  ));

  const pharmacy = pharmacyy.map((phar: propsDrop) => (
    <option key={`pharmacy-${phar.id}`}>{phar.name}</option>
  ));

  const renameTables = {
    ALIMENTOS: foods,
    PAPELERIA_1: stationery_1,
    PAPELERIA_2: stationery_2,
    M_VEHICULOS: autoparts,
    LIMPIEZA: cleaning,
    M_ELECTRICO: electric,
    MANTENIMIENTO: maintenance,
    FARMACIA: pharmacy,
  };
  return { renameTables };
};
