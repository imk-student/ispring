CREATE TABLE public.cart (
	id serial4 NOT NULL,
	user_id int4 NOT NULL,
	address varchar NULL,
	etd timestamp NULL,
	CONSTRAINT cart_pk PRIMARY KEY (id),
	CONSTRAINT cart_users_fk FOREIGN KEY (user_id) REFERENCES public.users(id)
);

CREATE TABLE public.users (
	id serial4 NOT NULL,
	first_name varchar NOT NULL,
	second_name varchar NOT NULL,
	email varchar NOT NULL,
	phone varchar NOT NULL,
	last_address varchar NULL,
	CONSTRAINT users_check_email CHECK (((email)::text ~~ '%_@__%.__%'::text)),
	CONSTRAINT users_check_phone CHECK (((phone)::text ~~ '(?:\+?)[78]+[0-9() -]{16,17}'::text)),
	CONSTRAINT users_pk PRIMARY KEY (id)
);

CREATE TABLE public.goods (
	id serial4 NOT NULL,
	"type" varchar NULL,
	"name" varchar NOT NULL,
	description varchar NULL,
	price money NOT NULL,
	CONSTRAINT goods_pk PRIMARY KEY (id)
);

CREATE TABLE public.details (
	id serial4 NOT NULL,
	detail_category varchar NULL,
	detail_name varchar NULL,
	detail_value numeric NULL,
	detail_unit varchar NULL,
	CONSTRAINT details_pk PRIMARY KEY (id)
);

CREATE TABLE public.goods_details (
	goods_id int4 NOT NULL,
	detail_id int4 NOT NULL,
	CONSTRAINT goods_details_details_fk FOREIGN KEY (detail_id) REFERENCES public.details(id),
	CONSTRAINT goods_details_goods_fk FOREIGN KEY (goods_id) REFERENCES public.goods(id)
);

CREATE TABLE public.cart_goods (
	cart_id int4 NOT NULL,
	goods_id int4 NOT NULL,
	amount int4 NOT NULL,
	CONSTRAINT cart_goods_cart_fk FOREIGN KEY (cart_id) REFERENCES public.cart(id),
	CONSTRAINT cart_goods_goods_fk FOREIGN KEY (goods_id) REFERENCES public.goods(id)
);
