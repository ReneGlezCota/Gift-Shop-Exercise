--
-- PostgreSQL database dump
--

-- Dumped from database version 9.5.10
-- Dumped by pg_dump version 9.5.5

-- Started on 2017-12-03 23:33:01

SET statement_timeout = 0;
SET lock_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SET check_function_bodies = false;
SET client_min_messages = warning;
SET row_security = off;

--
-- TOC entry 1 (class 3079 OID 12355)
-- Name: plpgsql; Type: EXTENSION; Schema: -; Owner: 
--

CREATE EXTENSION IF NOT EXISTS plpgsql WITH SCHEMA pg_catalog;


--
-- TOC entry 2142 (class 0 OID 0)
-- Dependencies: 1
-- Name: EXTENSION plpgsql; Type: COMMENT; Schema: -; Owner: 
--

COMMENT ON EXTENSION plpgsql IS 'PL/pgSQL procedural language';


SET search_path = public, pg_catalog;

SET default_tablespace = '';

SET default_with_oids = false;

--
-- TOC entry 188 (class 1259 OID 16451)
-- Name: categories; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE categories (
    id integer NOT NULL,
    name character(50) NOT NULL
);


ALTER TABLE categories OWNER TO postgres;

--
-- TOC entry 187 (class 1259 OID 16449)
-- Name: categories_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE categories_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE categories_id_seq OWNER TO postgres;

--
-- TOC entry 2143 (class 0 OID 0)
-- Dependencies: 187
-- Name: categories_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE categories_id_seq OWNED BY categories.id;


--
-- TOC entry 186 (class 1259 OID 16443)
-- Name: products; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE products (
    id integer NOT NULL,
    name character(50) NOT NULL,
    price double precision NOT NULL,
    categoriid integer NOT NULL
);


ALTER TABLE products OWNER TO postgres;

--
-- TOC entry 185 (class 1259 OID 16441)
-- Name: products_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE products_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE products_id_seq OWNER TO postgres;

--
-- TOC entry 2144 (class 0 OID 0)
-- Dependencies: 185
-- Name: products_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE products_id_seq OWNED BY products.id;


--
-- TOC entry 182 (class 1259 OID 16427)
-- Name: roles; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE roles (
    id integer NOT NULL,
    role character(50) NOT NULL
);


ALTER TABLE roles OWNER TO postgres;

--
-- TOC entry 181 (class 1259 OID 16425)
-- Name: roles_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE roles_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE roles_id_seq OWNER TO postgres;

--
-- TOC entry 2145 (class 0 OID 0)
-- Dependencies: 181
-- Name: roles_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE roles_id_seq OWNED BY roles.id;


--
-- TOC entry 184 (class 1259 OID 16435)
-- Name: users; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE users (
    id integer NOT NULL,
    username character(50) NOT NULL,
    password character(10) NOT NULL,
    firstname character(50) NOT NULL,
    lastname character(50) NOT NULL,
    roleid integer NOT NULL
);


ALTER TABLE users OWNER TO postgres;

--
-- TOC entry 183 (class 1259 OID 16433)
-- Name: users_id_seq; Type: SEQUENCE; Schema: public; Owner: postgres
--

CREATE SEQUENCE users_id_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;


ALTER TABLE users_id_seq OWNER TO postgres;

--
-- TOC entry 2146 (class 0 OID 0)
-- Dependencies: 183
-- Name: users_id_seq; Type: SEQUENCE OWNED BY; Schema: public; Owner: postgres
--

ALTER SEQUENCE users_id_seq OWNED BY users.id;


--
-- TOC entry 2002 (class 2604 OID 16454)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categories ALTER COLUMN id SET DEFAULT nextval('categories_id_seq'::regclass);


--
-- TOC entry 2001 (class 2604 OID 16446)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY products ALTER COLUMN id SET DEFAULT nextval('products_id_seq'::regclass);


--
-- TOC entry 1999 (class 2604 OID 16430)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles ALTER COLUMN id SET DEFAULT nextval('roles_id_seq'::regclass);


--
-- TOC entry 2000 (class 2604 OID 16438)
-- Name: id; Type: DEFAULT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users ALTER COLUMN id SET DEFAULT nextval('users_id_seq'::regclass);


--
-- TOC entry 2134 (class 0 OID 16451)
-- Dependencies: 188
-- Data for Name: categories; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY categories (id, name) FROM stdin;
3	Sports                                            
4	Cell Phones                                       
1	Computers                                         
2	Electronics                                       
\.


