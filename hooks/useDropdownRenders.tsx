import { useState, useEffect } from "react";
import {
  getCategories,
  getCatFoods,
  getUnities,
  getCatStationery1,
  getCatAutoparts,
  getCatCleaning,
  getCatElectric,
  getCatPharmacy,
  getCatStationery2,
  getCatMaintenance,
} from "../services/index";

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

    getCatFoods().then(([error, data]) => {
      if (error) return setError(error);
      setFood(data);
    });

    getCatStationery1().then(([error, data]) => {
      if (error) return setError(error);
      setStationery1(data);
    });

    getCatStationery2().then(([error, data]) => {
      if (error) return setError(error);
      setStationery2(data);
    });

    getCatAutoparts().then(([error, data]) => {
      if (error) return setError(error);
      setAutopart(data);
    });

    getCatCleaning().then(([error, data]) => {
      if (error) return setError(error);
      setClean(data);
    });

    getCatElectric().then(([error, data]) => {
      if (error) return setError(error);
      setElectricc(data);
    });

    getCatPharmacy().then(([error, data]) => {
      if (error) return setError(error);
      setPharmacyy(data);
    });

    getCatMaintenance().then(([error, data]) => {
      if (error) return setError(error);
      setMaintenancee(data);
    });
  }, []);

  const foods = food.map((foo) => (
    <option key={`foods-${foo.id}`}>{foo.name}</option>
  ));

  const stationery_1 = stationery1.map((stat1) => (
    <option key={`stationery_1-${stat1.id}`}>{stat1.name}</option>
  ));

  const stationery_2 = stationery2.map((stat2) => (
    <option key={`stationery_2-${stat2.id}`}>{stat2.name}</option>
  ));

  const autoparts = autopart.map((autop) => (
    <option key={`autoparts-${autop.id}`}>{autop.name}</option>
  ));

  const cleaning = clean.map((cle) => (
    <option key={`cleaning-${cle.id}`}>{cle.name}</option>
  ));

  const electric = electricc.map((elec) => (
    <option key={`electric-${elec.id}`}>{elec.name}</option>
  ));

  const maintenance = maintenancee.map((main) => (
    <option key={`maintenance-${main.id}`}>{main.name}</option>
  ));

  const pharmacy = pharmacyy.map((phar) => (
    <option key={`pharmacy-${phar.id}`}>{phar.name}</option>
  ));

  const renameTables = {
    ALIMENTOS: foods,
    PAPELERIA_1: stationery_1,
    PAPELERIA_2: stationery_2,
    VEHICULOS: autoparts,
    LIMPIEZA: cleaning,
    ELECTRICO: electric,
    MANTENIMIENTO: maintenance,
    FARMACIA: pharmacy,
  };
  return { renameTables };
};
