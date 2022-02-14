create table areas (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table categories (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table electric (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table main (
  id bigint not null primary key,
  quantities text,
  unities integer,
  classification text,
  items text,
  notes text,
  id_tuple uuid default uuid_generate_v4(),
  created_at timestamp default now()
);

create table pharmacy (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table stationery_2 (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table autoparts (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table foods (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table stationery_1 (
  id bigint not null,
  name text
);

create table cleaning (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table unities (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);

create table maintenance (
  id bigint not null primary key,
  created_at timestamp default now(),
  name text
);