--
-- TOC entry 2147 (class 0 OID 0)
-- Dependencies: 187
-- Name: categories_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('categories_id_seq', 4, true);


--
-- TOC entry 2132 (class 0 OID 16443)
-- Dependencies: 186
-- Data for Name: products; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY products (id, name, price, categoriid) FROM stdin;
1	Laptop Dell                                       	15000	1
4	Laptop Dell                                       	10000	1
2	Laptop Sony                                       	14000	1
3	Laptop Lenovo                                     	12000	1
9	Laptop HP                                         	9500	1
10	Tablet Samsung                                    	2000	2
11	Tablet Lenovo                                     	2500	2
12	Headphones Sony                                   	1500	2
13	Headphones Pionner                                	1000	2
14	Headphones Phillips                               	1000	2
15	Jersey RedSox                                     	1000	3
16	Jersey Dodgers                                    	900	3
17	Baseball Glove Mizuno                             	1900	3
18	Baseball Glove Rawling                            	1500	3
19	Baseball Glove Wilson                             	1000	3
20	Samsung S7                                        	8000	4
21	Samsung S7                                        	8500	4
22	Samsung S8                                        	18500	4
23	Apple iPhone                                      	18000	4
24	Apple iPhone                                      	10000	4
25	Motorola G4                                       	5000	4
\.


--
-- TOC entry 2148 (class 0 OID 0)
-- Dependencies: 185
-- Name: products_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('products_id_seq', 25, true);


--
-- TOC entry 2128 (class 0 OID 16427)
-- Dependencies: 182
-- Data for Name: roles; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY roles (id, role) FROM stdin;
1	Admin                                             
2	Registered                                        
3	Unregistered                                      
\.


--
-- TOC entry 2149 (class 0 OID 0)
-- Dependencies: 181
-- Name: roles_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('roles_id_seq', 3, true);


--
-- TOC entry 2130 (class 0 OID 16435)
-- Dependencies: 184
-- Data for Name: users; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY users (id, username, password, firstname, lastname, roleid) FROM stdin;
1	Admin                                             	123       	Rene                                              	Gonzalez                                          	1
2	User1                                             	123       	User                                              	Registered                                        	2
3	User2                                             	123       	User                                              	Unregistered                                      	3
\.


--
-- TOC entry 2150 (class 0 OID 0)
-- Dependencies: 183
-- Name: users_id_seq; Type: SEQUENCE SET; Schema: public; Owner: postgres
--

SELECT pg_catalog.setval('users_id_seq', 3, true);


--
-- TOC entry 2010 (class 2606 OID 16456)
-- Name: PK_Categories; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY categories
    ADD CONSTRAINT "PK_Categories" PRIMARY KEY (id);


--
-- TOC entry 2008 (class 2606 OID 16448)
-- Name: PK_Products; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY products
    ADD CONSTRAINT "PK_Products" PRIMARY KEY (id);


--
-- TOC entry 2004 (class 2606 OID 16432)
-- Name: PK_Roles; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY roles
    ADD CONSTRAINT "PK_Roles" PRIMARY KEY (id);


--
-- TOC entry 2006 (class 2606 OID 16440)
-- Name: PK_Users; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT "PK_Users" PRIMARY KEY (id);


--
-- TOC entry 2012 (class 2606 OID 16472)
-- Name: FK_ProductsCategories; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY products
    ADD CONSTRAINT "FK_ProductsCategories" FOREIGN KEY (categoriid) REFERENCES categories(id);


--
-- TOC entry 2011 (class 2606 OID 16467)
-- Name: FK_UserRoles; Type: FK CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY users
    ADD CONSTRAINT "FK_UserRoles" FOREIGN KEY (roleid) REFERENCES roles(id);


--
-- TOC entry 2141 (class 0 OID 0)
-- Dependencies: 6
-- Name: public; Type: ACL; Schema: -; Owner: postgres
--

REVOKE ALL ON SCHEMA public FROM PUBLIC;
REVOKE ALL ON SCHEMA public FROM postgres;
GRANT ALL ON SCHEMA public TO postgres;
GRANT ALL ON SCHEMA public TO PUBLIC;


-- Completed on 2017-12-03 23:33:02

--
-- PostgreSQL database dump complete
--

