interface Areas {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Categories {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Electric {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Main {
  id: number /* primary key */;
  quantities?: string;
  unities?: any; // type unknown;
  classification?: string;
  items?: string;
  notes?: string;
  id_tuple: string;
  created_at?: string;
}

interface Pharmacy {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Stationery_2 {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Autoparts {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Foods {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Stationery_1 {
  id: number;
  name?: string;
}

interface Cleaning {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Unities {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}

interface Maintenance {
  id: number /* primary key */;
  created_at?: string;
  name?: string;
}
